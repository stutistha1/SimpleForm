import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const CustomButton = ({onPress, title, backgroundColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={StyleSheet.flatten([
      styles.button,
      backgroundColor && {backgroundColor},
    ])}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4682b4',
    padding: 16,
    marginVertical: 16,
    borderRadius: 45,
    width: '52%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomButton;
