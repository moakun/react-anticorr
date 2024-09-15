import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import Image from '../../Assets/nono.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export default function NewHome() {
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            alt=""
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
                <button className="h-12 m-1 p-2 text-white font-bold rounded bg-blue-500 font-poppins hover:bg-blue-900 transition ease-in delay-50">
                  Créer Votre Compte Ici!
                </button>
              </Link>
              {user && (
                <button
                  onClick={handleClickOpen}
                  className="h-12 m-1 p-2 text-white font-bold rounded bg-red-500 font-poppins hover:bg-red-900 transition ease-in delay-50"
                >
                  Commencez La Formation!
                </button>
              )}
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                <Typography className="font-poppins">
                  Commencer la formation?
                </Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography component="div" className="font-poppins">
                    Vous êtes sur le point de commencer la formation Anti
                    Corruption. Veuillez bien être sûr que vous avez une bonne
                    Connexion internet. Après avoir fini les vidéos
                    explicatives; il vous faudra faire un quiz auquel il vous
                    faudra un Minimum de 80% pour accéder à un questionnaire
                    qu'il vous faudra remplir pour finalement recevoir votre
                    attestation.
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>
                  <Typography className="font-poppins">Pas Maintenant</Typography>
                </Button>
                <Link to="/course">
                  <Button onClick={handleClose} autoFocus>
                    <Typography className="font-poppins">
                      C'est Bon! Je veux Commencer
                    </Typography>
                  </Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
          <Typography component="div" className="font-poppins">
            En Cas De Problème
            <br /> Veuillez Contactez l'email Suivant:
            <br /> developedbymoe@gmail.com
          </Typography>
        </div>
      </div>
    </div>
  );
}