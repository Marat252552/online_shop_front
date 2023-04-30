import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BasicSelectProps_T, element_T } from './lib/types';
import FormHelperText from '@mui/material/FormHelperText';

let BasicSelect = React.forwardRef(({ ...props }, ref) => {
  const [value, setValue] = React.useState('');
  console.log(props)
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl margin='normal' error={props.error} fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          // {...props}
          // error={props.error}
          inputRef={ref}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {props.elements && props.elements.map((element: element_T) => {
            return <MenuItem value={element.value} key={element.value}>{element.name}</MenuItem>
          })}
        </Select>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
})

export default BasicSelect
