import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-field/144/ffffff/home',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-field/500/ffffff/search',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-field/144/ffffff/instagram',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home',
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/fluency-systems-field/144/ffffff/home',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home',
  },
]

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  icon: {
    width: 30,
    height: 30,
  },
})

export default BottomTabs
