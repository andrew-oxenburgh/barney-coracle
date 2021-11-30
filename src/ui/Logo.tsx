import { Image, StyleSheet } from 'react-native'
import { battleship } from './images'
import React from 'react'

export function Logo({ size = 4 }) {
   const logoSize = 300 / size
   const styles = StyleSheet.create({
      logo: {
         height: logoSize,
         width: logoSize,
         backgroundRepeat: 'no-repeat',
      },
   })

   return <Image style={styles.logo} source={{ uri: battleship }} />
}
