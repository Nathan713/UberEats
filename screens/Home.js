import { SafeAreaView,View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { ScrollView,StyleSheet, Platform, StatusBar } from "react-native";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "#eee",paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex:1}}>
        <View style={{
            backgroundColor: "white",
            padding:15}}>
            <HeaderTabs/>
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            <RestaurantItem />
        </ScrollView>
        
      
    </SafeAreaView>
  )
}