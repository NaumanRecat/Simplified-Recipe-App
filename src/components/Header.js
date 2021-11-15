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
                flexDirection:'row',
            }}>
                 <View style={{
                      height: h('8%'),
                      width: w('50%'),
                    //   backgroundColor: '#ac2',
                      justifyContent:'center',
                      marginLeft: h('2%'),
                 }}>
                 <Image  source={require('../assests/hb.png')} />
                 </View>

                 <View style={{
                      height: h('8%'),
                      width: w('44%'),
                    //   backgroundColor: '#ac2',
                      alignItems:'flex-end',
                      justifyContent:'center',
                      marginRight: h('2%'),
                 }} >
                 <Image  source={require('../assests/plus.jpg')} />
                 </View>



            </View>
        )
    }
}