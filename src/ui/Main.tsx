import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native'
import { CellComponent } from './CellComponent'
import { RowComponent } from './RowComponent'
import { BoardComponent } from './BoardComponent'
import { Logo } from './Logo'

export function Main(): React.ReactElement<View> {
   return (
      <SafeAreaView style={styles.container}>
         <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            translucent={true}
            hidden={false}
         />
         <Text style={styles.button}>Barney Coracle</Text>
         <Logo />
         <BoardComponent>
            <RowComponent>
               <CellComponent>
                  <Text>a</Text>
               </CellComponent>
               <CellComponent>
                  <Text>b</Text>
               </CellComponent>
               <CellComponent>
                  <Text>c</Text>
               </CellComponent>
               <CellComponent>
                  <Text>d</Text>
               </CellComponent>
               <CellComponent>
                  <Text>e</Text>
               </CellComponent>
            </RowComponent>
            <RowComponent>
               <CellComponent>
                  <Text>a2</Text>
               </CellComponent>
               <CellComponent>
                  <Text>b2</Text>
               </CellComponent>
               <CellComponent>
                  <Text>c2</Text>
               </CellComponent>
               <CellComponent>
                  <Text>d2</Text>
               </CellComponent>
               <CellComponent>
                  <Text>e2</Text>
               </CellComponent>
            </RowComponent>
         </BoardComponent>
         <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={styles.button}
         >
            <Text style={styles.buttonText}>Pick a photo</Text>
         </TouchableOpacity>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
   },
   button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 30,
   },
   buttonText: {
      fontSize: 20,
      color: '#fff',
   },
})

export default {
   Main,
}
