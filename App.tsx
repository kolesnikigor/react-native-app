import React from "react";
import {Platform, StatusBar, SafeAreaView, StyleSheet} from 'react-native';

import {Navigation} from "./src/navigation";

export default function App() {

  return (
    <SafeAreaView style={styles.layout}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
