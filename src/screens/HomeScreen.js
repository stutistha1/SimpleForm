import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import {CommonStyles} from '../constants';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={StyleSheet.flatten([
        CommonStyles.alignItemsCenter,
        CommonStyles.justifyContentCenter,
        CommonStyles.flexRoot,
      ])}>
      <Text style={CommonStyles.texAlignCenter}>
        This is the home screen. Use the buttons given below to navigate to the
        other screens.
      </Text>

      {/* Commented out for drawer navigation
      <View style={CommonStyles.marginVertical16}>
        <Button
          title="Flatlist Screen"
          onPress={() =>
            navigation.navigate('Flatlist Screen', {data: {name: 'Sodip'}})
          }
        />
      </View>

      <View style={CommonStyles.marginVertical16}>
        <Button
          title="Scrollview Screen"
          onPress={() =>
            navigation.navigate('Scrollview Screen', {data: {name: 'Sodip'}})
          }
        />
      </View> */}
    </View>
  );
};

export default HomeScreen;
