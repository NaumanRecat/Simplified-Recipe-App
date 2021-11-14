import React from "react";
import {View, Text, SafeAreaView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";

export class Header extends React.Component{
    render(){
        return(
            <View style={{
                height: h('8%'),
                width: w('100%'),
                // backgroundColor: '#ada',
                // alignItems:'center',
                justifyContent:'center',
               
            }}>
                 <Image  source={require('../assests/hb.png')} />
            </View>
        )
    }
}