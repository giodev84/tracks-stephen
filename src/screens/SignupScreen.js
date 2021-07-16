import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationEvents } from "react-navigation";

import { theme } from "../constants/index";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText="Sign Up"
      />
      <NavLink
        linkText="Already have an account? Go to Sign in"
        onNavigate={() => navigation.navigate("Signin")}
      />
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
  },
});

export default SignupScreen;
