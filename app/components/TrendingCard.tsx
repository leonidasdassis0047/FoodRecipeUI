import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import {COLORS, FONTS, icons, SIZES} from '../constants';
import type {RecipeItem} from '../utils/types';

const RecipeCardInfo = ({item}: {item: RecipeItem}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: '10%',
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.transparentDarkGray,
      }}>
      <View style={{flex: 1}}>
        {/* Name & bookmark */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={{width: '70%', color: COLORS.white, ...FONTS.h3}}>
            {item.name}
          </Text>

          <Image
            source={item.isBookmark ? icons.bookmarkFilled : icons.bookmark}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.darkGreen,
            }}
          />
        </View>

        {/* Duration */}
        <Text style={{color: COLORS.lightGray, ...FONTS.body4}}>
          {item.duration} | {item.serving} Serving
        </Text>
      </View>
    </View>
  );
};

type Props = {
  item: RecipeItem;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const TrendingCard: React.FC<Props> = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 340,
          width: 240,
          marginTop: SIZES.radius,
          alignItems: 'center',
        },
        containerStyle,
      ]}>
      {/* image */}
      <Image
        source={item.image}
        resizeMode="cover"
        style={{
          width: 240,
          height: 320,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Category */}
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 16,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 6,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h4}}>{item.category}</Text>
      </View>

      {/* Card Info */}
      <RecipeCardInfo item={item} />
    </TouchableOpacity>
  );
};

export default TrendingCard;
