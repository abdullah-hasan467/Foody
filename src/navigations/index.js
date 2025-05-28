import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Welcome from '../Screens/Welcome';


const Stack = createNativeStackNavigator();


export const AppNavigation = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Home'
        screenOption ={{
            headerShown:false
        }}
        >
            <Stack.Screen name="Home" component = {Home} options={{headerShown:false}} />
            <Stack.Screen name="Welcome" component = {Welcome} options={{headerShown:false}} />
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

