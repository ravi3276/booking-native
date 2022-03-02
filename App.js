import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import OnBoarding from './OnBoarding';
import DestinationScreen from './screens/DestinationScreen';
import colors from './styles/colors.js'
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name="OnBoarding" component={OnBoarding}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerLeft: null,
              headerRight: ()=>(
                <TouchableOpacity>
                    <Icon name="menu" type='feather' size={35}/>
                </TouchableOpacity>
              ),
            }}
        />
        <Stack.Screen name="DestinationScreen" component={DestinationScreen}
          options={{ headerShown:false }}
        />

        <Stack.Screen name="Home" component={Tabs}
          options={{
            title: null,
            // headerShown:false,
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerLeft:  ()=>(
              <TouchableOpacity onPress={()=>console.log('object')}>
                  <Icon name="left" type='antdesign' size={30}/>
              </TouchableOpacity>
            ),
            headerRight: ()=>(
              <TouchableOpacity>
                  <Icon name="more-vertical" type='feather' size={35}/>
              </TouchableOpacity>
            ),
          }}
        />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
