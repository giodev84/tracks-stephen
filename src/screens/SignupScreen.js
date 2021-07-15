import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
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
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign up" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.link}>Already have an account? Go to Sign in</Text>
      </TouchableOpacity>
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
    marginHorizontal: theme.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.xxxl,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : null,
    // marginTop: theme.spacing.sm,
  },
  inputSeparator: {
    margin: theme.spacing.sm,
  },
  errorMessage: {
    color: theme.colors.danger,
  },
  link: {
    color: theme.colors.primary,
  },
});

export default SignupScreen;
