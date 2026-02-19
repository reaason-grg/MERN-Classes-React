import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
const {isAuthenticated,isLoading}=useAuth0()
const navigate=useNavigate();

useEffect(()=>{
    if(!isAuthenticated || isLoading){
        navigate("/login");
    }
},[isAuthenticated,isLoading])
  return children;
}

export default ProtectedRoute
