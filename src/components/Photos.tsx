import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {PhotoItem} from './Photo'
import {LoadingSpinner} from "./Loading";
import {useGetPhotos} from "../hooks/useGetPhotos"
import {Routes} from "../navigation/Routes";

export function Photos({navigation}: any) {
  const {isLoading, photos, onEndReached, isRefreshing, onRefresh} = useGetPhotos();


  return (
    <>
      {isLoading
        ? <LoadingSpinner/>
        : <FlatList
          style={styles.container}
          data={photos}
          numColumns={2}
          onEndReached={onEndReached}
          onEndReachedThreshold={.5}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          renderItem={({item: photo}) => <PhotoItem uri={photo.thumbnailUrl}
                                                    onPressImage={() => navigation.navigate(Routes.Modal, {photo})}/>}
          keyExtractor={(photo) => photo.id.toString()}
          ListEmptyComponent={<LoadingSpinner/>}
        />
      }
      <StatusBar style="auto"/>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});
