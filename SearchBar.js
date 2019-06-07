import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = props => {
  const { holderStyle, textInputStyle } = styles;
  return (
    <View style={holderStyle}>
      <TextInput
        style={textInputStyle}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
      />
    </View>
  );
};

const styles = {
  holderStyle: {
    alignSelf: 'stretch',
    height: 75,
    padding: 10,
    backgroundColor: 'grey',
  },
  textInputStyle: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 12,
    fontSize: 16,
  },
};

export default SearchBar;
