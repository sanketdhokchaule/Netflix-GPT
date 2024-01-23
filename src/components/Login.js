/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const passowrd = useRef(null);
  //const cPassowrd = useRef(null);

  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(email.current.value, passowrd.current.value);

    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        passowrd.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //console.log(user);
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://avatars.githubusercontent.com/u/89206829?v=4"
          })
            .then(() => {
              const { uid, email, displayName, photoURl } = auth.currentUser;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName, 
                photoURl:photoURl
              })
            );
            navigate('/browse');
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        passowrd.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="background-image"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col absolute bg-black bg-opacity-80 p-14 rounded-md w-3/12 my-40 mx-auto left-0 right-0 text-white"
      >
        <h1 className="font-bold text-3xl mt-0 pb-4 my-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-2 rounded-sm bg-gray-800"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="E-mail"
          className="p-3 my-2 rounded-sm bg-gray-800"
        />

        <input
          ref={passowrd}
          type="password"
          placeholder="Password"
          className="p-3 my-2 rounded-sm  bg-gray-800 "
        />

        {/*!isSignIn && (
          <input
            ref={cPassowrd}
            type="text"
            placeholder="Confirm-Password"
            className="p-3 my-2 rounded-sm  bg-gray-800 "
          />
        )*/}
        <p className="text-red-600">{erroMessage}</p>

        <button
          className="w-full m-auto p-3 mt-4 bg-red-600 rounded-sm font-bold"
          onClick={handleButtonClick}
        >
          {isSignIn ? <p>Sign In</p> : <p>Sign In</p>}
        </button>

        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already a User? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
