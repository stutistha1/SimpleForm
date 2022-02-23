import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';

import {FlatlistScreen, ScrollviewScreen} from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {paddingVertical: 5},
        tabBarLabelStyle: {fontSize: 14},
      }}>
      <Screen
        name="Flatlist Screen"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="list-bullet"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
          // tabBarLabelStyle: {fontSize: 14},
        }}
        component={FlatlistScreen}
      />

      <Screen
        name="Scrollview Screen"
        component={ScrollviewScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="list" size={30} color={focused ? 'black' : 'grey'} />
          ),
          // tabBarLabelStyle: {fontSize: 14},
        }}
      />
    </Navigator>
  );
};

export default BottomTabNav;
