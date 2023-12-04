import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import Home from './views/Home';
import HomeDetails from './views/HomeDetails';
import Categories from './views/Categories';
import Favourites from './views/Favourites';
import Profile from './views/Profile';
import IonIcon from 'react-native-vector-icons/Ionicons';

//Phạm Văn Đạt - 20520155
const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const StackDetails = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainBottom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetails}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

const CategoriesTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories 1" component={Categories.Categories1} />
      <Tab.Screen name="Categories 2" component={Categories.Categories2} />
      <Tab.Screen name="Categories 3" component={Categories.Categories3} />
    </Tab.Navigator>
  );
};

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

const TabIcon = ({ name, focused }) => {
  return <IonIcon name={name} size={25} color={focused ? '#4390f7' : '#000'} />;
};

const homeScreenOptions = (headerShown, name, isHome) => {
  return {
    headerShown: headerShown,
    tabBarIcon: ({ focused }) => <TabIcon name={name} focused={focused} />,
    headerLeft: isHome ? LeftIcon : null,
  };
};

const MainBottom = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={homeScreenOptions(true, 'home', true)}
      />
      <Bottom.Screen
        name="Categories"
        component={CategoriesTab}
        options={homeScreenOptions(true, 'grid')}
      />
      <Bottom.Screen
        name="Favourites"
        component={Favourites}
        options={{ ...homeScreenOptions(true, 'heart'), tabBarBadge: 3 }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={homeScreenOptions(true, 'person')}
      />
    </Bottom.Navigator>
  );
};

export default StackDetails;
