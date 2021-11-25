import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Main() {
   return (
      <View style={styles.container}>
         <Text>Open up App.js to start working on Fighting Corracles!</Text>
         <StatusBar style="auto"/>
         <Image source={{uri: 'https://i.imgur.com/TkIrScD.png'}} style={styles.logo}/>
         <Text style={styles.instructions}>
            To share a photo from your phone with a friend, just press the button below!
         </Text>
         <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
            <Text style={styles.buttonText}>Pick a photo</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
   },
   instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
   },
   button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 30,
   },
   buttonText: {
      fontSize: 20,
      color: '#fff',
   },
});
