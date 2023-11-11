import React from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>HIgh: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text>Its Sunny</Text>
        <Text>Its perfect t-shirt weather</Text>
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
    alignItems: "center"
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  BodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start"
  }
})
export default CurrentWeather
