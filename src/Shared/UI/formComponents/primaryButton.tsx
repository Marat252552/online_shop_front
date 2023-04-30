import { Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const PrimaryButton = ({ children, props }: any) => {
    return <Button
        style={{marginTop: '20px', height: '50px'}}
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        {...props}
    >{children}</Button>
}

export default PrimaryButton