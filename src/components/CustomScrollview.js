import React from 'react';
import {ScrollView, TextInput, StyleSheet, Text} from 'react-native';

import CustomButton from './CustomButton';
import {CommonStyles} from '../constants';

const CustomScrollview = ({handleNavigation}) => {
  return (
    <ScrollView style={CommonStyles.flexRoot}>
      <Text style={STYLE.text}>NEW USER FORM</Text>

      <TextInput placeholder="First Name" style={STYLE.input} />

      <TextInput placeholder="Middle Name" style={STYLE.input} />

      <TextInput placeholder="Last Name" style={STYLE.input} />

      <TextInput placeholder="Age" keyboardType="numeric" style={STYLE.input} />

      <TextInput placeholder="Email Address" style={STYLE.input} />

      <TextInput placeholder="Phone Number" style={STYLE.input} />

      <TextInput placeholder="House No." style={STYLE.input} />

      <TextInput placeholder="City" style={STYLE.input} />

      <TextInput placeholder="District" style={STYLE.input} />

      <TextInput placeholder="Province" style={STYLE.input} />

      <CustomButton title="Add User" />

      <CustomButton title="Go to Flatlist Screen" onPress={handleNavigation} />
    </ScrollView>
  );
};

const STYLE = StyleSheet.create({
  text: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    borderRadius: 42,
    padding: 10,
  },
});

export default CustomScrollview;
