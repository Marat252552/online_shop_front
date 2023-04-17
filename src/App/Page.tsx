import { useContext, useEffect } from "react"
import { Context } from "./App"
import { observer } from 'mobx-react-lite'
import { PrivateRoutes, PublicRoutes } from "./routes"
import { Routes, Route, Navigate } from 'react-router-dom'

const Page = observer(() => {
    localStorage.clear()
    let { userState } = useContext(Context)
    return <div>
        <Routes>
            {PublicRoutes.map(route => {
                let Component = route.Component
                return <Route key={route.path} path={route.path} element={<Component />} />
            })}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </div>
})

export default Page