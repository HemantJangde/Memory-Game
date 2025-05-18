import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Audio from '../assets/audio3.mp3'
export default function EmojiButton({

  content,
  handleClick,
  matchedCardEntry,
  selectedCardEntry,
}) {
  const btnContent = matchedCardEntry || selectedCardEntry ? content : "?";
  const btnStyle =  matchedCardEntry ? "btn--emoji__back--matched" : 
  selectedCardEntry ? "btn--emoji__backed--selected":
  "btn--emoji__front"


  return (
    <button className={`btn btn--emoji ${btnStyle}` }onClick={handleClick}>

    <ReactAudioPlayer src={Audio} autoPlay />
    
      {btnContent}
    </button>
  );

}
