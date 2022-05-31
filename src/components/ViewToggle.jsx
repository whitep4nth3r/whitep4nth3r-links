import { useState } from "react";

export default function ViewToggle({ cards, readme }) {
  const [showCards, setShowCards] = useState(true);

  function toggleCards(newValue) {
    setShowCards(newValue);
  }

  return (
    <>
      <button onClick={() => toggleCards(true)}>Show cards</button>
      <button onClick={() => toggleCards(false)}>Show readme</button>
      {showCards && (
        <ul role="list" className="link__card-grid">
          {cards}
        </ul>
      )}
      {!showCards && readme}
    </>
  );
}

