import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, modalState, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const onClickAdd = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={modalState} animationType='slide' >
            <View style={styles.textInputView}>
                <TextInput
                    placeholder='Enter your goals...'
                    style={styles.textInput}
                    onChangeText={(e) => setEnteredGoal(e)}
                    value={enteredGoal}
                />
                <View style={styles.buttonView}>
                    <View style={styles.button}>
                        <Button title='Add' onPress={onClickAdd} />
                    </View>
                    <View>
                        <Button title='Cancel' color='red' onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        margin: 10,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button: {
        width: '40%',
    }
});

export default GoalInput;

