import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useGotAttestation = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const gotAttestation = async (userName, firstName, lastName, companyName) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://shark-app-zrqqk.ondigitalocean.app/api/user/gotAttestation',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName,
          firstName,
          lastName,
          companyName,
        }),
      }
    );

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
    }
  };

  return { gotAttestation, isLoading, error };
};
