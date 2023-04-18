import { useContext, useEffect } from "react"
import Header from "../../Shared/models/Header"
import LoggedAPI from "../../Shared/api/LoggedAPI"
import {observer} from 'mobx-react-lite'
import { Context } from "../../App/App"
import Menu from "./models/Menu"
import ItemsBlock from "./models/Items"


const ShopPage = observer(() => {
    let {userState} = useContext(Context)
    useEffect(() => {
        let a = async () => {
            let response = await LoggedAPI()
            if(response.status === 200) {
                userState.setIsAuth(true)
                userState.setUser(response.data.user)
            }
        }
        a()
    })
    return <div>
        <Header />
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Menu />
            <ItemsBlock />
        </div>
        <div>SHoPage</div>
    </div>
})

export default ShopPage