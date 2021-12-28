import memeData from "../memeData";
import React from "react";

function Meme() {
  // eslint-disable-next-line no-undef
  //const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          GET A NEW IMAGE 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="" className="meme--image"></img>
    </main>
  );
}

export default Meme;
