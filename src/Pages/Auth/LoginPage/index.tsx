import { useState } from "react";
import SimpleTemplate from "../../../Templates/SimpleTemplate"
import LoginForm from "./components/LoginForm"
import NewLoginForm from "./components/NewLoginForm"
import styles from './lib/styles.module.css'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export interface State extends SnackbarOrigin {
    open: boolean,
    message: string
}

const LoginPage = () => {
    return <div className={styles.page}>
        <SimpleTemplate>
            <NewLoginForm />
        </SimpleTemplate>
    </div>
}

export default LoginPage