import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import Image from '../../Assets/nono.png';

function NewHome() {
  const { user } = useAuthContext();
  return (
    <div>
      <NavBar />
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={Image}
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 flex flex-col">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none font-poppins">
              Formation
              <br className="hidden md:block font-poppins" />
              Anti Corruption <br />
              <span className="inline-block text-deep-purple-accent-400 font-poppins">
                & Éthique des Affaires
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg font-poppins">
              Sogéa Satom Bénin
            </p>
            <div className="flex items-center relative right-3">
              <Link to="/register">
                <button className="h-12 m-3 p-2 text-white font-bold rounded bg-blue-500 font-poppins hover:bg-blue-900 transition ease-in delay-50">
                  Créer Votre Compte Ici!
                </button>
              </Link>
              {user && (
                <Link to="/course">
                  <button className="h-12 m-3 p-2 text-white font-bold rounded bg-red-500 font-poppins hover:bg-red-900 transition ease-in delay-50">
                    Commencez La Formation!
                  </button>
                </Link>
              )}
            </div>
          </div>
          <span className="font-poppins">
            En Cas De Problème
            <br /> Veuillez Contactez l'email Suivant:
            <br /> developedbymoe@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewHome;
