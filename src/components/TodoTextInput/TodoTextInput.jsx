import React from 'react'
import TextField from '@mui/material/TextField';

const TodoTextInput = ({value, setValue}) => {
  return (
    <TextField  style={{width:"100%"}} id="outlined-basic" variant="outlined" value={value} onChange={e => setValue(e.target.value)}/>
  )
}

export default TodoTextInput;