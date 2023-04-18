import AdminPage from "../Pages/AdminPage"
import AccessControlPage from "../Pages/AdminPage/models/Access"
import LoginPage from "../Pages/AuthPage/models/LoginPage"
import SigninPage from "../Pages/AuthPage/models/SigninPage"
import ManagerPage from "../Pages/ManagerPage"
import ItemsPage from "../Pages/ManagerPage/models/ItemsPage"
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

export const AdminRoutes = [
    {
        path: '/admin',
        Component: AdminPage
    },
    {
        path: '/accesscontrol',
        Component: AccessControlPage
    },
]

export const ManagerRoutes = [
    {
        path: '/manager',
        Component: ManagerPage
    },
    {
        path: '/items',
        Component: ItemsPage
    },
]