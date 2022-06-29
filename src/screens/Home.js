import React from 'react'
import { View } from 'react-native'
import BackgroundHome from '../components/BackgroundHome'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import ShoppingCart from '../components/ShoppingCart'
import SearchBarHome from '../components/SearchBarHome'
import ImageHome from '../components/ImageHome'
import Data from '../data/data'




export default function Home({ navigation }) {
  return (
    <BackgroundHome>
        <Header />
        <ShoppingCart />
        <SearchBarHome />
        <ImageHome />
      <Paragraph>

      </Paragraph>
      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button> */}
    </BackgroundHome>
  )
}
