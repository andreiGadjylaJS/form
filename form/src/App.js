import React, { useState } from 'react'
import './App.css';
import MainPage from './pages/MainPage'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent'



const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='app'>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth
        maxWidth={'lg'} >
        <DialogContent style={{ overflow: 'hidden !important' }}>
          <MainPage handleClos={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
