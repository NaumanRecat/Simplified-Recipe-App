import React from "react";
import {View, Text, Image, Button, SafeAreaView} from 'react-native';

import { StylishInput } from "../components/StylishInput";

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class Splash extends React.Component{
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
                    marginTop:h('2%'),
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
                    Your all recipe in one place
                </Text>
                </View>


               <View style={{ alignItems:'center'}}>
               <View style={{
                    height:h('8%'),
                    width:w('85%'),
                    backgroundColor:'#367460',
                    borderRadius:h('4%'),
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: h('3%'),
                    marginBottom: h('1.6%'),
                }}>
                    <Text style={{
                        color:'#fff',
                        fontWeight:'500',
                        fontSize:h('2.5%'),
                    }}> Sign in </Text>

                </View>
               </View>

               <View>
                   <StylishInput/>
               </View>

           <View style={{
               alignItems:'center',
           }}>
           <View style={{
                 height:h('8%'),
                 width:w('85%'),
                //  backgroundColor:'#367460',
                 borderRadius:h('4%'),
                 alignItems:'center',
                 justifyContent:'center',
                 marginTop: h('3%'),
                 marginBottom: h('1.6%'),
                 borderWidth: h('0.3%'),
                 borderRadius: h('4%'),
                 borderTopColor: '#367460',
                 borderBottomColor: '#367460',
                 borderLeftColor: '#367460',
                 borderRightColor: '#367460',
            }}>
                <Text style={{
                    color:'#367460',
                }}>Create New Account</Text>
            </View>
            </View>
                
                <View style={{
                    height: h('20%'),
                    width:w('100%'),
                    // backgroundColor:'#faf',
                }}>
                    <Image style={{
                        height: h('30%'),
                        width: w('70%')
                    }} source={require('../assests/in.png')} />
                </View>


            </View>
            </SafeAreaView>
        )
    }
}