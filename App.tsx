import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import  styles  from "./src/screens/Home/styles"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <Text style={styles.subtitle}>Adicione suas atividades a lista de tarefas</Text>
      <StatusBar style="auto" />
      <View style={styles.inputwrapper}>
        <TextInput style={styles.inputAdicionar}>

        </TextInput>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasks}>
          <Text style={styles.tasks}>Tarefas Pendentes</Text>
      </View>
      <View style={styles.emptylist}>
        <Text style={styles.emptylistext}>
          Realizou todas as tarefas? Adicione tarefas a sua lista de pendências.
        </Text>
      </View>
    </View>
  );
}

