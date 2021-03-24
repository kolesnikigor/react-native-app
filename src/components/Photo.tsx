import React from "react";
import {StyleSheet, Image, TouchableHighlight} from "react-native";

type Props = {
  uri: string, onPressImage: () => void
}

export const PhotoItem = ({uri, onPressImage}: Props) => {
  return (
      <TouchableHighlight style={styles.photoContainer} onPress={onPressImage}>
        <Image style={styles.photo} source={{uri: uri}}/>
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    margin: 5,
    width: '100%'
  },
  photo: {
    width: "100%",
    height: 125,
  }
})
