import { useNavigation } from "@react-navigation/native";
import { data } from "../../data";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { StackNavigation } from "../../../App";
import { Recurring, Task } from "../../types/shared";

export default function AddTask() {
  const { navigate } = useNavigation<StackNavigation>();
  const [taskName, setTaskName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  function handleAddTask(taskName: string) {
    const newTask: Task = {
      id: "123",
      name: taskName,
      assignee: "mom",
      dueDate: 2,
      createdDate: 2,
      timeAllowance: 2,
      completed: false,
      recurring: Recurring.DAILY,
    };
    data.push(newTask);
    navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task name</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <Text style={styles.label}>List</Text>
      <TextInput style={styles.input} placeholder="List" />
      <Text style={styles.label}>Due date</Text>
      <TextInput style={styles.input} placeholder="Due date" />
      <View style={styles.reminderContainer}>
        <Text style={styles.label}>Reminder</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleAddTask(taskName)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleAddTask(taskName)}
          disabled={taskName.length === 0}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 4,
    paddingRight: 4,
  },
  reminderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10,
  },
  label: {
    padding: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    alignSelf: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 4,
    width: "95%",
  },
  loginButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: "30%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
