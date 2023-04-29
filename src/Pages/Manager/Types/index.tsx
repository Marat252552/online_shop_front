import Header from "../../../Shared/models/Header"
import Menu from "./UI/Menu"
import MakeTable from "./UI/table"



const TypesPage = () => {
    return <div>
        <Header />
        <div style={{display: 'flex'}}>
            <Menu />
            <MakeTable />
        </div>
    </div>
}

export default TypesPage