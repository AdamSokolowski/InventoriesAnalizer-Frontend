import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function SimpleAppBar() {
  return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='headline' color='inherit'>Inventory Analizer</Typography>
        </Toolbar>
      </AppBar>

  );
}


export default SimpleAppBar;