import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Task } from "../../types/shared";

interface TaskItemProps {
  task: Task;
}

const toggleTask = (task: Task) => {
  task.completed = !task.completed;
};

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <View style={styles.taskItem}>
      <View style={styles.taskLeft}>
        <TouchableOpacity
          style={[styles.checkbox, task.completed && styles.checkboxChecked]}
          onPress={() => toggleTask(task)}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={[styles.taskText, task.completed && styles.taskDone]}>
          {task.name}
        </Text>
      </View>
      {task.assigneePicture && (
        <Image source={{ uri: task.assigneePicture }} style={styles.avatar} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  taskLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  checkmark: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskText: {
    fontSize: 16,
    color: "#111827",
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
