import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [openModal, setModalOpen] = useState(false);
  const onAddHandler = (enteredGoal) => {
    setGoalsList(currentGoal => [...goalsList, { id: Math.random(), text: enteredGoal }]);
    setModalOpen(false);
  }
  const onCancelHandler = () => setModalOpen(false);

  const onDeleteHandler = (id) => {
    setGoalsList(currentList => currentList.filter((item) => item.id != id))
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title='Add new goals!!' onPress={() => setModalOpen(true)} />
      <GoalInput onAddGoal={onAddHandler} modalState={openModal} onCancel={onCancelHandler}/>
      <View>
        <FlatList
          data={goalsList}
          renderItem={goal => <GoalItem goal={goal.item} onDeleteGoal={onDeleteHandler} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
