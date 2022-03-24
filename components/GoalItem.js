import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';

const GoalItem = ({ goal, onDeleteGoal }) => (
    <TouchableOpacity onPress={() => onDeleteGoal(goal.id)}>

        <View style={styles.listItem} key={goal.id}>
            <Text>{goal.text}</Text>
        </View>
    </TouchableOpacity>

)

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'pink',
        padding: 10,
        marginBottom: 10,
        borderColor: 'green',
        borderWidth: 1
    }
});

export default GoalItem;

