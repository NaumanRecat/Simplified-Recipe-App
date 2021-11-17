import React from "react";
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

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
                    color:'#000'
                }}>
                    Welcome
                </Text>
                <Text>
                    Log in account!
                </Text>
                </View>

                <View style={{
                    marginTop:h('5%'),
                    alignItems:'center',
                }}>
                    <StylishInput img={require('../assests/user.png')} placeholder={'John'} />
                    
                    <StylishInput img={require('../assests/lo.png')} placeholder={'**********'} />
                </View>

                <View style={{
                    alignItems:'flex-end',
                    marginTop: h('2%'),
                    marginRight: h('5%'),
                }}>
                    <Text>Forget Password?</Text>
                </View>


                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Signup')
                }} style={{
                    alignItems:'flex-end',
                    marginTop: h('16%'),
                    marginRight: h('5%'),
                }}>
                    <Image source={require('../assests/Group.png')} />
                    
                </TouchableOpacity>

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