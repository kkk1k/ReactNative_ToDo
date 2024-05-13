import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

function Detail({ navigation }) {
  return (
    <WebView source={{ uri: "https://www.google.com" }} style={{ flex: 1 }} />
  );
}

export default Detail;
