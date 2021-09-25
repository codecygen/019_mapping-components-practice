import React from "react";
import emojipedia from '../emojipedia';
import Card from './Card';

const createCard = (emojiCard, index) => {
  return(
    <Card 
      key={index}
      {...emojipedia[index]}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
        {/* <Card {...emojipedia[0]} />
        <Card {...emojipedia[1]} />
        <Card {...emojipedia[2]} /> */}
      </dl>
    </div>
  );
}

export default App;
