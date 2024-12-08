import React, { useState } from 'react'
import './code.css'
import person from '../assets/person.png'
import password from '../assets/password.png'
import email from '../assets/email.png'
const SignUp = () => {
  const [login,setLogin]=useState("Signup")
  return (
    <div className='container'>
        <div className="header">
            <div className="h1"><h1>{login}</h1></div>
        </div>
        <div className="input">
            <div className="forum">
              <img src={person} alt="" />
              <input type="text" placeholder='username' required autoFocus/>
          </div>
            {login==='Login'?<div></div>:<div className="forum">
              <img src={email} alt="" />
              <input type="text" placeholder='email' required />
          </div>}
            <div className="forum">
              <img src={password} alt="" />
              <input type="text" placeholder='password' required />
          </div>
          <div className="approve">
            <p>did you forget your password ? <span>click here</span></p>
            
            <button  className='submitx' onClick={()=>{setLogin('Login')}}>Login</button>
            {login==='Signup'?<div></div>:<button className='submity' onClick={()=>{setLogin('Signup')}}>Signup</button>}
            
          </div>
        </div>
        
        
    </div>
  )
}

export default SignUp
