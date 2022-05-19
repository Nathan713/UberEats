import { Image,View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
  return (
    <View>
      {/* Restaurant Image */}
        <RestaurantImage/>
    </View>
  )
}



const RestaurantImage = (props) => (
    <>
      <Image
        source={{
          uri: "https://static.onecms.io/wp-content/uploads/sites/9/2022/01/26/McDonalds-Hacks-Menu-FT-1-BLOG0122.jpg",
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
