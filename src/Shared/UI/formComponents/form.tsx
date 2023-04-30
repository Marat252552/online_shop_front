import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%'
    }
}))

const Form = ({children, ...props}: any) => {
    const styles = useStyles()
    return <form className={styles.root} {...props}>
        {children}
    </form>
}

export default Form