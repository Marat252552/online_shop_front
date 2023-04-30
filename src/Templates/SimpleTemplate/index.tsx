import { useEffect, useState } from 'react';
import styles from './lib/styles.module.css'
import Snackbar, {SnackbarOrigin} from '@mui/material/Snackbar';
import React from 'react'

export interface State extends SnackbarOrigin {
    open: boolean,
    message: string
}

const SimpleTemplate = (props: { children: any }) => {
    // Notification state
    let [state, setState] = useState<State>({
        open: false,
        message: '',
        vertical: 'top',
        horizontal: 'center'
    })
    const openNotif = (message: string) => {
        setState({...state, message, open: true})
        setTimeout(() => {
            setState({...state, open: false})
        }, 5000)
    }
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    let { open, horizontal, vertical, message } = state

    return <div className={styles.authTemplate}>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message={message}
            key={vertical + horizontal}
        />
        <div className={styles.form}>
            {React.cloneElement(props.children, { openNotif })}
        </div>
    </div>
}

export default SimpleTemplate