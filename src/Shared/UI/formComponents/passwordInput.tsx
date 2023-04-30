import { FormControl } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { forwardRef, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';

const PasswordInput = forwardRef((props, ref) => {
    let [showPassword, setShowPassword] = useState(false)
    let handleClickShowPassword = () => { setShowPassword(!showPassword) }
    return <>
        <TextField
            {...props}
            fullWidth
            margin="normal"
            inputRef={ref}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        //   onMouseDown={handleMouseDownPassword}
                        edge="end"

                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>,
            }}
        />
    </>
})

export default PasswordInput