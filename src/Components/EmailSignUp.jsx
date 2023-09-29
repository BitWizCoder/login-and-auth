import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase_config";
import { useState } from "react";

const EmailSignup = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();

    setEmail("");
    setPassword("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="container mx-auto mt-10 ">
      <h1 className="mb-2 text-xl text-center">Sign Up with E-mail</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          onChange={handleEmailChange}
          type="text"
          placeholder="Email"
          name="email"
          className="input input-bordered w-full max-w-xs mb-3"
          value={email}
        />

        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered w-full max-w-xs mb-3"
          value={password}
        />

        <button className="btn btn-success text-white" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

app;

export default EmailSignup;
