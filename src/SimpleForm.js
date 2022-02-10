import React from 'react';
import {View} from 'react-native';

import {ScrollViewForm, FlatListForm} from './components';
import {CommonStyles} from './constants';

const SimpleForm = () => {
  return (
    <View style={CommonStyles.flexRoot}>
      <ScrollViewForm />
      <FlatListForm />
    </View>
  );
};

export default SimpleForm;
