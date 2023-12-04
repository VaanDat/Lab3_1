import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Phạm Văn Đạt - 20520155
const Home = () => {
  const navigation = useNavigation();
  const handleDetails = () => {
    navigation.navigate('HomeDetails');
  }

  return (    
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button style={{ alignItems: 'center' }} title="Go to Details" onPress={handleDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;