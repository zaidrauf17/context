import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const About = () => {
    const {increment} = useContext(AuthContext)
  return (
    <div>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default About