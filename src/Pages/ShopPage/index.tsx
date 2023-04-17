import { useContext, useEffect } from "react"
import Header from "../../Shared/models/Header"
import LoggedAPI from "../../Shared/api/LoggedAPI"
import {observer} from 'mobx-react-lite'
import { Context } from "../../App/App"


const ShopPage = observer(() => {
    let {userState} = useContext(Context)
    useEffect(() => {
        let a = async () => {
            let response = await LoggedAPI()
            if(response.status === 200) {
                userState.setIsAuth(true)
                userState.setUser(response.data.user)
                console.log(userState.AccessToken)
            }
        }
        a()
    })
    return <div>
        <Header />
        <div>SHoPage</div>
    </div>
})

export default ShopPage