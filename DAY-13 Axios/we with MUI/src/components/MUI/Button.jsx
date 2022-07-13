import * as React from 'react';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" >
        Delete
      </Button>
      <Button variant="contained" >
        Update
      </Button>
    </Stack>
  );
}

export function IconDeleteButtons() {
    return (
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" >
          Delete
        </Button>
      </Stack>
    );
  }

export function LabelUpdateButton(){
    return (
    <Stack direction="row" spacing={2}>
        <Button variant="contained" >
            Update
        </Button>
    </Stack>
    )
}

export function LabelAddButton({handleAdd}){
    return (
    <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleAdd}>
            ADD
        </Button>
    </Stack>
    )
}