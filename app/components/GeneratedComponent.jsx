'use client'

import parse from "html-react-parser";

const GeneratedComponent = ({code}) => {
    return (
        <div>
            {parse(code)}
        </div>
    )
}

export default GeneratedComponent;