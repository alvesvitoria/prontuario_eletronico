import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import Home from './screens/Home';
import Profile from './screens/Profile';
import LoginUsers from './screens/LoginUsers';
import SignupUsers from "./screens/SignupUsers";
import Reports from "./screens/Reports";
import CreatePersonal from './screens/CreatePersonal';
import AlergiaList from "./screens/TopicsScreeans/AlergiaList";
import CreateAlergias from "./screens/TopicsScreeans/CreateAlergias";
import VacinaList from "./screens/TopicsScreeans/VacinaList";
import CreateVacina from "./screens/TopicsScreeans/CreateVacina";
import CreateMedicamento from "./screens/TopicsScreeans/CreateMedicamento";
import MedicamentoList from "./screens/TopicsScreeans/MedicamentoList";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Tabs () {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#808080',
        style: { //Adição do style
          backgroundColor: '#48D1CC', // Aplicando a cor ao background
        }
      }}
  
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Reports" component={Reports}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
}



export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#48D1CC',
            }
          }}
        >
          <Stack.Screen
            name="LoginUsers"
            component={LoginUsers}
            options={{ headerShown: false, title: " "}}
          />
          <Stack.Screen
            name="SignupUsers"
            component={SignupUsers}
            options={{ headerShown: false, title: " "}}
          />
          <Stack.Screen
            name="CreatePersonal"
            component={CreatePersonal}
            options={{ headerShown: false, title: " "}}
          />
          <Stack.Screen
            name="CreateAlergias"
            component={CreateAlergias}
            options={{ title: " "}}
          />
          <Stack.Screen
            name="AlergiaList"
            component={AlergiaList}
            options={{ title: " "}}
          />
          <Stack.Screen
            name="CreateVacina"
            component={CreateVacina}
            options={{ title: " "}}
          />
          <Stack.Screen
            name="VacinaList"
            component={VacinaList}
            options={{ title: " "}}
          />
          <Stack.Screen
            name="CreateMedicamento"
            component={CreateMedicamento}
            options={{ title: " "}}
          />
          <Stack.Screen
            name="MedicamentoList"
            component={MedicamentoList}
            options={{ title: " "}}
          />
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{ headerShown: false, title: " "}}
          />
          <Stack.Screen
            name="Profile"
            component={Tabs}
            options={{headerShown: false, title: "Dados Pessoais" }}
          />
          <Stack.Screen
            name="Reports"
            component={Tabs}
            options={{ headerShown: false, title: "Relatórios"}}
          />
        </Stack.Navigator>
    </NavigationContainer>      
    )
}


