import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import TextColorDesign from '../components/TextColorDesign'
import TextColorIlumini from '../components/TextColorIlumini'


export default function Header(props) {
  return (
    <View style={styles.header}>
        <TextColorIlumini />
        < TextColorDesign />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    width:"100%",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
  },
 
})
