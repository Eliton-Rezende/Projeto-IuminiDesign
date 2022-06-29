import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, } from 'react-native'
import { theme } from '../core/theme'
import { View } from 'react-native'

export default function Background({ children }) {
  return (
    <ImageBackground
      resizeMode="repeat"
      style={styles.background}
    >
      <View style={styles.backgroundHeader} />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
    
  },
  backgroundHeader: {
    width: "100%",
    height: 150,
    backgroundColor: "#FFB800",
    position:"absolute",
    zIndex:-1

  },
  container: {
    flex: 1,
    width: '100%',
  },
})
