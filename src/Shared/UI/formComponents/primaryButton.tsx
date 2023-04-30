import LoadingButton from '@mui/lab/LoadingButton';
import {makeStyles} from '@material-ui/core/styles'

const PrimaryButton = ({ children, ...props }: any) => {
    return <LoadingButton
        style={{marginTop: '20px', height: '50px'}}
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        {...props}
    >{children}</LoadingButton>
}

export default PrimaryButton