import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'

const LoginForm = () => {
  return (
    <View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Phone number, username of email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          auto={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>

      <Button title="Log in" />
    </View>
  )
}

const styles = StyleSheet.create({})

export default LoginForm
