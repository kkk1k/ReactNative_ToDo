import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { theme } from "./colors";

function Detail({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://www.iefield.com" }}
        style={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default Detail;
