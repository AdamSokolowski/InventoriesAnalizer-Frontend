import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AddAccountDialogButton from './AddAccountDialogButton';


function SimpleAppBar() {
  return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' color='inherit' align='left' style={{flex: 1 }}>Inventory Analizer</Typography>
          <AddAccountDialogButton />
        </Toolbar>
      </AppBar>

  );
}


export default SimpleAppBar;