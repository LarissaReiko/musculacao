import { StatusBar } from 'expo-status-bar';
import CadastroExercicioScreen from './screens/cadastroExercicioScreen/CadastroExercicioScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const Tab = createBottomTabNavigator();


  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen   name="Cadastro de Exercícios" component={CadastroExercicioScreen} />
        
        {/*<Tab.Screen name="Tela Thiago" component={tela2} />
        <Tab.Screen name="Tela Pamella" component={tela3}/> */}
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
