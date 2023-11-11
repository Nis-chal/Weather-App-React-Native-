import React, { useCallback } from "react"
import { View, StyleSheet } from "react-native"
import CurrentWeather from "./src/components/CurrentWeather"
import UpComingWeather from "./src/components/UpComingWeather"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()
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
      <UpComingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
