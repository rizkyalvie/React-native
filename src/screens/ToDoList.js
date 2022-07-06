import { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FlatList } from "native-base";
import Task from "../components/Task";
import { API } from "../config/api";

export default function Todos() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const childToParent = () => {
    getTasks();
    console.log("KE TRIGGER");
  };

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await API.get("/todolist");
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function _renderTask({ item }) {
    return <Task text={item.name} id={item._id} childToParent={childToParent} />;
  }

  const handleAddTask = async () => {
    if (task.length !== 0) {
      try {
        let data = {
          name: task,
        };
        data = JSON.stringify(data);
        console.log(data);
        const response = await API.post("/todolist", data);
        console.log(response);
        getTasks();
        setTask("");
      } catch (error) {
        console.log(error);
      }
    } else {
      return Alert.alert("Failed adding task!", "Please fill the task form", [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Today Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To Do Lists</Text>
        <View style={{width: "100%", height: 5, backgroundColor: "white"}}></View>
        {/* Task */}
        <View style={styles.items}>
          <FlatList data={tasks} renderItem={_renderTask} keyExtractor={(item) => item._id} refreshing={isLoading} onRefresh={getTasks} />
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={(text) => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
  },
  tasksWrapper: {
    paddingHorizontal: 24,
    paddingTop: 80,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  items: {
    marginTop: 16,
    height: 620
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    marginLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "70%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginRight: 20,
  },
  addText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});