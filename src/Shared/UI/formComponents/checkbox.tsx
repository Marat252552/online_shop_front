import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { forwardRef } from 'react';

const MyCheckbox = forwardRef((props, ref) => {
    return <FormControlLabel
        label='Запомнить меня'
        style={{marginLeft: '0px', marginTop: '15px'}}
        control={<>
            <Checkbox
                {...props}
                inputRef={ref}
                item xs={12} sm={6}
            />
        </>}
    />
})

export default MyCheckbox