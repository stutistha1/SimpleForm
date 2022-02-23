import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeScreen, FlatlistScreen, ScrollviewScreen} from '../screens';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />

      <Screen name="Flalist Screen" component={FlatlistScreen} />

      <Screen name="Scrollview Screen" component={ScrollviewScreen} />
    </Navigator>
  );
};

export default DrawerNav;
