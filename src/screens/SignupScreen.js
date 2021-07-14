import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import { theme } from "../constants/index";
  


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h3>Sign up</Text>
      </Spacer>
      <Input
        placeholder="Email"
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer style={styles.inputSeparator} />
      <Input
        placeholder="Password"
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button title="Sign up" />
      </Spacer>
    </SafeAreaView>
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
    marginBottom: theme.spacing.xxxl,
    marginTop StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`
    // marginTop: theme.spacing.sm,
  },
  inputSeparator: {
    margin: theme.spacing.sm,
  },
});

export default SignupScreen;
