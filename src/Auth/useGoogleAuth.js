import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';

const useGoogleAuth = (onAuthSuccess, setName, setDp) => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const authToken = tokenResponse.access_token;
        const name = userInfo.data.given_name;
        const dp = userInfo.data.picture;

        // Set the auth token, name, and dp in cookies with a 24-hour expiry
        Cookies.set('authToken', authToken, { expires: 1 });
        Cookies.set('name', name, { expires: 1 });
        Cookies.set('dp', dp, { expires: 1 });

        console.log("Access Token:", tokenResponse.access_token);
        console.log("User Info:", userInfo.data);

        onAuthSuccess();
        setName(name);
        setDp(dp);

        return userInfo.data;
      } 
      catch (error) {
        console.error("Error during Google authentication:", error);
        throw error;
      }
    },
    onFailure: (error) => {
      console.error('Login failed:', error);
    },
  });

  return login;
};

export default useGoogleAuth;