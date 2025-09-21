import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../App";
import useTasks from "../../hooks/useTasks";
import TaskList from "../../components/TaskList/TaskList";

export default function Entry() {
  const { navigate } = useNavigation<StackNavigation>();
  const { tasks, isLoading, error } = useTasks();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading.....</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error occurred!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks</Text>
      <TaskList tasks={tasks} />
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
});
