import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {RootStackParamList} from '../navigation/RootStack';
import {RecipeItem} from '../utils/types';

type RecipeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Recipe'
> & {};

const HEADER_HEIGHT = 340;

const RecipeCreatorCardInfo = ({recipe}: {recipe: RecipeItem}) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.transparentBlack9,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
        {/* Profile image */}
        <View style={{width: 40, height: 40, marginLeft: SIZES.radius}}>
          <Image
            source={recipe?.author?.profilePic}
            style={{width: 40, height: 40, borderRadius: 40}}
          />
        </View>

        {/* Labels */}
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.radius,
          }}>
          <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
            Recipe by:
          </Text>
          <Text style={{color: COLORS.white2, ...FONTS.h3}}>
            {recipe?.author?.name}
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => {
            console.log('navigate to author screen');
          }}
          style={{
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.radius,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: COLORS.lightGreen1,
          }}>
          <Image
            source={icons.rightArrow}
            style={{width: 15, height: 15, tintColor: COLORS.lightGreen1}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Recipe: React.FunctionComponent<RecipeScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState<null | RecipeItem>(
    null,
  );

  React.useEffect(() => {
    setSelectedRecipe(route.params.recipe);
  }, [route.params.recipe]);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  // Render Recipe card header *******************************************************
  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          overflow: 'hidden',
          marginTop: -1000,
          paddingTop: 1000,
        }}>
        {/* Image Background */}
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        {/* Recipe Creator Card */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          {/* Card Info */}
          <RecipeCreatorCardInfo recipe={selectedRecipe as RecipeItem} />
        </Animated.View>
      </View>
    );
  };

  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.base,
        }}>
        {/* Screen Overlay */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [-HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />

        {/* Headbar title */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text style={{color: COLORS.lightGray, ...FONTS.body4}}>
            Recipe by:
          </Text>
          <Text style={{color: COLORS.white2, ...FONTS.h3}}>
            {selectedRecipe?.author.name}
          </Text>
        </Animated.View>

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 34,
            width: 34,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}>
          <Image
            style={{width: 16, height: 16, tintColor: COLORS.lightGray}}
            source={icons.back}
          />
        </TouchableOpacity>

        {/* Bookmark Icon */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 34,
            width: 34,
          }}>
          <Image
            style={{width: 30, height: 30, tintColor: COLORS.darkGreen}}
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
          />
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
        translucent
        backgroundColor={COLORS.transparent}
        barStyle="light-content"
      />
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => `${item.id}-recipe`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderRecipeCardHeader()}
            {/* Info */}

            {/* Ingredient Title */}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                marginVertical: SIZES.base,
              }}>
              {/* Icon */}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  width: 50,
                  borderRadius: 6,
                  backgroundColor: COLORS.lightGray,
                }}>
                <Image source={item.icon} style={{height: 40, width: 40}} />
              </View>

              {/* Description */}
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: SIZES.padding,
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body3}}>{item.description}</Text>
              </View>

              {/* Quantity */}
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body3}}>{item.quantity}</Text>
              </View>
            </View>
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />

      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
