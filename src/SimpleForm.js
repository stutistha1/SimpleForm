import React from 'react';
import {View} from 'react-native';

import {ScrollViewForm} from './components';
import {CommonStyles} from './constants';

const SimpleForm = () => {
  return (
    <View style={CommonStyles.flexRoot}>
      <ScrollViewForm />
    </View>
  );
};

export default SimpleForm;
