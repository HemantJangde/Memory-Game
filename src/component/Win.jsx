import React from 'react'
import audioSrc1 from '../assets/audio5.mp3'
import ReactAudioPlayer from 'react-audio-player'

export default function Win() {
  const sound = new Audio(audioSrc1)
  return (

   
    <>
    <div className="box">

        <h2>You Win!!</h2>
        <ReactAudioPlayer src={audioSrc1}autoPlay/>




    </div>
    </>
  )
}
