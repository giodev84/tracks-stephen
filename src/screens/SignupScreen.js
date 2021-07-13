import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import { theme } from "../constants/index";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up Page</Text>
      </Spacer>
      <Input placeholder="Email" label="Email" />
      <Spacer style={styles.inputSeparator} />
      <Input placeholder="Password" label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.xxxl * 1.5,
  },
  inputSeparator: {
    margin: theme.spacing.sm,
  },
});

export default SignupScreen;
