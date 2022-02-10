import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ScrollViewExample from './ScrollViewExample';
import CustomButton from '../components/CustomButton';
import {CommonStyles} from '../constants';

const FlatListExample = () => {
  const [users, setUsers] = useState([ScrollViewExample]);

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
    return <CustomButton title="Remove all users" />;
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
    fontSize: 20,
  },
  header: {
    margin: 7,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  listItem: {
    borderBottomWidth: 1,
    padding: 5,
  },
});

export default FlatListExample;
