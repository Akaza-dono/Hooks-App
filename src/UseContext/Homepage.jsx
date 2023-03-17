import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'

export const Homepage = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>Home Page <small>{user?.user}</small> </h1>
      <hr />

      <button className='btn btn-success'
        onClick={() => setUser({ id: 1, name: 'Alejandro', email: 'alejoquevedo0598@gmail.com' })}>Agregar Usuario</button>

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}
