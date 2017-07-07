import React from 'react';
import {Text, TouchableOpacity } from 'react-native';



const Button = ({ onPress }) => {
  const {touchableStyle, textStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style = {touchableStyle}>
    <Text style = {textStyle}>
      Buy Now!
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  touchableStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e7d32',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1b5e20',
    marginLeft: 5,
    marginRight: 5

  },

  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
