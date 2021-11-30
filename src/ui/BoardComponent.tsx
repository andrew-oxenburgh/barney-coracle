import React from 'react'
import { StyleSheet, View } from 'react-native'
const styles = StyleSheet.create({
   board: {
      width: '100%',
      display: 'flex',
      flexWrap: 'nowrap',
   },
})

export function BoardComponent({ children }): React.ReactElement<View> {
   return <View style={styles.board}>{children}</View>
}
