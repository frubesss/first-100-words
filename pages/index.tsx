import styled from "styled-components";
import AnkiCards from "../components/AnkiCards";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/logo.png";

const Container = styled.div`
  height: 12rem;
  background-color: #0b1033;
  border-radius: 0 0 50px 50px;
`;

const MainContainer = styled.div`
  padding-top: 18px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <MainContainer>
            <Text>
              <Image
                src={Logo}
                alt="first 100 logo"
                width="40px"
                height="40px"
              />
            </Text>
            <AnkiCards />
          </MainContainer>
        </Container>
      </main>
    </div>
  );
};

export default Home;
