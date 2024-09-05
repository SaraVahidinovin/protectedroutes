import { Navigate, Outlet } from "react-router-dom";
import App from "./App";

export function ProtectedRoutes({isLoggedIn}) {

    return (
        <>
        {isLoggedIn ? <Outlet /> : <Navigate to = "login" /> }
        </>
        
    )
}
