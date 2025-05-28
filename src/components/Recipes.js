import MasonryList from "@react-native-seoul/masonry-list";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import {
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Loading from "./Loading";
import RacipesCard from './RacipesCard';

const Recipes = ({meals,categories}) => {
    const navigation = useNavigation()
  return (
     <View
      className="mx-4 space-y-4"
    //   entering={FadeInDown.delay(200).duration(700).springify().damping(12)}
    >
      <Text
        style={{
          fontSize: hp(2),
        }}
        className="font-semibold text-neutral-600"
      >
        {meals.length} Recipes
      </Text>

      <View
        // entering={FadeInDown.delay(200).duration(700).springify().damping(12)}
>
        {categories.length == 0 || meals.length == 0 ? (
          <Loading size="large" className="mt-20" />
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <RacipesCard item={item} index={i} navigation={navigation} />
            )}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}

export default Recipes