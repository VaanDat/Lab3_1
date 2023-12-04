import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import HomeStack from './MainBottom'
import Notifications from './views/Notifications';
import NotificationsDetails from './views/NotificationsDetails';
import Helps from './views/Helps';
import IonIcon from 'react-native-vector-icons/Ionicons';
//Phạm Văn Đạt - 20520155
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LeftIcon = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ marginLeft: 15 }}>
      <IonIcon name="menu" size={25} />
    </Pressable>
  );
};

const StackDetails = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationsScreen" component={Notifications}
      options={{ headerShown: true, headerLeft: LeftIcon }}
    />
      <Stack.Screen name="NotificationsDetailsScreen" component={NotificationsDetails} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

const TabIcon = ({ name, focused }) => {
  return (
    <IonIcon name={name} size={25}
      color={focused ? '#4390f7' : '#000'}
    />
  );
};

const homeScreenOptions = (headerShown, name) => {
  return {
    headerShown: headerShown,
    drawerIcon: ({ focused }) => <TabIcon name={name} focused={focused} />,
  };
};

const MainDrawer = () => {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack}
        options={homeScreenOptions(false, 'home-outline')}
      />
      <Drawer.Screen name="Notifications" component={StackDetails}
        options={homeScreenOptions(false, 'notifications-outline')}
      />
      <Drawer.Screen name="Helps" component={Helps} 
        options={homeScreenOptions (true, 'help-circle-outline')}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;