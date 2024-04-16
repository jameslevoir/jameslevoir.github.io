import React from 'react'
import { Link } from 'react-router-dom'
import MainContent from '../components/MainContent'
import Button from '../components/Button'

const ErrorPage = () => {
  return (
    <MainContent>
      <h1>Something went wrong.</h1>
      <Link to="/">Home</Link>
    </MainContent>
  )
}

export default ErrorPage