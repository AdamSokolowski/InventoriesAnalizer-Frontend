import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';


function CenteredTabBarExample() {
    return(
        <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    )
}

export default CenteredTabBarExample;