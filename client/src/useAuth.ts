// useAuth.ts

import { useEffect, useState } from 'react';

const useAuth = (): boolean => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const userEmail: string | null = localStorage.getItem('userEmail');
    if (userEmail) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return authenticated;
};

export default useAuth;
