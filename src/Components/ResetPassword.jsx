import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const auth = getAuth();
  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        console.log("check your email, reset email has been sent.");
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

  console.log(auth.currentUser);

  return (
    <div className="container mx-auto mt-10 relative">
      <h1 className="mb-2 text-xl text-center">Reset Password</h1>
      <form className="flex flex-col items-center">
        <input
          onChange={handleEmailChange}
          placeholder="Email"
          name="email"
          className="input input-bordered w-full max-w-xs mb-3"
          //   value={email}
        />
        <button
          onClick={handleResetPassword}
          className="btn btn-neutral mt-2"
          type="submit"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
