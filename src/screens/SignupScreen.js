import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up Page</Text>
      <Input placeholder="Email" label="Email" />
      <Input placeholder="Password" label="Password" />
      <Button title="Sign Up" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
