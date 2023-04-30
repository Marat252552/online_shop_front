// import AdminPage from "../Pages/Admin/AdminPage"
import AccessControlPage from "../Pages/Admin/AccessPage"
import LoginPage from "../Pages/Auth/LoginPage"
import ManagerPage from "../Pages/Manager/ManagerPage"
import BrandsPage from "../Pages/Manager/Brands"
import CreateBrandPage from "../Pages/Manager/Brands/CreateBrandPage"
import ItemsPage from "../Pages/Manager/Items"
// import TypesPage from "../2.Pages/Manager/TypesPage"
// import CreateTypePage from "../2.Pages/Manager/TypesPage/Models/CreateBrandPage"
import ShopPage from "../Pages/Shop/ShopPage"
import SignInPage from "../Pages/Auth/SigninPage"
import CreateItemPage from "../Pages/Manager/Items/CreateItemPage"



export const PublicRoutes = [
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/signin',
        Component: SignInPage
    },
    {
        path: '/',
        Component: ShopPage
    }
]

export const AdminRoutes = [
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
        path: '/items/create',
        Component: CreateItemPage
    },
    {
        path: '/items',
        Component: ItemsPage
    },
    // {
    //     path: '/types',
    //     Component: TypesPage
    // },
    // {
    //     path: '/types/create',
    //     Component: CreateTypePage
    // },
    {
        path: '/brands/create',
        Component: CreateBrandPage
    },
    {
        path: '/brands',
        Component: BrandsPage
    },
]