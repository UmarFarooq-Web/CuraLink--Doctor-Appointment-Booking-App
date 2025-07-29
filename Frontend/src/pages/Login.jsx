import React, { useState } from 'react'

const Login = () => {
  const [state  , setState] = useState('Sign Up')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')


  const handleSubmit = async(event) => {
    event.preventDefault()

  }

  return (
    <form action=""></form>
  )
}

export default Login
