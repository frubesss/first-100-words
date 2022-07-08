import Image from "next/image";
import { frenchCards } from "../cards";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { AiFillSound } from "react-icons/ai";
import FranceFlag from "../public/franceFlag.png";
import UnionJackFlag from "../public/unionJackFlag.png";

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
  text-align: center;
`;

const Question = styled.div`
  text-transform: capitalize;
  color: white;
  font-weight: 500;
  font-size: 42px;
  line-height: 51px;
  text-align: center;
  margin-bottom: 8px;
`;

const Answer = styled.div`
  text-transform: capitalize;
  color: white;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
`;

const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;
  color: white;
`;

const FlagEmoji = styled.div``;

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
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  position: absolute;
  width: 290px;
  margin-top: 600px;
`;

const SoundButtonContainer = styled.div`
  margin-bottom: 32px;
`;

const SoundButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  height: 45px;
  width: 45px;
  cursor: pointer;
`;

const SoundIcon = styled(AiFillSound)`
  color: white;
  font-size: 28px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlagContainer = styled.div`
  margin-bottom: 8px;
`;

const AnswerFlagContainer = styled.div`
  margin-bottom: 48px;
`;

const Pronustiation = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: white;
`;

const AnswerTextContainer = styled.div`
  margin-bottom: 16px;
`;

function AnkiCards() {
  const [cardInView, setCardInView] = useState(frenchCards.length - 1);
  const [cards, setCards] = useState(frenchCards);
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

  function handleSpeechClick(selectedCardQuestion: string) {
    const message = new SpeechSynthesisUtterance();
    message.text = selectedCardQuestion;
    message.lang = "fr";
    window.speechSynthesis.speak(message);
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
              <QuestionContainer>
                <AnswerFlagContainer>
                  <Image
                    src={UnionJackFlag}
                    alt="Union jack flag"
                    width={42}
                    height={42}
                  />
                </AnswerFlagContainer>
                <AnswerTextContainer>
                  <Answer>{card.answer}</Answer>
                  <Pronustiation>(det.)</Pronustiation>
                </AnswerTextContainer>
                <Answer>{card.answer}</Answer>
                <Pronustiation>(pron.)</Pronustiation>
              </QuestionContainer>
            ) : (
              <QuestionContainer>
                <FlagContainer>
                  <Image
                    src={FranceFlag}
                    alt="French flag"
                    width={42}
                    height={42}
                  />
                </FlagContainer>
                <SoundButtonContainer>
                  <SoundButton onClick={() => handleSpeechClick(card.question)}>
                    <SoundIcon />
                  </SoundButton>
                </SoundButtonContainer>
                <Question>{card.question}</Question>
                <Description>({card.description})</Description>
              </QuestionContainer>
            )}
          </StyledCard>
        ))}
        <FlipButton onClick={handleFlipCardClick}>Flip!</FlipButton>
      </Container>
    </>
  );
}

export default AnkiCards;
