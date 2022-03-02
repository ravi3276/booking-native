import { Image, StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import banner from '../styles/images/banner.jpg';
import colors from '../styles/colors.js';
import airplane from '../styles/images/airplane_icon.png';
import bed from '../styles/images/bed_icon.png';
import bus from '../styles/images/bus_icon.png';
import compass from '../styles/images/compass_icon.png';
import eat from '../styles/images/eat_icon.png';
import event from '../styles/images/event_icon.png';
import taxi from '../styles/images/taxi_icon.png';
import train from '../styles/images/train_icon.png';
import climbing from '../styles/images/climbing_hills.jpg';
import skivillabanner from '../styles/images/ski_villa_banner.jpg';
import skivilla from '../styles/images/ski_villa.jpg';
import frozenHills from '../styles/images/frozen_hills.jpg';
import beach from '../styles/images/beach.jpeg';
import { LinearGradient } from 'expo-linear-gradient';

const Bookings=({icon,bgColor,label,onPress})=>(
    <TouchableOpacity style={{paddingHorizontal:25,activeOpacity:0.9,alignItems:"center",justifyContent:"center"}}>
      <View style={{height:55,width:55,shadowColor: "#000"}}>
        <LinearGradient
           style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }}
           colors={bgColor}
           start={{x: 0, y: 0}}
           end={{x: 1, y: 1}}
        >
          <Image source={icon} style={{tintColor: colors.white,width: 30,height: 30,}}/>
        </LinearGradient>
      </View>
        <Text style={{marginTop:5,fontSize:18,fontWeight: '400',color:colors.gray}}>{label}</Text>
    </TouchableOpacity>
)

const HomeScreen = ({navigation}) => {

  const [destination,setDestination]=useState([
    {
      id: 0,
      name: "Ski Villa",
      img: skivilla,
  },
  {
      id: 1,
      name: "Climbing Hills",
      img: climbing,
  },
  {
      id: 2,
      name: "Frozen Hills",
      img: frozenHills,
  },
  {
      id: 3,
      name: "Beach",
      img: beach,
  },
  ])

  return (
    <View style={styles.container}>
    <View style={{flex: 1 ,alignItems:"center",justifyContent:"center",marginVertical:15}}>
    <Image source={banner} style={{height:"100%",width:"100%",borderRadius:20}}/>
    </View>
    <View style={{flex: 1 ,alignItems:"center",justifyContent:"center"}}>
    <View style={{flexDirection:"row",marginTop:20 }}>
        <Bookings 
         icon={airplane}
         bgColor={['#46aeff', '#5884ff']}
         label="Flight"
         onPress={() => { console.log("Flight") }}
        />
         <Bookings 
         icon={train}
         bgColor={['#46aeff', '#5884ff']}
         label="Train"
         onPress={() => { console.log("Flight") }}
        />
         <Bookings 
         icon={bus}
         bgColor={['#46aeff', '#5884ff']}
         label="Bus"
         onPress={() => { console.log("Flight") }}
        />
         <Bookings 
         icon={taxi}
         bgColor={['#46aeff', '#5884ff']}
         label="Taxi"
         onPress={() => { console.log("Flight") }}
        />
    </View>

    <View style={{flexDirection:"row",marginTop:20 }}>
        <Bookings 
         icon={bed}
         bgColor={['#46aeff', '#5884ff']}
         label="Hotels"
         onPress={() => { console.log("Flight") }}
        />
         <Bookings 
         icon={eat}
         bgColor={['#46aeff', '#5884ff']}
         label="Eats"
         onPress={() => { console.log("Flight") }}
        />
         <Bookings 
         icon={compass}
         bgColor={['#46aeff', '#5884ff']}
         label="Compass"
         onPress={() => { console.log("Flight") }}
        />
         <Bookings 
         icon={event}
         bgColor={['#46aeff', '#5884ff']}
         label="Event"
         onPress={() => { console.log("Flight") }}
        />
    </View>
    </View>
    <View style={{flex: 1}}>
    <Text style={{fontSize:20,fontWeight:'600'}}>Destination</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={destination}
      keyExtractor={item => item.id.toString()}
      renderItem={({item,index})=>(
            <TouchableOpacity style={{alignItems:"center",justifyContent:"center",marginHorizontal:4}}
            onPress={() => {navigation.navigate('DestinationScreen')}}
            >
            <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: '82%',
                        borderRadius: 15
                    }}
                />
            <Text style={{fontSize:18,marginTop:5,color:colors.gray}}>{item.name}</Text>
            </TouchableOpacity>
      )}
    />
    </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal:15,
    },
})