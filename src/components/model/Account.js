import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';



const Account = ({id, login}) =>{ 
    
        return(
            <ListItem button>
                <ListItemText primary={login}/>
            </ListItem>
        )
    }


export default Account;
