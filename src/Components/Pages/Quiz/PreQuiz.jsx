import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { usePreQuiz } from '../../../Hooks/usePreQuiz';
import Loading from '../Auth/buildingBlocks';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const PreQuiz = () => {
  const { user } = useAuthContext();
  const [firstName] = useState(user.firstName);
  const [lastName] = useState(user.lastName);
  const [userName] = useState(user.userName);
  const [companyName] = useState(user.companyName);
  const [dispositif, setDispositif] = useState('');
  const [engagement, setEngagement] = useState('');
  const [identification, setIdentification] = useState('');
  const [formation, setFormation] = useState('');
  const [procedure, setProcedure] = useState('');
  const [dispositifAlert, setDispositifAlert] = useState('');
  const [certifierISO, setCertifierISO] = useState('');
  const [mepSystem, setMepSystem] = useState('');
  const [intention, setIntention] = useState('');

  const { preQuiz, isLoading, error } = usePreQuiz();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await preQuiz(
      userName,
      firstName,
      lastName,
      companyName,
      dispositif,
      engagement,
      identification,
      formation,
      procedure,
      dispositifAlert,
      certifierISO,
      mepSystem,
      intention
    );
  };
  return (
    <body className="bg-blue-500 p-10">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl max-w-xl">
          <h1 className="text-3xl font-semibold font-poppins text-center text-blue-700">
            Veuillez Répondre à ce Questionnaire Par "Oui", "Non" ou Donner la
            date pévu de mise en oeuvre.
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Votre entreprise a-t-elle mis en œuvre des dispositifs pour se
                prémunir d'actes de corruption ?
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={dispositif}
                onChange={(e) => setDispositif(e.target.value)}
                type="text"
                name="dispositif"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Engagement Formalisé de la Direction contre la corruption sous
                toute ses formes (politique anticorruption, charte et /ou code
                de conduite anticorruption)
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={engagement}
                onChange={(e) => setEngagement(e.target.value)}
                type="text"
                name="engagement"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Identification des risques de corruption et élaboration de la
                cartographie des risques
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={identification}
                onChange={(e) => setIdentification(e.target.value)}
                type="text"
                name="identification"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Formation et sensibilisation du personnel aux risques de
                corruption et à la prévention des conflits d'intérêt
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={formation}
                onChange={(e) => setFormation(e.target.value)}
                type="text"
                name="formation"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Procédure de gestion des cadeaux
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={procedure}
                onChange={(e) => setProcedure(e.target.value)}
                name="procedure"
                type="text"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Dispositif d'alerte pour recueillir les signalements
                d'inquiétude
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={dispositifAlert}
                onChange={(e) => setDispositifAlert(e.target.value)}
                name="dispositifAlert"
                type="text"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Votre entreprise est elle certifiée ISO 37001 ?
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={certifierISO}
                onChange={(e) => setCertifierISO(e.target.value)}
                name="certifierISO"
                type="text"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Votre entreprise est-t-elle en cours de mise en place d'un
                système de management anticorruption en vue d'une certification
                future selon la norme ISO 37001 ?
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={mepSystem}
                onChange={(e) => setMepSystem(e.target.value)}
                type="text"
                name="mepSystem"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 font-poppins">
                Avez-vous l'intention de certifier votre entreprise selon la
                norme anticorruption ISO 37001 ?
              </label>
              <input
                required
                placeholder="Oui, Non ou dd/mm/yy"
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                type="text"
                name="intention"
                className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full font-poppins px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Votre Attestation
              </button>
            </div>
            {error && (
              <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                {error}
                <strong> - Veuillez y jeter un oeil</strong>
              </Alert>
            )}
          </form>
        </div>
      )}
    </body>
  );
};

export default PreQuiz;
