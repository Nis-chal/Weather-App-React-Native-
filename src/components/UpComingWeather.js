import React from "react"
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native"
import { Feather } from "@expo/vector-icons"
const DATA = [
  {
    dt_text: "Jamie",
    min: 20,
    max: 40,
    main: { temp_max: 20, temp_min: 10 },
    weather: [
      { main: "nimesh" },
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" }
    ],
    url: "https://mrbeastburger.io/wp-content/uploads/2023/06/mr-beast-networth.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
  },
  {
    dt_text: "2020-200e3sdfsdfsdfsdfsdf",
    min: 20,
    max: 40,
    main: { temp_max: 20, temp_min: 10 },
    weather: [
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" }
    ],
    url: "https://mrbeastburger.io/wp-content/uploads/2023/06/mr-beast-networth.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
  },
  {
    dt_text: "2020-200e2j",
    min: 20,
    max: 40,
    main: { temp_max: 20, temp_min: 10 },
    weather: [
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" }
    ],
    url: "https://mrbeastburger.io/wp-content/uploads/2023/06/mr-beast-networth.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
  },
  {
    dt_text: "2020-200u",
    min: 20,
    max: 40,
    main: { temp_max: 20, temp_min: 10 },
    weather: [
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" }
    ],
    url: "https://mrbeastburger.io/wp-content/uploads/2023/06/mr-beast-networth.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
  },
  {
    dt_text: "2020-200i",
    min: 20,
    max: 40,
    main: { temp_max: 20, temp_min: 10 },
    weather: [
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" }
    ],
    url: "https://mrbeastburger.io/wp-content/uploads/2023/06/mr-beast-networth.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
  },
  {
    dt_text: "2020-200o",
    min: 20,
    max: 40,
    main: { temp_max: 20, temp_min: 10 },
    weather: [
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" },
      { main: "Rain" }
    ],
    url: "https://mrbeastburger.io/wp-content/uploads/2023/06/mr-beast-networth.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
  }
]
const Empty = () => {
  return (
    <View>
      <Text>Empty</Text>
    </View>
  )
}
const Item = (props) => {
  const { dt_text, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text>{condition}</Text>
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}
const UpComingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: "4%",
          backgroundColor: "white",
          padding: "2%",
          borderRadius: "20px"
        }}
      >
        <Item
          style={styles.container}
          condition={item.weather[0].main}
          dt_text={item.dt_text}
          min={item.main.temp_min}
          max={item.main.temp_max}
          url={item.url}
        />
        <Image
          style={{ aspectRatio: "1/1", width: "100%", objectFit: "cover" }}
          source={{
            url: item.url
              ? item.url
              : "data:image/jpeg;base64,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"
          }}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          url: "data:image/jpeg;base64,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"
        }}
        style={styles.image}
      >
        <View style={{ flexDirection: "column" }}>
          <Text>Upcoming Wehater</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_text}
            ItemSeparatorComponent={() => (
              <View style={{ backgroundColor: "red", marginTop: 12 }}></View>
            )}
            ListEmptyComponent={<Empty />}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "red"
  },
  item: {
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink"
  },
  temp: {
    color: "white",
    fontSize: 20
  },
  date: {
    color: "white",
    fontFamily: "parry-hotter",
    fontSize: 30
  },
  image: {
    flex: 1
  }
})
export default UpComingWeather
