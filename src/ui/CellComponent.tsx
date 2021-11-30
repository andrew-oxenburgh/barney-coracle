import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
   cell: {
      color: 'black',
      fontFamily: 'roman',
      fontSize: '32px',
      fontWeight: 'bold',
      backgroundColor: 'white',
      alignItems: 'center',
      height: 60,
      width: 60,
      justifyContent: 'center',
      padding: 20,
      margin: 5,
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: 2,
   },
})

export function CellComponent({ children }): React.ReactElement<View> {
   return <View style={styles.cell}>{children}</View>
}
