import { Drawer } from "expo-router/drawer";


export default function Root(){
  return <Drawer>
    <Drawer.Screen
        name="stack" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Stack",
          title: "overview",
          headerShown:false
        }}
      />
  </Drawer>;

}