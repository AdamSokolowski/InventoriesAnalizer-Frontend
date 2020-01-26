import React, { Fragment } from 'react';
import { Paper } from '@material-ui/core';
import AccountContainer from '../../AccountContainer';
import AddAccountDialogButton from '../AddAccountDialogButton';

function LeftPane({ styleProp }) {
    return (
        <Fragment>
            <Paper style={styleProp.Paper}>
                <AccountContainer />
                <AddAccountDialogButton />
            </Paper>
        </Fragment>
    )
}

export default LeftPane;