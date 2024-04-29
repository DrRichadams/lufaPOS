import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';



export default function RootLayout() {
  return(
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  )
}
