import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, FlatlistScreen, ScrollviewScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Navigator>
      <Screen name="Home Screen" component={HomeScreen} />

      <Screen name="Flatlist Screen" component={FlatlistScreen} />

      <Screen name="Scrollview Screen" component={ScrollviewScreen} />
    </Navigator>
  );
};

export default MainNav;
