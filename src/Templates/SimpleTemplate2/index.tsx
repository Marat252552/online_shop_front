import Header from '../../Shared/UI/Header'
import styles from './lib/styles.module.css'

const SimpleTemplate2 = (props: { children: any }) => {
    return <>
        <Header />
        <div className={styles.authTemplate}>
            <div className={styles.form}>
                {props.children}
            </div>
        </div>
    </>
}

export default SimpleTemplate2