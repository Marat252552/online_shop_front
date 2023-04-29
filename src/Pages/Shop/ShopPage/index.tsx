import { useContext, useEffect } from "react"
import Header from "../../../Shared/UI/Header"
import LoggedAPI from "../../../Shared/api/LoggedAPI"
import { observer } from 'mobx-react-lite'
import { Context } from "../../../App/App"
import Menu from "../../../Shared/UI/Menu"
import { Button } from "antd"
import ItemsShowcase from "../../../Widgets/ItemsShowcase"
import MainTemplate from "../../../Templates/MainTemplate"
import SearchInput from "../../../Shared/UI/SearchInput"

const ShopPage = observer(() => {
    let { userState } = useContext(Context)
    useEffect(() => {
        let a = async () => {
            let response = await LoggedAPI()
            if (response.status === 200) {
                userState.setIsAuth(true)
                userState.setUser(response.data.user)
            }
        }
        a()
    })
    return <div>
        <MainTemplate BodyChildren={<ItemsShowcase />} MenuChildren={<>
            <SearchInput />
            <Button>Поиск</Button>
            </>
        } />
        {/* <Header />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Menu >

            </Menu>
        </div>
        <div>SHoPage</div> */}
    </div>
})

export default ShopPage