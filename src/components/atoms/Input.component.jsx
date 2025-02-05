import React, { useState } from 'react'
import { 
StyleSheet, 
Text, 
View, 
useWindowDimensions,
Pressable,
TextInput } from 'react-native'

import { Entypo } from "@expo/vector-icons";


const InputComponent = ({value,onChangeTextFunction,style,multiline=false,placeholder})=>{
    const { styles } = useStyles();
    return(
        <View
        style={style}
      >
        <TextInput
          style={{height: style.height,width: '100%'}}
          multiline = {multiline}
          placeholder={placeholder}
          value={value}
          onChangeText = {(text)=> onChangeTextFunction(text)}
        />
        {
          (value !== "") ? (<Pressable
            style={{ marginHorizontal: 10 }}
            onPress = {()=> onChangeTextFunction("")}
          >
            <Entypo name="circle-with-cross" size={24} color="black" />
          </Pressable>) : null
        }
        
      </View>
)
}


const useStyles = ()=>{
    const {width,height} = useWindowDimensions();
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
    });
    return {styles};
};




export default InputComponent;