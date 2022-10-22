import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import type {RecipeItem} from '../utils/types';

type Props = {
  item: RecipeItem;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const CategoryCard: React.FC<Props> = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.gray2,
          padding: SIZES.base,
        },
        containerStyle,
      ]}
      onPress={onPress}>
      {/* Image */}
      <Image
        resizeMode="cover"
        source={item.image}
        style={{width: 80, height: 80, borderRadius: SIZES.radius}}
      />
      {/* Info */}
      <View
        style={{
          width: '65%',
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Category Name */}
        <Text style={{flex: 1, ...FONTS.h3}}>{item.name}</Text>

        {/* Category Servings */}
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>
          {item.duration} | {item.serving} serving
        </Text>
      </View>

      {/* Other */}
    </TouchableOpacity>
  );
};

export default CategoryCard;
