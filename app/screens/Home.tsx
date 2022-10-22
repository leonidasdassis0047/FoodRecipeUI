import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CategoryCard, TrendingCard} from '../components';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';
import {TabParamList} from '../navigation/Tabs';

type HomeScreenProps = NativeStackScreenProps<TabParamList, 'Home'> & {};

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  // Render Header ****************************************************************
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        {/* Text */}
        <View style={{flex: 1}}>
          <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>
            Hello, FlamingStreamz
          </Text>
          <Text style={{color: COLORS.gray, marginTop: 4, ...FONTS.body3}}>
            What do yuo wish to cook today?
          </Text>
        </View>

        {/* Profile image */}
        <TouchableOpacity
          onPress={() => {
            console.log('profile');
          }}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: SIZES.radius,
          }}>
          <Image
            source={images.profile}
            style={{
              height: 40,
              width: 40,
              borderRadius: SIZES.padding * 3,
              backgroundColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  // Render SearchBar ***************************************************************
  const renderSearchbar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray,
        }}>
        {/* Search icon */}
        <Image
          source={icons.search}
          style={{height: 20, width: 20, tintColor: COLORS.gray}}
        />

        {/* TextInput */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.base,
            ...FONTS.body3,
            fontSize: 16,
          }}
          placeholder="search recipes"
          placeholderTextColor={COLORS.gray}
        />
      </View>
    );
  };

  // Render SeeRecipe *************************************************************
  const renderSeeRecipeCard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGreen,
        }}>
        {/* Image */}
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={images.recipe} style={{width: 80, height: 80}} />
        </View>

        {/* Text */}
        <View style={{flex: 1, paddingVertical: SIZES.radius}}>
          <Text style={{width: '70%', ...FONTS.h4, lineHeight: 20}}>
            You have 12 recipes you haven't tried yet
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log('See Recipes');
            }}
            style={{marginTop: SIZES.padding}}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // Render Trending Recipes *****************************************************
  const renderTrendingSection = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.h2, marginHorizontal: SIZES.padding}}>
          Trending Recipes
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `trending-${item.id}-${index}`}
          renderItem={({item, index}) => {
            return (
              <TrendingCard
                item={item}
                onPress={() => {
                  navigation.navigate('Recipe', {recipe: item});
                }}
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 0,
                  marginRight:
                    index !== dummyData.trendingRecipes.length - 1
                      ? SIZES.radius
                      : SIZES.padding,
                }}
              />
            );
          }}
        />
      </View>
    );
  };

  const renderCategoryHeader = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}>
        <Text style={{...FONTS.h2, flex: 1}}>Categories</Text>
        <TouchableOpacity>
          <Text style={{...FONTS.body4, color: COLORS.gray}}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={COLORS.white}
      />
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item, index) => `categories-${item.id}-${index}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}

            {/* Searchbar */}
            {renderSearchbar()}

            {/* See Recipe Card */}
            {renderSeeRecipeCard()}

            {/* Trending Recipes */}
            {renderTrendingSection()}

            {/* Categories */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              item={item}
              onPress={() => {
                navigation.navigate('Recipe', {recipe: item});
              }}
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
            />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
    </View>
  );
};

export default Home;
