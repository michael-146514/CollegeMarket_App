import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const LoginPage = ({}) => {
  return (
    <View>
      <Text>Username:</Text>
      <TextInput style={styles.textInput} placeholder="Username" />
      <View>
        <Text>Password:</Text>
        <TextInput style={styles.textInput} placeholder="Password" />

        <TextInput />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  textInput: {
    textAlign: "left",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 100,
    paddingVertical: 10,
    fontSize: 15,
  },
});
