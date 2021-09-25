import React from "react";
import emojipedia from '../emojipedia';
import Card from './Card';

// if you dont pass a key element it creates problem says
// Each child in a list should have a unique "key" prop
// Alternatively you can pass each elements individually
// const createCard = (emojiCard, index) => {
//   return(
//     <Card 
//       key={emojiCard.id}
//       emoji={emojiCard.emoji}
//       name={emojiCard.name}
//       meaning={emojiCard.meaning}
//     />
//   );
// }

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
