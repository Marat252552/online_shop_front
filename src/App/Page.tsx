import { useContext, useEffect } from "react"
import { Context } from "./App"
import { observer } from 'mobx-react-lite'
import { AdminRoutes, ManagerRoutes, PublicRoutes, UserRoutes } from "./routes"
import { Routes, Route, Navigate } from 'react-router-dom'
import LoggedAPI from "../Shared/api/LoggedAPI"

const Page = observer(() => {
    // useEffect(() => {
    //     console.log(localStorage.getItem('AccessToken'))
    // }, [localStorage.getItem('AccessToken')])
    // localStorage.clear()
    let { userState } = useContext(Context)
    useEffect(() => {
        let a = async () => {
            let response = await LoggedAPI()
            if(response.status === 200) {
                userState.setIsAuth(true)
                userState.setUser(response.data.user)
            }
        }
        a()
    }, [])
    return <div>
        <Routes>
            {PublicRoutes.map(route => {
                let Component = route.Component
                return <Route key={route.path} path={route.path} element={<Component />} />
            })}
            {userState.user.role === 'USER' && UserRoutes.map(route => {
                let Component = route.Component
                return <Route key={route.path} path={route.path} element={<Component />} />
            })}
            {userState.user.role === 'ADMIN' && AdminRoutes.map(route => {
                let Component = route.Component
                return <Route key={route.path} path={route.path} element={<Component />} />
            })}
            {userState.user.role === 'MANAGER' && ManagerRoutes.map(route => {
                let Component = route.Component
                return <Route key={route.path} path={route.path} element={<Component />} />
            })}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </div>
})

export default Page