import React from 'react';
import SimpleAppBar from './components/material/SimpleAppBar';
import CenteredTabBarContainer from './components/MainTabBar/CenteredTabBarContainer';

function Header() {
    return(
        <div className='Header'>
            <SimpleAppBar />
            <CenteredTabBarContainer />
        </div>
    )
}

export default Header;
