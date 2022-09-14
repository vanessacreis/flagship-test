import React from "react";
import { useFsFlag } from "@flagship.io/react-native-sdk";
import { View, Text } from "react-native";

export const Square = () => {
  const flagBackgroundColor = useFsFlag("backgroundColor","green")
  return (
    <View
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: flagBackgroundColor.getValue(),
      }}
    >
      <Text>{"I'm a square with color=" + flagBackgroundColor.getValue()}</Text>
    </View>
  );
};