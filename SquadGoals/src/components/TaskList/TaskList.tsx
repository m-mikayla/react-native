import React, { useEffect } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";

import { Task } from "../../types/shared";
import TaskItem from "../TaskItem/TaskItem";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <TaskItem task={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    width: "100%",
  },
});
