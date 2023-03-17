import { useState } from "react"
import { UserContext } from "./UserContext"

    // const user = {
    //     user: 'Alejandro Quevedo',
    //     email: 'alejoquevedo0598@hotmail.com',
    //     id: 12
    // }

export const UserProvider = ({children}) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
