import React, { useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-elements";
import { theme } from "../constants/index";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText="Sign Up"
      />
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
  link: {
    color: theme.colors.primary,
  },
});

export default SignupScreen;
