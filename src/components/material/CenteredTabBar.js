import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';



function CenteredTabBar({items}) {


  return(
        <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {items.map(tabItem =>
            <Tab label={tabItem} />
)}
        </Tabs>
      </Paper>
    )
}

export default CenteredTabBar;