import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import CustomButton from '../components/CustomButton';
import {CommonStyles} from '../constants';

const FlatListForm = ({formPData}) => {
  const [users, setUsers] = useState(formPData);

  useEffect(() => {
    setUsers(formPData);
  }, [formPData]);

  const remove = () => {
    setUsers([]);
    formPData.splice(0, formPData.length);
  };

  const renderItem = ({item}) => {
    return (
      <View style={STYLE.listItem}>
        <Text style={STYLE.text}>
          Name: {item?.firstName} {item?.lastName}
        </Text>

        <Text style={STYLE.text}>{item?.age}</Text>

        <Text style={STYLE.text}>{item?.email}</Text>
      </View>
    );
  };

  const ListHeader = () => {
    return <Text style={STYLE.header}>{`ALL USERS (${users?.length})`}</Text>;
  };

  const ListFooter = () => {
    return <CustomButton onPress={remove} title="Remove all Users" />;
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
