import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SideBar({ }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon style={styles.image} name="shopping-cart" size={28} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    right:0,
    marginTop:70,
    marginRight:30
  },

  image: {
    color:"#fff",
    width: 24,
    height: 24,
  },
})
