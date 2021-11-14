import { placeholder } from "@babel/types";
import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, TextInput, Image} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';


export class StylishInput extends React.Component{
    render(){
        return(
        <View style={{ alignItems:'center'}}>
            <View style={{
            height: h('9%'),
            width: w('85%'),
            // backgroundColor:'#faf',
            flexDirection:'row',
            alignItems:'center',
           
        }}>

        <View style={{
            height:h('8%'),
            width:w('13%'),
            // backgroundColor:'#ada',
            borderWidth: h('0.1%'),
            borderRadius: h('4%'),
          
        }}></View>

        <TextInput style={{
            height:h('8%'),
            width:w('71%'),
            // backgroundColor:'#ada',
            borderWidth: h('0.1%'),
            borderRadius: h('4%'),
            marginLeft: h('0.7%'),
        }}
        placeholder="Enter Invite Code"
        ></TextInput>

        </View>
        </View>
        )
    }
}