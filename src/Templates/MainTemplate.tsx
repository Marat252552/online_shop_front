import Header from "../Shared/UI/Header"
import Menu from "../Shared/UI/Menu"


const MainTemplate = (props: {MenuChildren?: any, BodyChildren?: any}) => {
    return <div style={{display: 'grid', gap: '10px'}}>
        <Header />
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Menu>
                {props.MenuChildren}
            </Menu>
            <div style={{width: '100%'}}>
                {props.BodyChildren}
            </div> 
        </div>
    </div>
}

export default MainTemplate