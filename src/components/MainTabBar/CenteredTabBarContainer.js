import React, { Component } from 'react';
import CenteredTabBar from '../material/CenteredTabBar';
import {tabItems} from './TabBarNames';

class CenteredTabBarContainer extends Component {

    render() {
        return (
            <CenteredTabBar items={tabItems}/>
        )
    }

}

export default CenteredTabBarContainer;