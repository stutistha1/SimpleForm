import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import CustomButton from './CustomButton';
import {CommonStyles} from '../constants';

const CustomFlatlist = ({users, handleNavigation}) => {
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
    return (
      <CustomButton
        title="Go to Scrollview Screen"
        onPress={handleNavigation}
      />
    );
  };

  return (
    <FlatList
      data={users}
      style={CommonStyles.flexRoot}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
    />
  );
};

const STYLE = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  header: {
    margin: 5,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  listItem: {
    borderBottomWidth: 1,
    padding: 5,
  },
});

export default CustomFlatlist;
