import React, {Fragment} from 'react';
import Account from './Account';
import { List, Paper } from '@material-ui/core';
import AddAccountDialogButton from '../material/AddAccountDialogButton';

const stylePropLeft = {
    PaperList: {padding: 20, marginTop: 10, marginBottom: 0, height: 500-45, overflowY: 'auto'},
    PaperListBar: {marginTop: 0, height: 45} 
}

const AccountList = ({accounts, callAccountsRequest}) =>{ 
    
    const accountsList = accounts.map(account => {
        return(
                <Account id={account.id} login={account.login} />
        )
    })
        return(
            <Fragment>
                <Paper elevation={0} style={stylePropLeft.PaperList}>
                    <List component="ul">
                        {accountsList}
                    </List>
                </Paper>
                <Paper style={stylePropLeft.PaperListBar}>
                    <AddAccountDialogButton callAccountsRequest={callAccountsRequest}/>
                </Paper>
            </Fragment>
        )
    }


export default AccountList;
