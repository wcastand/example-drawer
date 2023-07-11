import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Stack, useNavigation, useRootNavigation, useRouter, useSegments } from "expo-router";
import { Button, Text } from "react-native";

export default function StackRoot(){
  const router = useRouter()
  const segment= useSegments()
  const nav = useNavigation<DrawerNavigationProp<{}>>()
  return <Stack screenOptions={{
    headerBackButtonMenuEnabled: true,
    headerLeft: ({label}) => {
      if(!router.canGoBack() || segment.some(s => s === 'root')) return <Button onPress={() => nav.openDrawer()} title={'icon menu'} />
      return <Button onPress={() => router.back()} title={label ?? 'back'} />
  },
  }}/>
}