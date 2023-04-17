import LoginPage from "../Pages/AuthPage/models/LoginPage"
import SigninPage from "../Pages/AuthPage/models/SigninPage"
import ShopPage from "../Pages/ShopPage"



export const PublicRoutes = [
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/signin',
        Component: SigninPage
    },
    {
        path: '/',
        Component: ShopPage
    }
]

export const PrivateRoutes = [
    
]