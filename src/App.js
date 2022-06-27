import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import firebase from "firebase/app";
//import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { UserContext } from './context/UserContext';

import './App.css';

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './config/firebase.config';
firebase.initializeApp(firebaseConfig);

const App=()=> {

const [user, setUser] =useState(null);

// we are passing the state in the provider so we can access it in entire app
//Switch (Routes) is used for conditional rendering
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>

      <Header />

<Routes>
  <Route exact path="/" element={ <Home /> } />
  <Route exact path="/signin" element={ <SignIn /> } />
  <Route exact path="/signup" element={ <SignUp /> } />
  <Route exact path="*" element={ <PageNotFound /> } />
</Routes>

     <Footer />

      </UserContext.Provider>
    </Router>


  );
};

export default App;
