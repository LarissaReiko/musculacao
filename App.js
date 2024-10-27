import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen/HomeScreen';
import CadastroExercicioScreen from './screens/cadastroExercicioScreen/CadastroExercicioScreen';
import DiaSemana from './screens/dia_semana/DiaSemana';


export default function App() {
  const Tab = createBottomTabNavigator();


  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cronograma de treino" component={HomeScreen} />
        <Tab.Screen name="Cadastro de Exercícios" component={CadastroExercicioScreen} />
        <Tab.Screen name="Cadastro de cronograma" component={DiaSemana}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
