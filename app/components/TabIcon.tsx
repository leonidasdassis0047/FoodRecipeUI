import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {COLORS} from '../constants';

type TabIconProps = {
  icon: ImageSourcePropType;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({focused, icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: '80%',
      }}>
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />

      {focused && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 6,
            width: '90%',
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            backgroundColor: COLORS.darkGreen,
          }}
        />
      )}
    </View>
  );
};

export default TabIcon;
