import { SafeAreaView,View, Text, } from 'react-native'
import React, {useState,useEffect} from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import { ScrollView,StyleSheet, Platform, StatusBar } from "react-native";
import SearchBar from '../components/Home/SearchBar';
import Categories from '../components/Home/Categories';
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/Home/BottomTabs';

const YELP_API_KEY = "xydeefGPN1nWKSzTGXGrYLNZA5boBXcqI21_yOJuiyE_mv2A860-a8eWe237dflTK159tCtox7iDt5iXs_krEXyoKw2rhUuK-D2gPzj1MqDjsm_TpPq3OA24PEiHYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  
  return (
    <SafeAreaView style={{backgroundColor: "#eee",paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex:1}}>
        <View style={{
            backgroundColor: "white",
            padding:15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            <RestaurantItems restaurantData={restaurantData}   />
        </ScrollView>
        <Divider width={1}/>
        <BottomTabs/>
    </SafeAreaView>
  )
}