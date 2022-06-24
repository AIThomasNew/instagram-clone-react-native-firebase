import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* PostForm */}
    </View>
  )
}

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png',
        }}
        style={{ width: 30, height: 30 }}
      />
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 23,
  },
})

export default AddNewPost
