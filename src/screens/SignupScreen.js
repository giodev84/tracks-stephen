import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import { theme } from "../constants/index";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);

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
        <Button title="Sign up" onPress={() => signup({ email, password })} />
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
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : null,
    // marginTop: theme.spacing.sm,
  },
  inputSeparator: {
    margin: theme.spacing.sm,
  },
});

export default SignupScreen;
