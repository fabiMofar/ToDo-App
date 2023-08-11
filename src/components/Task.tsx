import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface TaskProps {
  description: String;
  onComplete: () => void;
}
const Task: React.FC<TaskProps> = ({description, onComplete}: TaskProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{description}</Text>
      </View>
      <TouchableOpacity onPress={onComplete}>
        <Text style={styles.btn}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#33e1ed',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  btn: {
    color: 'red',
  },
});

export default Task;
