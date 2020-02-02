import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function RightPane({styleProp}) {
    return(
        <Paper style={styleProp.Paper}>
            <Typography variant="h4"> Right Panel </Typography>
        </Paper>
    )
}

export default RightPane;