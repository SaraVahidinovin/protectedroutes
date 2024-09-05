import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/profile";
import { ProtectedRoutes } from "./Protectedroutes";


const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoutes isLoggedIn = {isLoggedIn} />}>
                <Route path="profile" element={<Profile />} />
            </Route>
        </Route>

    )
)

export default Router