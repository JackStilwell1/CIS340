import React from 'react';
import {Text, Image, View } from 'react-native';

export default function MyDog() {

  let pic = {
    uri: 'https://images.dog.ceo/breeds/clumber/n02101556_8352.jpg' };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={pic}
      style={{width: 200, height: 200}}
      />
      <Text> Hello, this is my dog </Text>
    </View>
  );
}


