
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './Pages/rotas';
import Rotastab from './Pages/RotasTab';

export default function App() {
 
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}

export function Home(){
  return(
    <NavigationContainer>
    <Rotastab />
    </NavigationContainer>
  );
}