import styles from './lib/styles.module.css'

const AuthTemplate = (props: {children: any}) => {
    return <div className={styles.authTemplate}>
        <div className={styles.form}>
            {props.children}
        </div>
        
    </div>
}

export default AuthTemplate