import React from 'react';
import { Paper } from '@material-ui/core';
import AccountContainer from '../../AccountContainer';

function LeftPane({styleProp}) {
    return(
        <Paper style={styleProp.Paper}>
            <AccountContainer />
        </Paper>
    )
}

export default LeftPane;