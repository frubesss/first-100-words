import SignLanguageAnkiCards from "../components/SignLanguageAnkiCards";
import styled from "styled-components";
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

const SignLanguage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>First 100 - Learn the first 100 words</title>
        <meta
          name="description"
          content="First 100 - Learn the first 100 words of a language"
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
            <SignLanguageAnkiCards />
          </Container>
        </Eclipse>
      </main>
    </div>
  );
};

export default SignLanguage;
