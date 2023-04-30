import TextField from '@material-ui/core/TextField'
import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
    return <>
        <TextField {...props}
            fullWidth
            inputRef={ref}
            variant='outlined'
            margin='normal'
        />
    </>
})

export default Input