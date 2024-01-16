import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';
import PortfolioScreen from './components/Portofolio';

// Komponen Layar Login
<LoginScreen/>,
// Komponen Layar Register
<RegisterScreen/>,

// Komponen Layar Portfolio
<PortfolioScreen/>

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false}} >
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

