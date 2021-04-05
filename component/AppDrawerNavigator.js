import React from "react";
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./AppTabNavigator";
import CustomSideBarMenu from "./customSideBarMenu";
import SettingScreen from "../screens/settingScreen";
import MyDonations from "../screens/myDonation"

export const AppDrawerNavigator = createDrawerNavigator({
   
    Home : {
        screen:AppTabNavigator
    },

    Settings : {

        screen:SettingScreen
    },

    Donations : {
        screen : MyDonations
    }

 },

 {
    contentComponent : CustomSideBarMenu
 },
 
 {
     initialRouteName : "Home" 
 }


)