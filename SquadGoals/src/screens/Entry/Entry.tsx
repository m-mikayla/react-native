import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../App";

export default function Entry() {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Squad Goals</Text>
      <Text style={styles.description}>
        Efficiently manage your bills and tasks with our easy-to-use app
      </Text>

      <Button title="Get Started!" onPress={() => navigate("Login")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#772FFF",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },
  description: {
    color: "#772FFF",
    fontSize: 18,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
  },
  image: {
    width: 350, // Set your desired width
    height: 350, // Set your desired height
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  button: {
    backgroundColor: "#8B9696", // Button background color
    padding: 10,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    color: "#fff", // Button text color
    textAlign: "center",
    fontWeight: "bold",
  },
});
