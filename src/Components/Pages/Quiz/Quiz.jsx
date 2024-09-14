import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import '../../../index.css';
import questions from './questions';
import { useTestUpdateScore } from '../../../Hooks/useTestUpdateScore';
import Loading from '../Auth/buildingBlocks';
import { useAuthContext } from '../../../Hooks/useAuthContext';

export default function Quiz() {
  const { user } = useAuthContext();
  const [firstName] = useState(user.firstName);
  const [lastName] = useState(user.lastName);
  const [userName] = useState(user.userName);
  const [companyName] = useState(user.companyName);
  const { testUpdateScore, isLoading, error } = useTestUpdateScore();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleAnswerOption = (answer) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[currentQuestion] = { answerByUser: answer };
      return newOptions;
    });
  };

  const handleSubmit = useCallback(async () => {
    try {
      await testUpdateScore(userName, firstName, lastName, companyName, score);
    } catch (error) {
      console.error('Failed to update score:', error);
      setNetworkError(true);
    }
  }, [testUpdateScore, userName, firstName, lastName, companyName, score]);

  const handleSubmitButton = () => {
    const newScore = questions.reduce((acc, question, index) => {
      const userAnswer = selectedOptions[index]?.answerByUser;
      const correctAnswer = question.answerOptions.find((option) => option.isCorrect);
      return userAnswer === correctAnswer?.answer ? acc + 1 : acc;
    }, 0);

    setScore(newScore);
    setShowScore(true);
  };

  useEffect(() => {
    if (score > 0) {
      handleSubmit();
    }
  }, [score, handleSubmit]);

  const ButtonAtt = () => (
    <div>
      <span className="text-green-400">Bravo!</span>
      <Link to="/preQuiz">
        <button className="flex flex-col font-poppins bg-blue-500 text-white p-3 mt-5 rounded hover:text-black transition ease-in delay-50">
          Veuillez Remplir Notre Questionnaire Ici
        </button>
      </Link>
    </div>
  );

  const ButtonRetry = () => (
    <div>
      <span className="text-red-500">Note insuffisante</span>
      <Link to="/quizError">
        <button className="flex flex-col font-poppins bg-blue-500 text-white p-3 ml-7 mt-5 rounded hover:text-black transition ease-in delay-50">
          Réessayez
        </button>
      </Link>
    </div>
  );

  const ButtonChoice = () => (score >= 8 ? <ButtonAtt /> : <ButtonRetry />);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col w-screen px-5 h-screen bg-white justify-center items-center">
      <div className="flex flex-col w-full">
        {showScore ? (
          <h1 className="text-3xl font-semibold text-center text-black font-poppins">
            Votre Score est de {score}0% <br />
            <div className="flex flex-col justify-center items-center m-5">
              <ButtonChoice />
            </div>
          </h1>
        ) : (
          <>
            <div className="flex flex-col items-center ">
              <h4 className="mt-10 text-xl text-black font-poppins ">
                Question {currentQuestion + 1} sur {questions.length}
              </h4>
              <div className="mt-4 text-2xl text-black font-poppins">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="flex flex-col font-poppins justify-center items-center">
              {questions[currentQuestion].answerOptions.map((answer, index) => (
                <div
                  key={index}
                  className="flex items-center w-full py-4 pl-5 m-2 ml-0 border-2 cursor-pointer rounded-xl bg-blue-500"
                  onClick={() => handleAnswerOption(answer.answer)}
                >
                  <input
                    type="radio"
                    name={answer.answer}
                    value={answer.answer}
                    checked={answer.answer === selectedOptions[currentQuestion]?.answerByUser}
                    onChange={() => handleAnswerOption(answer.answer)}
                    className="w-6 h-6 bg-black"
                  />
                  <p className="ml-6 text-white">{answer.answer}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between w-full mt-4 text-white">
              <button
                onClick={handlePrevious}
                className="w-[49%] py-3 bg-blue-500 rounded-lg font-poppins"
              >
                Précédent
              </button>
              <button
                onClick={currentQuestion + 1 === questions.length ? handleSubmitButton : handleNext}
                className="w-[49%] py-3 bg-blue-500 rounded-lg font-poppins"
              >
                {currentQuestion + 1 === questions.length ? 'Finir' : 'Suivant'}
              </button>
            </div>
          </>
        )}
      </div>
      {error && (
        <Alert severity="error">
          <AlertTitle>Erreur</AlertTitle>
          {error}
          <strong> - Veuillez y jeter un oeil</strong>
        </Alert>
      )}
      <Snackbar
        open={networkError}
        autoHideDuration={6000}
        onClose={() => setNetworkError(false)}
        message="Erreur de réseau. Veuillez vérifier votre connexion et réessayer."
      />
    </div>
  );
}