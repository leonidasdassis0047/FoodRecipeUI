import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';

import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, images, SIZES} from '../constants';
import {CustomButton} from '../components';

const Login = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Login'>) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '65%' : '60%',
        }}>
        <ImageBackground
          source={images.loginBackground}
          resizeMode="cover"
          style={{justifyContent: 'flex-end', flex: 1}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{
              justifyContent: 'flex-end',
              height: 200,
              paddingHorizontal: SIZES.padding,
            }}
            colors={[COLORS.transparent, COLORS.black]}>
            <Text
              style={{
                width: '80%',
                color: COLORS.white,
                ...FONTS.largeTitle,
                // lineHeight: 44,
              }}>
              Cooking Delicious Food easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetails = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.padding,
            width: '70%',
            color: COLORS.gray,
            ...FONTS.body3,
          }}>
          Discover more than 1000+ food recipes in your hands, and cooking
          easily
        </Text>

        {/* Buttons */}
        <View
          style={{flex: 1, justifyContent: 'center', marginTop: SIZES.padding}}>
          <CustomButton
            onPress={() => {
              navigation.navigate('HomeNavigation');
            }}
            buttonText="Log in"
            buttonContainerStyle={{
              paddingVertical: SIZES.base,
              borderRadius: SIZES.radius,
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
          />

          {/* Signup Button */}
          <CustomButton
            onPress={() => {
              navigation.navigate('HomeNavigation');
            }}
            buttonContainerStyle={{
              paddingVertical: SIZES.base,
              borderRadius: SIZES.radius,
              marginTop: SIZES.radius,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            buttonText="Sign up"
            // buttonTextStyle={{color: COLORS.white}}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.transparent}
        translucent
      />
      {/* Header */}
      {renderHeader()}

      {/* Details */}
      {renderDetails()}
    </View>
  );
};

export default Login;
