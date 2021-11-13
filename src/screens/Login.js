import React from "react";
import {View, Text, SafeAreaView, Image} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";

export class Login extends React.Component{
    render(){
        return(
            <SafeAreaView style={{ flex:1}}>
            <View style={{ flex:1, backgroundColor:'#fff'}}>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:h('5%')
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
                    Log in Account!
                </Text>
                </View>

                <View style={{
                    marginTop:h('3%'),
                    alignItems:'center',
                }}>
                    <StylishInput/>
                    <Text style={{ color: 'red'}}> { "*Enter correct username/Email"} </Text>
                    <StylishInput/>
                    <Text style={{ color: 'red'}}> { "*Enter Correct Password"} </Text>
                </View>

                <View style={{
                    alignItems:'flex-end',
                    marginTop: h('2%'),
                    marginRight: h('5%'),
                }}>
                    <Text>Forget Password?</Text>
                </View>


                <View style={{
                    alignItems:'flex-end',
                    marginTop: h('8%'),
                    marginRight: h('5%'),
                }}>
                    <Image source={require('../assests/Group.png')} />
                    
                </View>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                <Text>Create Account with Email</Text>
                </View>

                </View>
                </SafeAreaView>
        )
    }
}