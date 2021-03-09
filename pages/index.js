import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../db.json';
import Widget  from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from  '../src/components/Input'
import Button from  '../src/components/Button'
import React from 'react';



// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width:350px;
  padding-top:45px;
  margin:auto 10%;
  @media screen and (max-width:500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  const router = useRouter(); 
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Uncharted</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(event) {
              event.preventDefault();
              console.log('Fazendo submissão')
              router.push(`/quiz?name=${name}`)
            }}>
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz a galera</h1>
            <p>LOREM IPSIJM</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AndersonFSP" />
    </QuizBackground>
  );
}
