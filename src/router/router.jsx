import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Error/ErrorPage";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addTouristSpot',
                element: <AddTouristSpot />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            }
        ],
    },
]);
export default router;
