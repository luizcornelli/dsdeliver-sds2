import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {

  const navigation = useNavigation();

  const handlerOnPress = () => {
      navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handlerOnPress}>
      <View style={styles.container}>
        <Image source={ require('../assets/logo.png') }/>
        <Text style={ styles.text }>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.024,
    color: '#fff',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold'
  }
});
