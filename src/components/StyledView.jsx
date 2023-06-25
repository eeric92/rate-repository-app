import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
  },
  justifyContentSpaceAround: {
    justifyContent: "space-around",
  },
});

export default function StyledView({
  children,
  flexDirection,
  justifyContent,
  ...restOfProps
}) {
  const viewStyles = [
    flexDirection === "row" && styles.flexDirectionRow,
    justifyContent === "space-around" && styles.justifyContentSpaceAround,
  ];

  return (
    <View style={viewStyles} {...restOfProps}>
      {children}
    </View>
  );
}
