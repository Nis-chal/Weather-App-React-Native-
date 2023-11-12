import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../../assets/instagram-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkjRXUwNf3y_HZSJwbjwsChWCj_Lld1Er4g&usqp=CAU"
            }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="heart-outline"
            style={{ color: "black", fontSize: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Ionicons
            name="chatbubble-outline"
            style={{ color: "black", fontSize: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row"
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain"
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain"
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    zIndex: 100
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600"
  }
})

export default Header
