import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { useLogin } from '../../../Hooks/useLogin';
import { Link } from 'react-router-dom';
import Loading from './buildingBlocks';

const NewLogin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(firstName, lastName, userName, companyName, password);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-screen bg-blue-500 z-40">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl max-w-xl relative top-4">
            <h1 className="text-3xl font-semibold font-poppins text-center text-blue-700">
              Connectez-Vous à votre Compte
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Prénom:
                </label>
                <input
                  type="text"
                  placeholder="Votre Prénom Ici:"
                  name="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Nom:
                </label>
                <input
                  type="text"
                  placeholder="Votre Nom Ici:"
                  name="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Nom D'utilisateur:
                </label>
                <input
                  type="text"
                  placeholder="Votre Nom D'utilisateur Ici:"
                  name="userName"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Nom De La Société:
                </label>
                <input
                  type="text"
                  placeholder="Le Nom De Votre Société Ici:"
                  name="Company Name"
                  value={companyName}
                  required
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Mot De Passe:
                </label>
                <input
                  name="password"
                  placeholder="Votre Mot De Passe Ici:"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full font-poppins px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Connexion
                </button>
              </div>
              <div className="font-poppins">
                Pas de compte? Créer Votre Compte
                <Link to="/register">
                  <span className="font-poppins text-blue-900 m-2 font-bold underline">
                    Ici!
                  </span>
                </Link>
              </div>
              {error && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                  <strong className="font-poppins"> - check it out!</strong>
                </Alert>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewLogin;
