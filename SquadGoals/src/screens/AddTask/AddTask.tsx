import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import dayjs, { Dayjs } from "dayjs";
import DateTimePicker from "react-native-ui-datepicker";

export default function AddTask() {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState<Dayjs>(dayjs("2022-04-17"));
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)}>
        <Text>Due Date</Text>
        {showDatePicker && <DateTimePicker mode={"single"} />}
      </TouchableOpacity>

      <Text>Remind Me</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    color: "#772FFF",
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: "100%",
  },
});
