import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from "../../utils/colors"


const HomeScreen = () => {
  return (
    <View style= {styles.container}>
      <image source={require("../assets/login.png")} />
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  }

 


})