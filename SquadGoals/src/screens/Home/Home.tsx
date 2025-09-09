import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../App";

export default function Entry() {
  const { navigate } = useNavigation<StackNavigation>();

  const taskList = [
    {
      name: "Laundry",
      assignee: "Mikayla",
      completed: false,
      createdDate: "",
      dueDate: "Tomorrow",
    },
    {
      name: "Wipe down table",
      assignee: "Margo",
      completed: false,
      createdDate: "",
      dueDate: "Today",
    },
    {
      name: "Water plants",
      assignee: "Maxine",
      completed: false,
      createdDate: "",
      dueDate: "Today",
    },
    {
      name: "Check mail",
      assignee: "Maybree",
      completed: false,
      createdDate: "",
      dueDate: "Tomorrow",
    },
    {
      name: "Cuddles",
      assignee: "Kam",
      completed: false,
      createdDate: "",
      dueDate: "Tomorrow",
    },
    {
      name: "Get pool chemicals",
      assignee: "Jamie",
      completed: false,
      createdDate: "",
      dueDate: "Today",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks</Text>
      {taskList.map((task) => {
        return <Text key={task.name}>{task.name}</Text>;
      })}
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
