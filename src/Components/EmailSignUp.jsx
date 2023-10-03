import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const EmailSignup = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const errorNotify = useCallback(() => {
    toast.error(authError);
  }, [authError]);
  const successNotify = () => toast.success("User created successfully.");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = (password) => {
    // Minimum eight characters, at least one letter and one number:
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password === "") {
      return toast.error("Please enter password.");
    } else if (regex.test(password)) {
      return "Password is Valid";
    } else {
      return toast.error("Password is not valid.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAgreed) {
      // If terms and conditions are not agreed, display an error message or take appropriate action
      toast.error("You must agree to the terms and conditions to proceed.");
      return;
    }

    const passwordValidationMessage = validatePassword(password);

    if (passwordValidationMessage !== "Password is Valid") {
      // Password is not valid, display the validation message
      return;
    }

    console.log("handle submit");
    // Password is valid, proceed with form submission
    // setMessage("Password is Valid");
    // Rest of your code...
    // Create user or perform other actions here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        {
          user && successNotify();
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setAuthError(errorCode);
        errorNotify();
      });

    setEmail("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  useEffect(() => {
    errorNotify();
  }, [errorNotify]);

  return (
    <div className="container mx-auto mt-10 relative">
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
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          className="input input-bordered w-full max-w-xs mb-3"
          value={password}
        />

        <button
          onClick={togglePasswordVisibility}
          className="mt-1 absolute top-[105px] right-[470px]"
          type="button"
        >
          {showPassword ? (
            <AiFillEye className="text-2xl" />
          ) : (
            <AiFillEyeInvisible className="text-2xl" />
          )}
        </button>
        <div>
          <label className="select-none">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer check-box"
            />
          </label>
          I agree to the terms and conditions
        </div>
        <button className="btn btn-neutral mt-2" type="submit">
          Sign Up
        </button>
        <h2>
          Have an account? <Link to={"/emailsignin"}>sign in</Link>{" "}
        </h2>
        <ToastContainer />
      </form>
    </div>
  );
};

export default EmailSignup;
