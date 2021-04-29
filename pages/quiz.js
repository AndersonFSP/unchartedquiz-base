import { useRouter } from 'next/router';
import db from '../db.json';
import Widget  from '../src/components/Widget';

import QuizBackground from '../src/components/QuizBackground';
import Input from  '../src/components/Input'
import Button from  '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import React from 'react';


function LoadingScreen() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        Desafio Loading
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget({question, totalQuestions, questionIndex, onSubmit}) {
  const questonId = `question_${questionIndex}`
  return(
    <Widget>
      <Widget.Header>
        <h3>
          Pergunta {questionIndex + 1} de { `${totalQuestions} `}
        </h3>
      </Widget.Header>
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover'
          }}
          src={ question.image }
        />
      <Widget.Content>
        <h2>
          { question.title }
        </h2>
        <p>{ question.description }</p>
        <form onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}>
          {question.alternatives.map((alternative, index) => {
            const alternative_id = `alternativa_${index}`
            return (
              <Widget.Topic as="label" htmlFor={alternative_id}>
                {alternative}
                <input 
                  id={alternative_id} 
                  type="radio" 
                  name={questonId}
                  // style={{display: 'none'}} 
                  />
              </Widget.Topic>
            )
          })}
          <Button  type="submit" >Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget> 
  )
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT"
}

export default function quizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    // console.log(nextQuestion, totalQuestions)
    if(nextQuestion < totalQuestions) 
      setCurrentQuestion(currentQuestion + 1); 
    else 
      setScreenState(screenStates.RESULT)
    
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000);
  }, [])
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo></QuizLogo>
         { screenState === screenStates.QUIZ && (
            <QuestionWidget 
            question={question} 
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
          /> )}
        {screenState === screenStates.LOADING && <LoadingScreen/>}
        {screenState === screenStates.RESULT && <div>Você ACERTOU </div>}
      </QuizContainer>
    </QuizBackground>  
  );

}
{/* */}