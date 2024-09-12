import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const usePreQuiz = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const preQuiz = async (
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
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('https://seahorse-app-lckpq.ondigitalocean.app/api/user/preQuiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
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
        intention,
      }),
    });

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      //update the auth context
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
      navigate('/attestation');
    }
  };

  return { preQuiz, isLoading, error };
};
