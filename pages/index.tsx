import styled from "styled-components";
import AnkiCards from "../components/AnkiCards";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/logo.png";

const Eclipse = styled.div`
  height: 12rem;
  background-color: #0b1033;
  border-radius: 0 0 50px 50px;
`;

const Container = styled.div`
  padding-top: 18px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>First 100</title>
        <meta
          name="description"
          content="First 100 - Learn the first 100 words of a lanaguage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Eclipse>
          <Container>
            <LogoContainer>
              <Image
                src={Logo}
                alt="first 100 logo"
                width="40px"
                height="40px"
              />
            </LogoContainer>
            <AnkiCards />
          </Container>
        </Eclipse>
      </main>
    </div>
  );
};

export default Home;
