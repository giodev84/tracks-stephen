import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "react-native-elements";
import { theme } from "../constants/index";

const NavLink = ({ linkText, onNavigate }) => {
  return (
    <TouchableOpacity onPress={() => onNavigate()}>
      <Text style={styles.link}>{linkText}</Text>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  link: {
    color: theme.colors.primary,
  },
});

// Alternative version withNavigation
// import { withNavigation } from 'react-navigation';

// const NavLink = ({ navigation, text, routeName }) => {
//   return (
//     <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
//         ...
//     </TouchableOpacity>
//   );
// };

// export default withNavigation(NavLink);
