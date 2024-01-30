/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE_URL, USER_AVATAR_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
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
            photoURL: USER_AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
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
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className="md:w-screen object-cover h-screen w-screen"
          src={BG_IMAGE_URL}
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-9/12 md:w-3/12  absolute bg-black bg-opacity-80 p-12 rounded-md  my-40 mx-auto left-0 right-0 text-white"
      >
        <h1 className="font-bold text-3xl mt-0 pb-4 my-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-2 rounded-sm bg-gray-800  w-full"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="E-mail"
          className="p-3 my-2 rounded-sm bg-gray-800  w-full"
        />

        <input
          ref={passowrd}
          type="password"
          placeholder="Password"
          className="p-3 my-2 rounded-sm  bg-gray-800  w-full "
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
