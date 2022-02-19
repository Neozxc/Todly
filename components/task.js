import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const task = (props) => {
  return (
      <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
          </View>
          <View style={styles.circle}></View>
      </View>
  )
}

const styles = StyleSheet.create({
    item: {},

    itemLeft: {},

    square: {},

    itemText: {},
    
    circle: {},
});

export default task;