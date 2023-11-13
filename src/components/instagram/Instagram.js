import { View, Text, SafeAreaView, ScrollView } from "react-native"
import React from "react"
import Header from "./Header"
import Stories from "./Stories"
import Post from "./Post"
import { userposts } from "../../utils/userposts"
const Instagram = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Stories />
        {userposts.map((item, index) => {
          return <Post post={item} key={index} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Instagram
