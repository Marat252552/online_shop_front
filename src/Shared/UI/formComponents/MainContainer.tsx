import {Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

const MainContainer = ({children, ...props}: any) => {
    const styles = useStyles()
    return <Container maxWidth='xs' className={styles.root} {...props}>
        {children}
    </Container>
}

export default MainContainer