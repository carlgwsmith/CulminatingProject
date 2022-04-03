import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import PayOffHome from '../screens/PayoffCalc/InitialInput';
import PayOffResults from '../screens/PayoffCalc/PayOffResults'
import ExtraPayment from "../screens/PayoffCalc/ExtraPayment";
import HomeHeader from "../shared/homeHeader";
import CalcHeader from "../shared/calcHeader";
import React from "react";
import BackButton from "../shared/backButton";


const screens = {
  Home: {
    screen: Home,
    navigationOptions:{
      headerTitle: () => <HomeHeader/>,
      headerStyle: {
        height: 215,
        backgroundColor: '#41CC89',
      },
    }
  },
  MortgagePayOffCalc:{
    screen: PayOffHome,
    navigationOptions: {
      headerTitle: () => <CalcHeader/>,
      // headerLeft: () => <BackButton />,
      headerStyle:{
        height: 170,
        backgroundColor: '#41CC89',
      }
    }
  },
  ExtraPayment:{
    screen: ExtraPayment
  },
  PayOffResults: {
    screen: PayOffResults
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#41CC89',
      height:120
    }
  }
});

export default createAppContainer(HomeStack);