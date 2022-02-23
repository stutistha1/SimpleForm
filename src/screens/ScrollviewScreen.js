import React from 'react';

import {CustomScrollview} from '../components';

const ScrollviewScreen = ({navigation, route}) => {
  const {params} = route;

  console.log(params);

  return (
    <CustomScrollview
      handleNavigation={() => navigation.navigate('Flatlist Screen')}
    />
  );
};

export default ScrollviewScreen;
