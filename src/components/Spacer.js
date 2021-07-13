import React from "react";
import { StyleSheet, View } from "react-native";

import { theme } from "../constants/index";

const Spacer = ({ children, style }) => {
  return <View style={{ ...styles.spacer, ...style }}>{children}</View>;
};

export default Spacer;

const styles = StyleSheet.create({
  spacer: {
    margin: theme.spacing.md,
  },
});
