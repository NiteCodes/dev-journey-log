import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  return (
    <div>Login
      <li onClick = {() => navigate ('/')  } >Back to Home</li>
    </div>
  )
}

export default Login