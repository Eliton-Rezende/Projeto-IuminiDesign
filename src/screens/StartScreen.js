import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>1000 Grau App</Header>
      <Paragraph>
        O App com as melhores opções de compra.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
      >
        Home
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrar-se
      </Button>
    </Background>
  )
}
