import React from "react";
import { decodeEntity } from "html-entities";
import EmojiButton from "./EmojiButton";

export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}) {
  // console.log(data.slice(0,5));

  const cardEl = data.map((emoji, index) => {
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );
    const matchedCardEntry = matchedCards.find(
      (emoji) => emoji.index === index
    );

    const cardStyle = matchedCardEntry
      ? "card-item--matched"
      : selectedCardEntry
      ? "card-item--selected"
      : "";

    return (
      <li className={`card-item ${cardStyle} `} key={index}>
        <EmojiButton
          className="inner-btn"
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
          content={decodeEntity(emoji.htmlCode[0])}
          handleClick={() => handleClick(emoji.name, index)}
        />
      </li>
    );
  });

  //   console.log(data);
  return <ul className="card--container">{cardEl}</ul>;
}
