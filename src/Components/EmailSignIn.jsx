import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const auth = getAuth();

const EmailSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  console.log(auth.currentUser);

  return (
    <div className="container mx-auto mt-10 relative">
      <h1 className="mb-2 text-xl text-center">Sign in with E-mail</h1>
      <form className="flex flex-col items-center">
        <input
          onChange={handleEmailChange}
          placeholder="Email"
          name="email"
          className="input input-bordered w-full max-w-xs mb-3"
          //   value={email}
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered w-full max-w-xs mb-3"
          //   value={password}
        />

        {/* <button
          onClick={togglePasswordVisibility}
          className="mt-1 absolute top-[105px] right-[470px]"
          type="button"
        >
          {showPassword ? (
            <AiFillEye className="text-2xl" />
          ) : (
            <AiFillEyeInvisible className="text-2xl" />
          )}
        </button> */}
        <div>
          {/* <label className="select-none">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer check-box"
            />
          </label> */}
          I agree to the terms and conditions
        </div>
        <button
          onClick={handleLogin}
          className="btn btn-neutral mt-2"
          type="submit"
        >
          Sign in
        </button>
        <h2>
          Don`t Have an account? <Link to={"/emailsignup"}>sign up</Link>{" "}
        </h2>
        <h2>
          Forgot Password? <Link to={"/resetpassword"}> <span>Click to Reset</span> </Link>{" "}
        </h2>
      </form>
    </div>
  );
};

export default EmailSignIn;
