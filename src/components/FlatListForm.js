import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import CustomButton from '../components/CustomButton';
import {CommonStyles} from '../constants';

const FlatListForm = () => {
  const [users, setUsers] = useState([
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

  const [newUser, setNewUser] = setNewUser({name: 'Sodip Thapa'});

  setNewUser(previousValue => ({...previousValue, age: '22'}));

  setUsers(previousValue => [
    ...previousValue,
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@email.com',
      age: '22',
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <View style={STYLE.listItem}>
        <Text style={STYLE.text}>{item?.firstName}</Text>

        <Text style={STYLE.text}>{item?.lastName}</Text>

        <Text style={STYLE.text}>{item?.email}</Text>

        <Text style={STYLE.text}>{item?.age}</Text>
      </View>
    );
  };

  const ListHeader = () => {
    return <Text style={STYLE.header}>{`ALL USERS (${users?.length})`}</Text>;
  };

  const ListFooter = () => {
    return <CustomButton title="Remove all Users" />;
  };

  return (
    <FlatList
      data={users}
      style={CommonStyles.flexRoot}
      // horizontal
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
    />
  );
};

const STYLE = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#4682b4',
  },
  header: {
    margin: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  listItem: {
    borderBottomWidth: 2,
    borderColor: '#4682b4',
    padding: 5,
  },
});

export default FlatListForm;
