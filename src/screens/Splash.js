import React from 'react';
import {View, Text, Image, Button, SafeAreaView, TouchableOpacity} from 'react-native';

import { StylishInput } from "../components/StylishInput";

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import PushNotification from "react-native-push-notification";
import { useEffect } from 'react';

export class Splash extends React.Component{

    componentDidMount = () => {
      
        this.createChannels();
      };

createChannels =()=>{
       PushNotification.createChannel(
           {
               channelId:"test-channel",
               channelName:"Test-channel"
           }
       )
}

handleNotification=()=>{
    PushNotification.localNotification({
        channelId:"test-channel",
        title:"Kinza ",
        message: "hi gow adww biy",     
    });
    PushNotification.localNotificationSchedule({
        channelId: "test-channel",
        title:"Alram",
        message:"Hi how are you",
        date: new Date(Date.now() + 20*1000),
        allowWhileIdle:'true',
    });
}


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
                    marginTop:h('1%'),
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
                    Your all recipe in one place
                </Text>
                </View>


               <TouchableOpacity onPress={()=>{
                   this.handleNotification()
               }} style={{ alignItems:'center'}}>
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
               </TouchableOpacity>

               <View>
                   <StylishInput 
                   img={require('../assests/lock.png')}
                   placeholder={'Enter Invitation Code'}
                   />
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