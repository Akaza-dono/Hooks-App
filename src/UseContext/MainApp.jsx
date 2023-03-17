import { Navigate, Route, Routes } from "react-router-dom"
import {NavBar,Homepage, LoginPage, AboutPage} from '../UseContext'
import { UserProvider } from "./Context/UserProvider"


export const MainApp = () => {
  return (
    <UserProvider>
          <NavBar/>
        <hr />

        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="/*" element={<Navigate to="about"/>}/>
        </Routes>

    </UserProvider>
  )
}
