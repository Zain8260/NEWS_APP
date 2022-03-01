import React from "react";
import { View, Button, Alert, FlatList } from "react-native";
import { Card } from '../components/News_card';
import newAPI from "../APIs/news_Api"

export const Daily_News=({props})=>{
    
    const[news,setnews]=React.useState([]);

    React.useEffect(()=>{
        getnewsfromAPI()
    },[])
// const newsresponse =async()=>{
//     const response=await newAPI.get('top-headlines?country=us&apiKey=162aafe4ce7247bf95ca852867f42548')
// }

function getnewsfromAPI(){
newAPI.get('top-headlines?country=us&apiKey=162aafe4ce7247bf95ca852867f42548')
.then(async function(response){
    setnews(response.data);
})
.catch(function(error){
    Alert.alert("Error 404", "Press OKay to to Request again", [
        { text: "okay", style: "cancel", onPress: getnewsfromAPI},
      ]);
});
}
if(!news){
    return null;
}

    return(
        <View>
            <FlatList
            data={news.articles}
            keyExtractor={(item,index)=>'key'+index}
renderItem={({item})=>{
return (<Card item={item}/>)
}}
/>
 </View>
    )
}

