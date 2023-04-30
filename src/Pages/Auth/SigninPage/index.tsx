import SimpleTemplate from "../../../Templates/SimpleTemplate"
import NewSigninForm from "./components/NewSigninForm"
import SignInForm from "./components/SignInForm"
import styles from './lib/styles.module.css'

const SignInPage = () => {
    return <div className={styles.page}>
        <SimpleTemplate>
            <NewSigninForm />
        </SimpleTemplate>
    </div>
}

export default SignInPage