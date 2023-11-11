import React, { useCallback } from "react"
import { View, StyleSheet } from "react-native"

import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { Dashboard } from "./src/components/index"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

SplashScreen.preventAutoHideAsync()

const HomeStack = createNativeStackNavigator()
const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "parry-hotter": require("./assets/fonts/ParryHotter.ttf")
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <HomeStack.Navigator initialRouteName="Home">
          <HomeStack.Screen name="Home" component={Dashboard} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </View>
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <UpComingWeather />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
