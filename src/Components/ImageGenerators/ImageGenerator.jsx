import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import Ai from "../Assets/Ai.jpeg";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    console.log(apiKey);

    // inputRef.current.value is used to access the value of the input field directly when the button is clicked.

    if (inputRef.current === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${apiKey}`, 
            Authorization: "Bearer" + apiKey,
          "User-Agent": "Chrome",
        },

        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "515x512",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    setImage_url(data);

    console.log(data);
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        Ai Image <span>generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url === "/" ? Ai : image_url} alt="Ai_image" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe what you want"
        />
        <div
          onClick={() => {
            imageGenerator();
          }}
          className="genarate-btn"
        >
          Generate Btn{" "}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;

// Read
// In this example, useRef is used to create a ref object called inputRef. This ref is then attached to the input element. We can access the DOM node using inputRef.current and call methods like focus() on it. This allows us to programmatically interact with the input element without needing to use class components or instance variables.

//Accessing DOM elements: You can use useRef to gain direct access to a DOM element in a functional component. This is useful for tasks such as focusing an input field, measuring the size of an element, or imperatively triggering animations.
// Storing mutable values: You can use useRef to store mutable values that persist between renders without causing the component to re-render. Unlike state variables (useState), changes to the value stored in a useRef object don't trigger a re-render.
// Here's a basic example demonstrating how useRef can be used to access a DOM element:

//Programme to read

/* import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};
*/
