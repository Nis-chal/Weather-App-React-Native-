import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
import React from "react"
import { users } from "../../utils/instautil"
const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView
        horizontal
        style={styles.storiesContainer}
        showsHorizontalScrollIndicator={false}
      >
        {users.map((story, index) => (
          <View style={styles.imagebox} key={index}>
            <Image
              source={{
                uri: story.image
              }}
              style={styles.story}
            />
            <Text>
              {story.users.length > 8
                ? story.users.slice(0, 7) + "..."
                : story.users}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  storiesContainer: {
    gap: 20
  },
  imagebox: {
    alignItems: "center"
  },
  story: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#ff8501",
    marginLeft: 6
  }
})
export default Stories
