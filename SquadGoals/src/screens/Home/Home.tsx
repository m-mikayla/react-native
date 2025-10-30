import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../App";
import useTasks from "../../hooks/useTasks";
import TaskList from "../../components/TaskList/TaskList";
import Feather from "@expo/vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Task } from "../../types/shared";

export default function Entry() {
  const { navigate } = useNavigation<StackNavigation>();
  const { tasks, isLoading, error } = useTasks();
  const [search, setSearch] = useState("");

  const filteredItems = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddTask = () => {
    navigate("Add task");
  };

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
      <View style={styles.textContainer}>
        <Text style={styles.header}>Tasks</Text>
        <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9ca3af" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#9ca3af"
        />
      </View>
      <TaskList tasks={filteredItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  header: {
    color: "#772FFF",
    fontWeight: "bold",
    fontSize: 24,
  },
  addTaskButton: {
    backgroundColor: "#fafafa",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    margin: 10,
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
});
