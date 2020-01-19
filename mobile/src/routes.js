import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        'DevRadar': Main,
        Profile: Profile,
    },{
    	defaultNavigationOptions: {
    		headerBackTitleVisible: false,
    		headerTintColor: '#FFF',
    		headerStyle: {
    			backgroundColor: '#7d40e7'
    		},
    	}
    })
);
  
export default Routes;
