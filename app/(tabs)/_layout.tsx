import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{
        headerTitle: "LUFA MEDIA POS",
        headerTitleAlign: "center",
        headerRight: () => <Pressable onPress={() => console.warn("Pressed")}><FontAwesome name='user-circle-o' size={30} style={styles.order_title_box} /></Pressable>,
    }}>
      
      <Tabs.Screen name="index" options={{ title: "ORDER", tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} /> }}/>
      <Tabs.Screen name="stocks" options={{ title: "STOCKS", tabBarIcon: ({ color }) => <FontAwesome size={28} name="pencil-square-o" color={color} /> }} />
      <Tabs.Screen name="sales" options={{ title: "SALES", tabBarIcon: ({ color }) => <FontAwesome size={28} name="share-square-o" color={color} /> }} />
      <Tabs.Screen name="settings" options={{ title: "SETTINGS", tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} /> }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  order_title_box: {
    paddingHorizontal: 10
  }
});