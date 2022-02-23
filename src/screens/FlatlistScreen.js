import React from 'react';
import {useState} from 'react';

import {CustomFlatlist} from '../components';

const FlatlistScreen = ({navigation, route}) => {
  const {params} = route;

  console.log(params);

  const [users] = useState([
    {
      firstName: 'Sodip',
      lastName: 'Thapa',
      email: 'sodip@gmail.com',
      age: '22',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@email.com',
      age: '22',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'example@email.com',
      age: '22',
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'example@email.com',
      age: '22',
    },
    {
      firstName: 'Elizabeth',
      lastName: 'Benett',
      email: 'example@email.com',
      age: '22',
    },
    {
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
      email: 'example@email.com',
      age: '22',
    },
    {
      firstName: 'Harry',
      lastName: 'Potter',
      email: 'example@email.com',
      age: '22',
    },
    {
      firstName: 'Hermione',
      lastName: 'Granger',
      email: 'example@email.com',
      age: '22',
    },
    {
      firstName: 'Ronald',
      lastName: 'Weasley',
      email: 'example@email.com',
      age: '22',
    },
  ]);

  return (
    <CustomFlatlist
      users={users}
      handleNavigation={() => navigation.navigate('Scrollview Screen')}
    />
  );
};

export default FlatlistScreen;
