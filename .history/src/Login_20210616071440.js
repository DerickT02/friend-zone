import React, { Component, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props
    return (
        <section className = "login">
        <div className="loginContainer" >

<h1>Friendzone</h1>

<label>Username</label>
<input type ="text" autoFocus required value = {email} onChange={(e) => setEmail(e.target.value)}/>
<p className ="errorMsg">{emailError}</p>
<label>Password</label>
<input type ="password" required value = {password} onChange={(e) => setPassword(e.target.value)} />
<p className = "errorMsg">{passwordError}</p>
<div className="btnContainer">

    {hasAccount ? (
        <div>
       <button type = "submit" onClick = {handleLogin}>Sign in</button>
        <p>Don't have an account? <span onClick ={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
        </div>
    ):( 
        <div>
        <button type = "submit" onClick={handleSignup}>Sign Up</button>
        <p>have an account? <span onClick = {() => setHasAccount(!hasAccount)}>Sign In</span></p>
        </div>
    )}
    
</div>
</div>
</section>



    

    )
}


export default Login