import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import Pizza1 from './pizza1';
import Pizza2 from './pizza2';


const Tab = createBottomTabNavigator();

 export default function Rotastab(){

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Margherita" component={Pizza1} options={{
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="food-pizza" color={'darkblue'} size={30} />
      }} />
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={'gray'} size={30} />
      }} />
      <Tab.Screen name="Mussarela" component={Pizza2} options={{
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="food-fork-drink" color={'lightgreen'} size={30} />
      }} />
    </Tab.Navigator>
  );
}
