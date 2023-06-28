import React from "react";
import { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [randomMeme, setRandomMeme] = useState(null);

  function handleButtonClick() {
    const memeImage = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * 101);
    const newRandomMeme = memeImage[randomNum];
    setRandomMeme(newRandomMeme);
  }

  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   *
   * Log the URL of the image to the console. (Don't worry
   * about displaying the image yet)
   */
  console.log(randomMeme);
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        {randomMeme ? <h2>{randomMeme.name}</h2> : ""}
        {randomMeme ? <img src={randomMeme.url} width="90px" /> : ""}
        <button className="form--button" onClick={handleButtonClick}>
          Get a new meme image 🖼
        </button>
        {/* {randomMeme && <img src={randomMeme.img} />} */}
      </div>
    </main>
  );
}
