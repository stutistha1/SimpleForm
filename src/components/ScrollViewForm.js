import React, {useState} from 'react';
import {Text, TextInput, ScrollView, StyleSheet, Alert} from 'react-native';

import {CustomButton, FlatListForm} from '.';
import {CommonStyles} from '../constants/index';

const ScrollViewForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [formData, setFormData] = useState('');

  return (
    <ScrollView style={CommonStyles.flexRoot}>
      <Text style={STYLE.text}>NEW USER FORM</Text>

      <TextInput
        placeholder="First Name"
        style={STYLE.input}
        onChangeText={text => {
          setFirstName(text);
        }}
        value={firstName}
      />

      <TextInput
        placeholder="Last Name"
        style={STYLE.input}
        onChangeText={text => {
          setLastName(text);
        }}
        value={lastName}
      />

      <TextInput
        placeholder="Email Address"
        keyboardType="email-address"
        style={STYLE.input}
        onChangeText={text => {
          setEmail(text);
        }}
        value={email}
      />

      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        style={STYLE.input}
        onChangeText={text => {
          setAge(text);
        }}
        value={age}
      />
      <TextInput placeholder="Phone Number" style={STYLE.input} />

      <CustomButton
        onPress={() => {
          if (firstName != '' && lastName != '' && email != '' && age != '') {
            setFormData(arr => [
              ...arr,
              {
                firstName: firstName,
                lastName: lastName,
                email: email,
                age: age,
              },
            ]);
          } else {
            Alert.alert('All fields are required');
          }
        }}
        title="Add User"
      />
      <FlatListForm Fdata={formData} />
    </ScrollView>
  );
};

const STYLE = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
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

export default ScrollViewForm;
