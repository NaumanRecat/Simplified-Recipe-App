import React from "react";
import {View, Text, SafeAreaView, Image} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";

export class Signup extends React.Component{
    render(){
        return(
            <SafeAreaView style={{ flex:1}}>
            <View style={{ flex:1, backgroundColor:'#fff'}}>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    // marginTop:h('1%')
                }}>
                <Image source={require('../assests/splashtop.png')} />
                </View>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                <Text style={{
                    fontWeight:'600',
                    fontSize:h('5%'),
                }}>
                    Welcome
                </Text>
                <Text>
                    Create a new account!
                </Text>
                </View>


                <View style={{
                    marginTop:h('2%'),
                    alignItems:'center',
                }}>
                    <StylishInput/>
                    <StylishInput/>
                    <StylishInput/>
                    <StylishInput/>
                    <StylishInput/>
                    
                    
                </View>


                <View style={{
                    alignItems:'flex-end',
                    marginTop: h('2%'),
                    marginRight: h('3%'),
                    // backgroundColor:'#ada',
                    height: h('13%'),
                }}>
                    <Image source={require('../assests/Group.png')} />
                    
                    
                </View>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    // backgroundColor:'#fafa',
                    
                
                }}>
                <Text>Create Account with Email</Text>
                </View>



                </View>
                </SafeAreaView>
        )
    }
}