/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO_URL} from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      }).catch((error) => {
        navigate('/error');
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName, 
            photoURL:photoURL
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
      />
      {user && (<div className="flex p-2 items-center">
        <img
          className="w-12 h-12 "
          alt="userIcon"
          src={user?.photoURL}
        />
        <button 
          className="font-bold text-white ml-2"
          onClick={handleSignOut}
        >Sign Out</button>
      </div>)}
    </div>
  );
};

export default Header;
