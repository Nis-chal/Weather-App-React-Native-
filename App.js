import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Weather App</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto"
  }
})
