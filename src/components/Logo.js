import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo.jpeg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    marginBottom: 2,
  },
})
