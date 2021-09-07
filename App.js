import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTasks = () => {
    console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  
  <View style={styles.container}>

      {/* Today's Tasks */}
      <View styles={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
                  <Task jakol = {item}/>
                </TouchableOpacity>
              )
            })


          }
        </View>
      </View>

      {/* Adding goes here Tasks */}
      
      <KeyboardAvoidingView 
      behavior = {Platform.OS === "ios" ? "padding" : "height"}
      style = {styles.writeTaskWrapper}>

        <TextInput style = {styles.input}
        value = {task}
        placeholder = {'Write a task'} 
        onChangeText = {text => setTask(text)}/>

        <TouchableOpacity onPress = {() => handleAddTasks()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
      
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 10
  },

  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50
  },
  
  items:{
    marginTop: 30,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  },

  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText:{

  },

});
