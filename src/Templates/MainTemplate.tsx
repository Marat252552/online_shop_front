import Header from "../Shared/UI/Header"
import Menu from "../Shared/UI/Menu"
import { useEffect, useState } from 'react';
import Snackbar, {SnackbarOrigin} from '@mui/material/Snackbar';
import React from 'react'

export interface State extends SnackbarOrigin {
    open: boolean,
    message: string
}

const MainTemplate = (props: {MenuChildren?: any, BodyChildren?: any}) => {
    // Notification state
    let [state, setState] = useState<State>({
        open: false,
        message: '',
        vertical: 'top',
        horizontal: 'center'
    })
    const openNotif = (message: string) => {
        setState({...state, message, open: true})
    }
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    let { open, horizontal, vertical, message } = state
    return <div style={{display: 'grid', gap: '10px'}}>
        <Header />
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message={message}
            key={vertical + horizontal}
        />
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Menu>
                {props.MenuChildren}
            </Menu>
            <div style={{width: '100%'}}>
                {React.cloneElement(props.BodyChildren, { openNotif })}
            </div> 
        </div>
    </div>
}

export default MainTemplate