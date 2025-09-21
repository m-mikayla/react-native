import { useState, useEffect } from "react";
import data from "../data.json";
import { Recurring, Task } from "../types/shared";
import uuid from "react-native-uuid";

function parseTasks(tasks: any) {
  let parsedTasks: Task[] = [];
  tasks.forEach((task: any) => {
    const newUuid = uuid.v4(); // Generates a version 4 UUID

    let item: Task = {
      id: newUuid,
      name: task.name,
      assignee: task.assignee,
      dueDate: task.dueDate,
      createdDate: task.createdDate,
      timeAllowance: task.timeAllowance,
      completed: task.completed,
      recurring: task.recurring,
    };
    parsedTasks.push(item);
  });
  return parsedTasks;
}

export default function useTasks() {
  const taskData = data;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    try {
      const parsed = parseTasks(taskData);
      setTasks(parsed);
      setIsLoading(false);
    } catch (e) {
      setError(true);
      setIsLoading(false);
    }
  }, [taskData]); // dependency array — update when taskData changes

  return {
    isLoading,
    error,
    tasks,
  };
}
