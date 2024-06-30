'use client';

import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import GeneratedComponent from './components/GeneratedComponent';

export default function Home() {

  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('');

  function removeMarkdown(text) {
    const start = text.indexOf("```jsx");
    const end = text.lastIndexOf("```");
  
    if (start !== -1 && end > start) {
      return text.slice(start + 6, end); // Remove "`jsx" and "`"
    }
  
    return text; // No code block found, return original text
  }

  const handleGenerate = async () => {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: prompt })
      });

      const data = await response.json();
      if (response.ok) {
        setCode(removeMarkdown(data.code));

      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard")
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const rawHtmlString = `          
    
<div className="flex flex-col gap-3 px-5 py-6 rounded shadow bg-white w-full max-w-[500px]">
  <h3 className="text-3xl font-bold">Stay in the loop</h3>

  <p className="text-sm">
    Get our latest updates, offers, and exclusive content delivered right to your
    inbox.
  </p>

  <form className="flex flex-col gap-2">
    <label className="flex flex-row items-center gap-2">
      <input
        type="email"
        placeholder="Your email address"
        className="px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Subscribe
      </button>
    </label>
  </form>
</div>
  `;

  const htmlString = parse(rawHtmlString);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-center text-sm lg:flex">
        <p className='text-3xl mb-4 font-bold text-gray-600'>UI Generator</p>
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-md bg-transparent overflow-hidden">
          <input
            className="peer h-full w-full outline-none bg-gray-100 text-sm text-gray-700 pl-4 pr-12"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt..."
          />
          <div onClick={handleGenerate} className="absolute right-0 flex items-center justify-center h-full w-12 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
            <p className='text-2xl'>➔</p>
          </div>
        </div>

        <div className='flex'>
          <button className='bg-blue-500 text-white px-5 py-3 mt-7 hover:bg-blue-600 m-2' onClick={handleCopy}>Copy Code</button>
          <button className='bg-blue-500 text-white px-5 py-3 mt-7 hover:bg-blue-600 m-2'>Refresh</button>
        </div>

        <div className='bg-transparent border-2 border-gray-300 rounded mt-7 p-2 flex justify-center'>
          <GeneratedComponent code={code}/>
        </div>

        <div className='bg-transparent rounded mt-7 p-2 flex justify-center'>
         
        </div>

      </div>
    </main>
  )
}
