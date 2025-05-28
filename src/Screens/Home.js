import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import {
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Categories from '../components/Categories';
import Recipes from "../components/Recipes";

// 



 const Home = () => {
  const [activeCategory, setActiveCategory] = useState("")
  const [categories,setCategories] = useState("")
  const [meals,setMeals] = useState([])

useEffect(()=>{
  getCategories()
  getRecipes()
},[])
const getCategories = async () =>{
  try{
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )
    if( response && response.data){
      setCategories(response.data.categories)
      // console.log(response.data.categories)
    }
    

  }catch(error){
console.log(error.message)
  }
}

  const handleChangeCategory = (categories) =>{
    getRecipes(categories);
    setActiveCategory(categories)
    setMeals([])
  } 

  const getRecipes = async (category = "beef") =>{
    try{
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data) {
        setMeals(response.data.meals);
        // console.log(response.data.meal)
      }

    }catch(error){
      
    }
  }
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark' />
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50,}}
      className="space-y-6 pt-14">

        <View className="mx-4 flex-row justify-between items-center">
            <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"} />
            <Image
              source={require("../../assets/images/profile-pic (2).png")}
              style={{
                width: hp(5),
                height: hp(5),
                resizeMode: "cover",
              }}
              className="rounded-full"
            />
          </View>

           {/* Headlines */}
          <View className="mx-4 space-y-1 mb-2">
            <View>
              <Text
                style={{
                  fontSize: hp(3.5),
                }}
                className="font-bold text-neutral-800"
              >
                Fast & Delicious
              </Text>
            </View>

            <Text
              style={{
                fontSize: hp(3.5),
              }}
              className="font-extrabold text-neutral-800"
            >
              Food You <Text className="text-[#f64e32]">Love</Text>
            </Text>
          </View>

  {/* Search Bar */}
          <View className="mx-4 flex-row items-center border rounded-xl border-black p-[6px]">
            <View className="bg-white rounded-full p-2">
              <MagnifyingGlassIcon
                size={hp(2.5)}
                color={"gray"}
                strokeWidth={3}
              />
            </View>
            <TextInput
              placeholder="Search Your Favorite Food"
              placeholderTextColor={"gray"}
              style={{
                fontSize: hp(1.7),
              }}
              className="flex-1 text-base mb-1 pl-1 tracking-widest"
            />
          </View>

        {/* category */}
        {
          categories.length > 0 &&(
            <Categories activeCategory={activeCategory} categories={categories} handleChangeCategory={handleChangeCategory} />
          )
        } 

        <View>
          <Recipes meals = {meals} categories = {categories}  />

        </View>





      </ScrollView>
      
    </View>
  )
}

export default Home