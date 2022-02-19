import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, KeyboardAvoidingView, TextInput, Platform, StyleSheet, Text, View } from 'react-native';
import Task from "./components/task";

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
            <Task text={"Task one"} />
            <Task text={"Task two"} />
        </View>


      </View>
      {/* Write a task */}
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTaskWraper}>
        <TextInput style={styles.input} placeholder={"Write a task :)"} />

        <TouchableOpacity>
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

  writeTaskWraper: {},

  input: {},

  addWrapper: {},
  
  addText: {},

});
