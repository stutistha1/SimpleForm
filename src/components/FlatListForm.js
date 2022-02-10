import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';

import CustomButton from './CustomButton';
import {CommonStyles, Images} from '../constants';

const FlatListForm = ({Fdata}) => {
  const [users, setUsers] = useState(Fdata);

  useEffect(() => {
    setUsers(Fdata);
  }, [Fdata]);

  const clearAllUsers = () => {
    setUsers([]);
    Fdata.splice(0, Fdata.length);
  };

  const renderItem = ({item}) => {
    return (
      <View style={[STYLE.listItem, CommonStyles.flexRow]}>
        <Image source={Images.userImage} style={STYLE.userImage} />

        <View style={CommonStyles.p10}>
          <Text style={STYLE.text}>
            Name: {item?.firstName} {item?.lastName}
          </Text>

          <Text style={STYLE.text}>Age: {item?.age}</Text>

          <Text style={STYLE.text}>Email: {item?.email}</Text>
        </View>
      </View>
    );
  };

  const ListHeader = () => {
    return <Text style={STYLE.header}>{`ALL USERS (${users?.length})`}</Text>;
  };

  const ListFooter = () => {
    return <CustomButton onPress={clearAllUsers} title="Remove All Users" />;
  };

  return (
    <FlatList
      data={users}
      style={[CommonStyles.dFlex]}
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
    color: '#4682b4',
  },

  header: {
    margin: 10,
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },

  listItem: {
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: '#4682b4',
  },

  userImage: {
    height: 55,
    width: 60,
    borderRadius: 100,
    alignSelf: 'center',
  },
});

export default FlatListForm;
