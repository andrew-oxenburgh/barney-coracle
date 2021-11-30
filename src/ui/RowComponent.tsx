import React from 'react'
import { StyleSheet, View } from 'react-native'
const styles = StyleSheet.create({
   row: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
   },
})

export function RowComponent({ children }): React.ReactElement<View> {
   return <View style={styles.row}>{children}</View>
}
