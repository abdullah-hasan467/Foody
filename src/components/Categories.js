import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Categories = ({activeCategory, handleChangeCategory, categories}) => {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >

        {
            categories.map((category, index) => {
                let isActive = category.strCategory == activeCategory;
                let activeButtonclass = isActive ? "bg-[#f64e32]" : "bg-white"
                
                
                return(
                    <TouchableOpacity key={index}
                    onPress={ () =>{
                        handleChangeCategory (category.strCategory)
                        const items= category.strCategory
                        
                    }} className="flex ites-center space-y-1">
                        <View className={"rounded-xl p-[10px] space-x-2 mt-5 " + activeButtonclass}>
                <Image
                  source={{
                    uri: category.strCategoryThumb,
                  }}
                  style={{
                    width: hp(6),
                    height: hp(6),
                  }}
                  className="rounded-full"
                />
                <Text className="text-black ml-3" >
                    {category.strCategory}

                </Text>
              </View>
                    </TouchableOpacity>
                )

            }
            )
        }

    </ScrollView>
  )
}

export default Categories