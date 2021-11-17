import React from "react";
import {View, Text, SafeAreaView, Image,TouchableOpacity} from 'react-native';

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
                    color:'#000'
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
                    <StylishInput img={require('../assests/userb.png')} placeholder={'Upload Profile Image'} />
                    <StylishInput img={require('../assests/userb.png')} placeholder={'Username'} />
                    <StylishInput img={require('../assests/email.png')} placeholder={'Email'}  />
                    <StylishInput img={require('../assests/lock.png')} placeholder={'Password'}  />
                    <StylishInput img={require('../assests/lock.png')} placeholder={'Confirm Password'} />
                    
                    
                </View>


                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Recipe')
                }} style={{
                    alignItems:'flex-end',
                    marginTop: h('1%'),
                    marginRight: h('3%'),
                    // backgroundColor:'#ada',
                    height: h('13%'),
                }}>
                    <Image source={require('../assests/Group.png')} />
                    
                    
                </TouchableOpacity>

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