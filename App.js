import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Detail";
import ToDo from "./ToDo";
import { theme } from "./colors";
import Check from "./Check";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={ToDo} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Check" component={Check} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 스타일 시트에 전체 배경 색상을 정의합니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg, // 여기서 전체 배경색을 설정
  },
});

export default App;
