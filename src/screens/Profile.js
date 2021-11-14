import React from "react";
import {View, Text, SafeAreaView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";

export class Profile extends React.Component{
    render(){
        return(
            <View>
                
                 <View style={{
                   flex:1,
                     backgroundColor:'#fff',

                 }}>
                    <Header/>
                 </View>
            </View>
        )
    }
}