import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const StyledCard = styled(TinderCard)`
  height: 200px;
  width: 200px;
  position: absolute;
  padding: 32px;
  border-radius: 10px;
  cursor: grab;
  background: ${(props: { color: string }) => props.color};
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function AnkiCards() {
  const [cards, setCards] = useState([
    {
      question: "le",
      description: "femme",
      image: "🏘️",
      answer: "him, her, it, them",
      isViewingAnswer: false,
      color: "#d6d8f0",
    },
    {
      question: "de",
      description: "femme",
      image: "🏘️",
      answer: "of, from",
      isViewingAnswer: false,
      color: "#3de5b2",
    },
    {
      question: "un",
      description: "femme",
      image: "🏘️",
      answer: "one",
      isViewingAnswer: false,
      color: "#3de5b2",
    },
    {
      question: "a",
      description: "femme",
      image: "🏘️",
      answer: "to, at, in",
      isViewingAnswer: false,
      color: "#3de5b2",
    },
  ]);

  const [progress, setProgress] = useState(1);

  const onCardLeftScreen = () => {
    setProgress((previousState) => previousState + 1);
  };

  function handleClick(selectedCardQuestion: string) {
    setCards(
      cards.map((card) =>
        card.question === selectedCardQuestion
          ? { ...card, isViewingAnswer: !card.isViewingAnswer }
          : card
      )
    );
  }

  function handleSpeechClick(selectedCardQuestion: string) {
    const message = new SpeechSynthesisUtterance();
    message.text = selectedCardQuestion;
    message.lang = "fr";
    window.speechSynthesis.speak(message);
  }

  return (
    <>
      <p>
        {progress}/{cards.length + 1}
      </p>
      <ProgressBar
        isLabelVisible={false}
        completed={progress}
        maxCompleted={cards.length + 1}
      />
      <Container>
        {cards.map((card) => (
          // @ts-ignore
          <StyledCard
            flickOnSwipe={true}
            key={card.question}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={() => onCardLeftScreen()}
            color={card.color}
          >
            {card.isViewingAnswer ? (
              <p>{card.answer}</p>
            ) : (
              <>
                <h2>{card.question}</h2>
                <p>{card.image}</p>
                <p>{card.description}</p>
                <button onClick={() => handleSpeechClick(card.question)}>
                  Play!
                </button>
                <button onClick={() => handleClick(card.question)}>
                  Flip!
                </button>
              </>
            )}
          </StyledCard>
        ))}
      </Container>
    </>
  );
}

export default AnkiCards;
