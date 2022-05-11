import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LaManuText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.Message}>Ma première application à la Manu</Text>
      </Text>
    </View>
  );
};
export default LaManuText;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 300,
    padding: 20,
  },
  Message: {
    color: "black",
    fontSize: 20,
  },
});
