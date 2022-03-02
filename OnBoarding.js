import { Image, SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from './styles/colors.js'
import Traveling from './styles/images/Traveling-bro.png';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1 ,alignItems:"center",justifyContent:"center"}}>
          <Image source={Traveling} style={{height:"100%",width:"100%"}} resizeMode="cover"/>
        </View>
        <View style={{flex: 1 ,alignItems:"center",justifyContent:"center"}}>
            <View style={{alignItems:"center",marginHorizontal:50}}>
                <Text style={{fontSize:26,fontWeight:"600",marginVertical:10}}>Start Booking</Text>
                <Text style={{fontSize:18,fontWeight:"400",color:colors.gray,marginBottom:25}}>easy solution to book tickets for your travel,business trips </Text>
            </View>

            <TouchableOpacity style={{height: 50,width: "60%",
            alignItems:"center",justifyContent:"center"}}
            onPress={()=>{navigation.navigate("Home")}}
            >
            <LinearGradient
                style={[styles.shadow,{height: 50,width: "100%",alignItems:"center",justifyContent:"center",borderRadius:10}]}
                colors={['#92E3A9']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <Text style={[styles.shadow,{color:colors.white,fontSize:24,fontWeight: "bold"}]}>Let's Travel</Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})