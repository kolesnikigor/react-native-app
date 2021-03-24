import React from "react";
import {SafeAreaView, Text, Image, StyleSheet} from "react-native";
import {useRoute, RouteProp} from "@react-navigation/native";
import {Dimensions} from 'react-native';

import {IPhoto} from '../hooks/useGetPhotos'

type RootStackParamList = {
  Modal: { photo: IPhoto };
};

type DetailedPhotoRouteProp = RouteProp<RootStackParamList, "Modal">;

const squareSide = Dimensions.get('window').width;

export const Modal = () => {
  const route = useRoute<DetailedPhotoRouteProp>();
  const photo = route.params?.photo;

  return (<SafeAreaView>
    <Text style={styles.title}>{photo?.title}</Text>
    <Image style={styles.image} source={{uri: photo?.url}}/>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24
  },
  image: {
    width: '100%',
    height: squareSide
  }
})
