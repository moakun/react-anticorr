import { useState, useCallback } from 'react';
import { useAuthContext } from './useAuthContext';

export const useTestUpdateScore = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const testUpdateScore = useCallback(async (
    userName,
    firstName,
    lastName,
    companyName,
    score
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://seahorse-app-lckpq.ondigitalocean.app/api/user/testUpdateScore',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userName,
            firstName,
            lastName,
            companyName,
            score,
          }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'An error occurred');
      }

      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      //update the auth context
      dispatch({ type: 'LOGIN', payload: json });

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  return { testUpdateScore, isLoading, error };
};