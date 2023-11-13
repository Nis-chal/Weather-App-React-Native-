import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  FlatList
} from "react-native"
import React from "react"
import { Divider } from "react-native-elements"
import Ionicons from "react-native-vector-icons/Ionicons"
import Video from "react-native-video"
// import { SwiperFlatList } from "react-native-swiper-flatlist"
const Post = ({ post }) => {
  const { width } = useWindowDimensions()
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader
        username={post?.username}
        date={post?.date}
        userpic={post?.userpic}
      />
      <View style={[styles.container, { width: width }]}>
        <FlatList
          data={post?.postImage}
          renderItem={({ item }) => (
            <PostImage postImage={item.url} type={item?.type} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={true}
          pagingEnabled={true}
          bounces={false}
        />
        <View style={{ flexDirection: "row", gap: 5, padding: 0, margin: 0, }}>
          {post?.postImage.map((item, index) => {
            return (
              <Text
                style={{ fontWeight: 900, fontSize: 30, padding: 0, margin: 0 }}
              >
                .
              </Text>
            )
          })}
        </View>
      </View>
    </View>
  )
}
const PostImage = ({ postImage, type }) => {
  const { width } = useWindowDimensions()
  return (
    <View
      style={{
        flex: 1,
        height: 500,
        width: width,
        backgroundColor: "blue",
        padding: 0,
        margin: 0
      }}
    >
      {type === "image" ? (
        <Image
          source={{
            uri: postImage,
          }}
          style={{
            objectFit: "cover",
            width: width,
            height: "100%",
            flex: 1,
            resizeMode: "contain"
          }}
        />
      ) : (
        <Video source={{ uri: postImage }} controls={false} />
      )}
    </View>
  )
}
const PostHeader = ({ username, date, userpic }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
        <Image
          style={{ width: 35, height: 35, borderRadius: 40 }}
          source={{
            uri: userpic
          }}
        />
        <Text style={{ fontWeight: 700 }}>{username}</Text>
      </View>
      <Text style={{ color: "black", fontWeight: "900" }}>...</Text>
      {/* <Ionicons name="dots" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 0.7,
    justifyContent: "center"
  }
})
export default Post
