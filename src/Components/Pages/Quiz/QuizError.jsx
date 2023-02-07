import React from 'react';
import { Link } from 'react-router-dom';

function QuizError() {
  return (
    <div className="flex flex-col justify-center items-center relative top-60">
      <h1 className="font-poppins text-xl font-bold">
        Pour Réussir, votre score doit être supérieure ou à égale 80%!
      </h1>
      <Link to="/quiz">
        <button className="font-poppins bg-blue-500 rounded hover:text-black text-white transition ease-in delay-50 p-3 m-5">
          Réessayez
        </button>
      </Link>
      <Link to="/course">
        <button className="font-poppins bg-blue-500 rounded hover:text-black text-white transition ease-in delay-50 p-3 m-5">
          Revoir La Première Partie?
        </button>
      </Link>
      <Link to="/course2">
        <button className="font-poppins bg-blue-500 rounded hover:text-black text-white transition ease-in delay-50 p-3 m-5">
          Revoir La Deuxième Partie?
        </button>
      </Link>
    </div>
  );
}

export default QuizError;
