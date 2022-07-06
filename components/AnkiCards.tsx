import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const StyledTinderCard = styled(TinderCard)`
  position: fixed;
`;

const StyledCard = styled.div`
  padding: 32px;
  min-height: 300px;
  border-radius: 10px;
  cursor: grab;
  background: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const cardColors = [
  "#d6d8f0",
  "#ff9f8c",
  "#3de5b2",
  "#f8f473",
  "#fff",
  "#cccbd4",
  "#ff826a",
  "#3de5b2",
  "#ede5e3",
];

function AnkiCards() {
  const [isViewAnswer, setIsViewAnswer] = useState(false);

  const swiped = () => {};

  const outOfFrame = () => {};

  const cards = [
    {
      question: "Le House",
      description: "femme",
      image: "🏘️",
      answer: "The House",
    },
    {
      question: "Le Dog",
      description: "femme",
      image: "🏘️",
      answer: "Chat",
    },
  ];

  function handleClick() {
    setIsViewAnswer(!isViewAnswer);
  }

  return (
    <Container>
      {cards.map((card) => (
        // @ts-ignore
        <StyledTinderCard
          key={card.question}
          onSwipe={() => swiped()}
          onCardLeftScreen={() => outOfFrame()}
        >
          <StyledCard
            color={cardColors[Math.floor(Math.random() * cardColors.length)]}
          >
            {isViewAnswer ? (
              <p>{card.answer}</p>
            ) : (
              <>
                <h2>{card.question}</h2>
                <p>{card.image}</p>
                <p>{card.description}</p>
              </>
            )}
          </StyledCard>
        </StyledTinderCard>
      ))}
      <button onClick={handleClick}>Flip</button>
    </Container>
  );
}

export default AnkiCards;
