import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-center text-sm lg:flex">
        <p className='text-3xl mb-4 font-bold text-gray-600'>UI Generator</p>
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-md bg-transparent overflow-hidden">
          <input
            class="peer h-full w-full outline-none bg-gray-100 text-sm text-gray-700 pl-4 pr-12"
            type="text"
            placeholder="Enter a prompt..."
          />
          <div class="absolute right-0 flex items-center justify-center h-full w-12 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
            <p className='text-2xl'>➔</p>
          </div>
        </div>

        <div className='bg-white h-svh rounded w-full mt-10'>

      </div>

      

      </div>
    </main>
  )
}
