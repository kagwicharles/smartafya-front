import React, { useRef, useEffect } from "react"
import JSONPretty from 'react-json-pretty';

const CodeSnippet = () => {

    let hrefOrigin = useRef()


    useEffect(() => {
        hrefOrigin.current = window.location.origin
    }, []);

    const data = [
        {
            result: "Normal"
        }];

    return (
        <div>
            <pre>
                <code>
                    API Endpoint
                    <br />
                    {hrefOrigin.current}
                </code>
            </pre>

            Result Example:
            <JSONPretty id="json-pretty" data={data}></JSONPretty>

        </div>
    )
}

export default CodeSnippet