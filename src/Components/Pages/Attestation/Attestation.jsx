import React, { useState } from 'react';
import Logo from '../../Assets/Logo.png';
import { Alert, AlertTitle } from '@mui/material';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import jsPDF from 'jspdf';
import { useGotAttestation } from '../../../Hooks/useGotAttestation';

function Attestasion() {
  const { user } = useAuthContext();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [userName] = useState(user.userName);
  const [firstName] = useState(user.firstName);
  const [lastName] = useState(user.lastName);
  const [companyName] = useState(user.companyName);
  const { gotAttestation } = useGotAttestation();

  const handleSubmit = async () => {
    await gotAttestation(userName, firstName, lastName, companyName);
  };

  const generatePDF = () => {
    const doc = new jsPDF('landscape', 'pt', 'a4');
    doc.html(document.querySelector('#content'), {
      callback: function (pdf) {
        pdf.save('Attestation.pdf');
      },
    });
    handleSubmit();
  };

  return (
    <div>
      <div id="content">
        <div className="border-4 border-gray-500 m-10 w-6/12">
          <div className="border-4 border-gray-500 m-1">
            <div className="flex flex-col justify-center items-center">
              <img src={Logo} alt="Logo" />
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-gray-700 font-tinos text-lg">
                  Sogea Satom Bénin certifie que
                </h3>
                <span className="text-gray-700 font-tinos text-lg">
                  {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}{' '}
                  de la Société {user.companyName}
                </span>
                <h3 className="text-gray-700 font-tinos text-lg">
                  a suivi avec succès le programe de formation suivant :
                </h3>
                <br />
                <h1 className="font-bold font-tinos text-2xl">
                  Anticorruption et Éthique des Affaires
                </h1>
              </div>
            </div>
            <div className="m-2 font-tinos">
              <span className="font-tinos font-bold">Date:</span> {date}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Alert severity="info">
          <AlertTitle>Envoyer Votre Attestation</AlertTitle>
          Après avoir télecharger votre Attestation, veuillez l'envoyer à
          L'email Suivant: developedbymoe@gmail.com
        </Alert>
      </div>
      <div className="relative left-64">
        <button
          className="font-poppins bg-blue-500 rounded hover:text-black text-white transition ease-in delay-50 p-3"
          onClick={generatePDF}
        >
          Télécharger Votre Attestation Ici!
        </button>
      </div>
    </div>
  );
}

export default Attestasion;
