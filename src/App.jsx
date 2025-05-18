import { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
// import audioSrc from "../src/assets/audio.mp3";
import audioSrc1 from "../src/assets/audio1.mp3";


import "./App.css";
import Form from "./component/Form";
import MemoryCard from "./component/MemoryCard";

import Win from "./component/Win";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  let palySound = new Audio(audioSrc1)

  console.log("emoji data ", emojisData);

  // console.log("isGameOver", isGameOver);
  // console.log('Matched Cards', matchedCards);

  console.log(selectedCards);

  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchedCards((prevMatchedCards) => [
        ...prevMatchedCards,
        ...selectedCards,
      ]);
    }
    palySound.play();
  }, [selectedCards]);

  useEffect(() => {
    if (emojisData.length && matchedCards.length === emojisData.length) {
      setIsGameOver(true);
      {
      }
    }
  }, [matchedCards]);

  async function startGame(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );

      if (!response.ok) {
        throw new Error("could fetch data from API");
      }

      const data = await response.json();
      const dataSlice = await getDataSlice(data);
      const emojiArray = await getEmojisArray(dataSlice);

      setEmojisData(emojiArray);
      setIsGameOn(true);
    } catch (err) {
      console.error(err);
    }
  }

  async function getDataSlice(data) {
    const randomIndices = getRandomIndices(data);

    const dataSlice = randomIndices.map((index) => data[index]);

    return dataSlice;
  }

  function getRandomIndices(data) {
    const randomIndicesArray = [];

    for (let i = 0; i < 12; i++) {
      const randomNum = Math.floor(Math.random() * data.length);
      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum);
      } else {
        i--;
      }
    }
    return randomIndicesArray;
  }

  async function getEmojisArray(data) {
    const pairedEmojisArray = [...data, ...data];

    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp;
    }
    return pairedEmojisArray;
  }

  console.log("selected Card ", selectedCards);

  function turnCard(name, index) {
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );

    if (!selectedCardEntry && selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        { name, index },
      ]);
    } else if (!selectedCardEntry && selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  }

  return (
    <>
      <main>
        {isGameOver && <Win /> }

        {!isGameOn && <Form handleSubmit={startGame} />}
        {isGameOn && (
          <MemoryCard
            handleClick={turnCard}
            data={emojisData}
            matchedCards={matchedCards}
            selectedCards={selectedCards}
          />
        )}

        {/* <ReactAudioPlayer src={Audio} autoPlay /> */}
      </main>

    </>
  );
}

export default App;
