import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{
        title: "LUFA MEDIA POS",
        headerTitleAlign: "center",
        headerRight: () => <Pressable onPress={() => console.warn("Pressed")}><FontAwesome name='user-circle' size={30} style={styles.order_title_box} /></Pressable>,
    }}>
      
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="order" options={{}} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  order_title_box: {
    paddingHorizontal: 10
  }
});