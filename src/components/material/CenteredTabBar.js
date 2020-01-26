import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';



function CenteredTabBar({items}) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {setValue(newValue)}

  return(
        <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
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