import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import skivillabanner from '../styles/images/ski_villa_banner.jpg';
import skivilla from '../styles/images/ski_villa.jpg';
import { LinearGradient } from 'expo-linear-gradient';

const DestinationScreen = () => {
  return (
    <View style={styles.container}>
        <View style={{flex: 1}}>
            <Image source={skivillabanner} resizeMode="cover" style={{height:'90%',width:'100%'}}/>
        </View>
        {/* <View style={{backgroundColor:'yellow'}}> */}
            <View style={[styles.shadow,{
                 position: 'absolute',
                 bottom: "50%",
                 left: "5%",
                 right: "5%",
                 borderRadius: 15,
                 padding: 10,
                 height: 100,
                 width: '90%',
                 backgroundColor: colors.white
            }]}>
               <View style={{flexDirection:'row'}}>
                    <Image source={skivilla} resizeMode="cover" style={{height:80,width:100}}/>
                    <View style={{flexDirection:'column',marginHorizontal:10}}>
                    <Text style={{fontSize:20}}>skivilla</Text>
                    <Text style={{paddingVertical:3}}>🌟 🌟 🌟 🌟 </Text>
                    <Text style={{width:'70%'}}>this is my booking application you can book ur fav hotels</Text>
                    </View>
                </View> 
            </View>
        {/* </View> */}
        <View style={{flex: 1,paddingHorizontal:15}}>
            <View style={{marginVertical:15}}>
                <Text style={{fontSize:26,fontWeight:'600',}}>About</Text>
                <Text style={{paddingVertical:20,fontWeight:'400',fontSize:19,lineHeight:25,color:colors.gray}}>
                Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in 
                the world and is known as the best place to ski. Many other facilities, 
                such as fitness center, sauna, steam room to star-rated restaurants.
                </Text>
            </View>
            <View style={{backgroundColor:colors.primary,padding:30,marginVertical:15,borderRadius:10,flexDirection:'row',alignItems:"center",justifyContent:"space-between",}}>
                <Text style={{fontSize:26,fontWeight:'600',}}>$1000</Text>
                <TouchableOpacity style={{height: 50,width: "60%"}}>
            <LinearGradient
                style={[styles.shadow,{height: 50,width: "100%",alignItems:"center",justifyContent:"center",borderRadius:10}]}
                colors={['#46aeff', '#5884ff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <Text style={[styles.shadow,{color:colors.white,fontSize:24,fontWeight: "bold"}]}>Booking</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default DestinationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})