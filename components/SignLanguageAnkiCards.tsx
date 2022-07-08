import Image from "next/image";
import { signLanguageCards } from "../cards";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

const StyledCard = styled(TinderCard)`
  width: 220px;
  height: 368px;
  position: absolute;
  padding: 32px;
  border-radius: 10px;
  cursor: grab;
  background-color: ${(props: { color: string }) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Answer = styled.div`
  color: white;
  font-weight: 500;
  font-size: 22px;
`;

const ProgressCounter = styled.div`
  color: white;
  margin-bottom: 12px;
`;

const ProgressContainer = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 20px;
`;

const FlipButton = styled.button`
  background: #12a5ec;
  border-radius: 32px;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-family: "Fredoka", serif;
  font-weight: 500;
  font-size: 18px;
  position: absolute;
  width: 290px;
  margin-top: 600px;
`;

function SignLanguageAnkiCards() {
  const [cardInView, setCardInView] = useState(signLanguageCards.length - 1);
  const [cards, setCards] = useState(signLanguageCards);
  const [progress, setProgress] = useState(1);

  const onCardLeftScreen = (index: number) => {
    setProgress((previousState) => previousState + 1);
    setCardInView(index - 1);
  };

  const onSwipe = (index: number) => {
    setCardInView(index - 1);
  };

  function handleFlipCardClick() {
    setCards(
      cards.map((card, index) =>
        cardInView === index
          ? { ...card, isViewingAnswer: !card.isViewingAnswer }
          : card
      )
    );
  }

  return (
    <>
      <ProgressContainer>
        <ProgressCounter>
          {progress}/{cards.length + 1}
        </ProgressCounter>
        <ProgressBar
          bgColor="#7CD420"
          baseBgColor="white"
          isLabelVisible={false}
          completed={progress}
          maxCompleted={cards.length + 1}
        />
      </ProgressContainer>
      <Container>
        {cards.map((card, index) => (
          // @ts-ignore
          <StyledCard
            onSwipe={() => onSwipe(index)}
            key={card.question}
            onCardLeftScreen={() => onCardLeftScreen(index)}
            color={card.color}
          >
            {card.isViewingAnswer ? (
              <Answer>{card.answer}</Answer>
            ) : (
              <Image src={card.question} alt={card.answer} layout="fill" />
            )}
          </StyledCard>
        ))}
        <FlipButton onClick={handleFlipCardClick}>Flip!</FlipButton>
      </Container>
    </>
  );
}

export default SignLanguageAnkiCards;
