import { Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import SignUp from "../pages/signup"

export default function RouterHandler(){
return(
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
)
}