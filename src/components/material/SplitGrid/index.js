import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styleProp = {
    Paper: {padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto'}
}

function SplitGrid() {
  return (
    <Grid container sm>
        <Grid item sm={3}>
            <LeftPane styleProp={styleProp} />
        </Grid>
        <Grid item sm>
            <RightPane styleProp={styleProp} />
        </Grid>
    </Grid>
  );
}


export default SplitGrid;