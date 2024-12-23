import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const useGoogleAuth = (onAuthSuccess , setName ,setDp) => {

  const handleGoogleLogin = useGoogleLogin({
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

        console.log("Access Token:", tokenResponse.access_token);

        console.log("User Info:", userInfo.data);
        onAuthSuccess();

        // setup user info
        const name = userInfo.data.given_name;
        const dp = userInfo.data.picture;
        setName(name);
        setDp(dp);

        return userInfo.data;
      } catch (error) {
        console.error("Error during Google authentication:", error);
        throw error;
      }
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
    },
    scope: "email profile",
  });

  return handleGoogleLogin;
};

export default useGoogleAuth;
