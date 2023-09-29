import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase_config";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signUp = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      const user = res.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const GoogleSignUp = () => {
  return (
    <div className="mt-10 flex justify-center w-full">
      <button className="btn btn-success text-white" onClick={signUp}>
        Sign up
      </button>
    </div>
  );
};

app;

export default GoogleSignUp;
