import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PayOffHome from '../screens/PayoffCalc/InitialInput';
import PayOffResults from '../screens/PayoffCalc/PayOffResults'
import MonthlyMortgageHome from '../screens/MonthlyMortgage/InitialInput'
import MonthlyResults from '../screens/MonthlyMortgage/MonthlyResults'
import HomeHeader from "../shared/homeHeader";
import CalcHeader from "../shared/calcHeader";
import MonthlyRateHead from '../shared/MonthlyRateHead';
import MonthlyResultHead from '../shared/monthlyResultHead';
import AffordabilityInput from '../screens/Affordability/AffordabilityInput';
import AffordabiltyHeader from '../shared/AffordabilityHead'
import GlossaryHead from '../shared/glossaryHeader';
import { CommonActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../shared/backButton';
import Glossary from '../screens/Glossary/Glossary';

const Stack = createStackNavigator();
const StackScreen = () => {
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="PayOffHome" component={PayOffHome}/>
    <Stack.Screen name="PayOffResults" component={PayOffResults}/>
    <Stack.Screen name="MonthlyMortgageHome" component={MonthlyMortgageHome}/>
    <Stack.Screen name="MonthlyResults" component={MonthlyResults}/>
    <Stack.Screen name="Glossary" component={Glossary}/>
  </Stack.Navigator>
};


const navigation = ({navigation}) => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: { elevation: 0, shadowOpacity: 0 },
      cardStyle: { backgroundColor: '#fff' }
  }}
    >
     <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <HomeHeader {...props}/>,
          headerStyle: {
            height: 215,
            backgroundColor: '#41CC89',
          },
        }}
        />
        <Stack.Screen
        name="MortgagePayOffCalc"
        component={PayOffHome}
        options={{
          headerTitle: props => <CalcHeader {...props}/>,
          headerStyle:{
            height: 170,
            backgroundColor: '#41CC89',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: props => <BackButton {...props}/>,
        }}/>
        <Stack.Screen
        name="MonthlyMortgageCalc"
        component={MonthlyMortgageHome}
        options={{
          headerTitle: props => <MonthlyRateHead {...props}/>,
          headerStyle:{
            height: 170,
            backgroundColor: '#41CC89',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: props => <BackButton {...props}/>,
        }}/>
        <Stack.Screen
        name="AffordabilityCalc"
        component={AffordabilityInput}
        options={{
          headerTitle: props => <AffordabiltyHeader {...props}/>,
          headerStyle:{
            height: 170,
            backgroundColor: '#41CC89',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: props => <BackButton {...props}/>,
        }}/>
        <Stack.Screen
        name="PayOffResults"
        component={PayOffResults}
        options={{
          headerTitle: props => <CalcHeader {...props}/>,
          headerStyle:{
            height: 170,
            backgroundColor: '#41CC89',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: props => <BackButton {...props}/>,
        }}/>
        <Stack.Screen
        name="MonthlyResults"
        component={MonthlyResults}
        options={{
          headerTitle: props => <MonthlyResultHead {...props}/>,
          headerStyle:{
            height: 130,
            backgroundColor: '#41CC89',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: props => <BackButton {...props}/>,
        }}/>
        <Stack.Screen
        name="Glossary"
        component={Glossary}
        options={{
          headerTitle: props => <GlossaryHead {...props}/>,
          headerStyle:{
            height: 130,
            backgroundColor: '#41CC89',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: props => <BackButton {...props}/>,
        }}/>
        
    </Stack.Navigator>
     </NavigationContainer>
  );
}

export default navigation;
