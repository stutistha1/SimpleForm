import React from 'react';
import {View} from 'react-native';

import {ScrollViewExample, FlatListExample} from './components';
import {CommonStyles} from './constants';

const SampleApp = () => {
  return (
    <View style={CommonStyles.flexRoot}>
      <ScrollViewExample />
      <FlatListExample />
    </View>
  );
};

export default SampleApp;
