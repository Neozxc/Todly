import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, KeyboardAvoidingView, TextInput, Platform, StyleSheet, Text, View, Keyboard, Touchable } from 'react-native';
import Task from "./components/task";
import React, { useState } from "react";

export default function App() {
  // useState
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // If we are running on live mobile
    // This will hide keyboard after input
    Keyboard.dismiss();
    // Whatever was in taskItems array
    // Task appends to it
    setTaskItems([...taskItems, task]);
    // Clear the input area
    setTask(null);
    // console.log(task);
  };

  const completedTask = (index) => {
    let itemsCopy = [...taskItems];
    // Remove one item from the array
    // And store back to itemsCopy
    itemsCopy.splice(index, 1);
    // Set taskItems to the itemsCopy
    // And dont include the one we deleted
    setTaskItems(itemsCopy);
  };
 

  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return <TouchableOpacity key={index} onPress={() => completedTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
            })
          }
            {/* <Task text={"Task one"} />
            <Task text={"Task two"} /> */}
        </View>


      </View>
      {/* Write a task */}
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTaskWraper}>
        <TextInput style={styles.input} placeholder={"Write a task :)"} value={task} onChangeText={text => setTask(text)} />

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
    backgroundColor: '#e7eaed',
  },

  tasksWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  items: {
    marginTop: 30
  },

  writeTaskWraper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },

  addText: {},

});
