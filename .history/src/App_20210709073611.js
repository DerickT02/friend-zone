import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter, Switch, Link, Route, Redirect, Router} from 'react-router-dom'
import Login from './Login'
import Homepage from './Homepage'
import './App.css'
import Nav from './Nav'

import fire from './fire'
import GlobalProvider from './GlobalState'

function App() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

const clearInputs = () => {
  setEmail('')
  setPassword('')
}

const clearErrors = () => {
  setEmailError('');
  setPasswordError('')
}

const handleLogin = () => {
  clearErrors()
  fire
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(err => {
      switch(err.code){
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
              setEmailError(err.message)
              break;
          case 'auth/wrong-password':
              setPasswordError(err.message)
              break
      }
  })
}

const handleSignup = () => {
  clearErrors()
  fire
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(err => {
      switch(err.code){
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
          setEmailError(err.message);
          break;

          case 'auth/weak-password':
          setPasswordError(err.message)
      }
  })
}

const handleLogout = () => {
  fire
  .auth()
  .signOut()
}

const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      clearInputs()
      setUser(user)
    } 
    else {
        setUser('')
    }
  })
}

useEffect(() => {
  authListener()
}, [])

  return (
    <div className="App">
    {user ? (
      <BrowserRouter>
      <GlobalProvider>
      <Nav handleLogout = {handleLogout}/>
      <Switch>
        <Route exact path = '/'><Redirect to = "/homepage"/></Route>
        <Route exact path = '/homepage'><Homepage/></Route>
      </Switch>
      </GlobalProvider>
     </BrowserRouter>
    ) : (
      
      <BrowserRouter>
      <Switch>
      <Route exact path = '/homepage'><Redirect to = "/" /></Route>
        <Route><Login email = {email} 
            setEmail = {setEmail} 
            password = {password} 
            setPassword={setPassword} 
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError} /></Route>
      </Switch>
      </BrowserRouter>
    )}
     
    </div>
  );
}

export default App;
