import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationEvents } from "react-navigation";

import { theme } from "../constants/index";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        buttonText="Sign In"
      />
      <NavLink
        linkText="Don't have an account? Go to Sign up"
        onNavigate={() => navigation.navigate("Signup")}
      />
    </SafeAreaView>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
