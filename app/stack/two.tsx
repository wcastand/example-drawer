import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Two() {
  const router = useRouter()
  return <View>
    <Text>two</Text>
    <Button title="go to home" onPress={() => router.back(0)}/>
  </View>
}