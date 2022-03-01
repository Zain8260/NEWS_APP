import React from "react";
import { View, StyleSheet, Text, Image,Dimensions } from "react-native";

const{width,height}=Dimensions.get('window')
 export const Card=({item})=>{

    return(
    <View style={styles.card}>
        <Text style={styles.Title}>{item.title}</Text>
        <Text style={styles.Author}>{item.author}</Text>
        <Image style={styles.image } source={{uri:item.urlToImage}}/>
        <Text style={styles.Description}>{item.description}</Text>
        </View>)
 }
 

 const styles=StyleSheet.create({
     card:{
         backgroundColor:'white',
         margin:10,
         borderRadius:width*0.05,
         elevation:30,
         justifyContent:'center',
     },
Title:{
marginHorizontal:width*0.05,
marginVertical:width*0.03,
color:'black',
fontSize:20,
fontWeight:'bold',
borderBottomColor: 'black',
borderBottomWidth: 2,
},
Author:{
marginBottom:width*0.0,
marginHorizontal:width*0.05,
marginRight:width*0.05,
marginVertical:height*0.02,
fontWeight:'bold',
},

Description:{
marginVertical:width*0.05,
marginHorizontal:width*0.02,
color:'gray',
fontSize:18,

},
image:{
width:width,
height:height/6,
marginLeft:width*0.05,
marginRight:width*0.05,
marginVertical:height*0.02,

}


 })