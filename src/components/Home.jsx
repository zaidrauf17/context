import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
    const {count} = useContext(AuthContext)
  return (
    <div>Home{count}</div>
  )
}

export default Home