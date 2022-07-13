import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StateTextFields({fChange,lChange}) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="First Name"
        name="FirstName"
        onChange={fChange}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Last Name"
        name="LastName"
        onChange={lChange}
      />
    </Box>
  );
}
