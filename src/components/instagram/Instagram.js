import { View, Text, SafeAreaView } from "react-native"
import React from "react"
import Header from "./Header"
import Stories from "./Stories"
const Instagram = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <Stories />
      </View>
    </SafeAreaView>
  )
}

export default Instagram
