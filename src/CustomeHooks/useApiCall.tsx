

import { useState } from "react";

const useApiCall = (key:string) => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUserData = async (email: string) => {
      setLoading(true);
      try {
          const response = await fetch(`http://localhost:8000/${key}?email=${email}`);
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          const jsonData = await response.json();

          if (jsonData.length > 0) {
            return jsonData
              setUserData(jsonData[0]); 
          } else {
              setUserData(null);
          }
      } catch (error : any) { 
          setError(error.message); 
      } finally {
          setLoading(false); 
      }
  };

    return { userData, loading, error, fetchUserData };
};

export default useApiCall;

interface UserData {
    email: string;
    password: string;
    id: string;
}
