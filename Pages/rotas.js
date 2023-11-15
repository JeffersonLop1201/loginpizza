import {createStackNavigator} from '@react-navigation/stack';

import Rotastab from './RotasTab';
import Login from './Login';
import Pizza1 from './pizza1';
import Pizza2 from './pizza2';



const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <Stack.Navigator>
      <Stack.Screen name ='Login' component={Login} options={{headerShown:false, title:'Login'}}/>
      <Stack.Screen name = 'Home' component={Rotastab} options={{headerShown:false, title:'Home'}}/>
     <Stack.Screen name ='pizza1' component={Pizza1} options={{headerShown:false, title:'Login'}}/>
      <Stack.Screen name = 'pizza2' component={Pizza2} options={{headerShown:false, title:'Home'}}/>
    </Stack.Navigator>
  );
}