import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainNav, BottomTabNav, DrawerNav} from './routes';

const SampleApp = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default SampleApp;
