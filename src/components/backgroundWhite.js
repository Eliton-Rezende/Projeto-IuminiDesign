import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <ImageBackground
      resizeMode="repeat"
      style={styles.background}
    >
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height:300,
    backgroundColor: theme.colors.ColorBackgroundWhite,
  },

})
