import React from "react";
import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { isTemplateElement } from "@babel/types";

export class Profile extends React.Component{

state ={
    name: 'Username',
    email: 'Email',
    current: 'Current password',
    new: 'New password',
    confirm: 'Confirm new password',
}

    render(){
        return(
           
                <SafeAreaView style={{flex:1}}>
                 <View style={{
                   flex:1,
                     backgroundColor:'#fff',

                 }}>
                    <Header/>
                    <Text style={{fontSize:h('3%'), color:'#000', fontWeight:'500', marginLeft: h('3%')}}>My Profile</Text>

                    <View style={{
                        height:h('15%'),
                        width:w('100%'),
                        // backgroundColor:'#342',
                        alignItems:'center',
                        justifyContent:'center',
                    }} >
                        <Image style={{height:h('15%'), width:w('25%') }} source={require('../assests/pfi.png')} />
                    </View>

                    <View style={{
                        alignItems:'center',
                        justifyContent:'center',
                        
                    }}>
                    <View style={{ 
                    width:w('85%'), 
                    height:h('45%'),
                    justifyContent:'center',
                    // backgroundColor:'#adf',
                    marginTop: h('1%'),
                    }}>
                        <Text> {this.state.name} </Text>
                        <TextInput style={{ borderBottomWidth: h('0.1%'), height:h('6%')}}/>

                        <Text> {this.state.email} </Text>
                        <TextInput style={{ borderBottomWidth: h('0.1%'), height:h('6%')}}/>

                        <Text> {this.state.current} </Text>
                        <TextInput style={{ borderBottomWidth: h('0.1%'), height:h('6%')}}/>

                        <Text> {this.state.new} </Text>
                        <TextInput style={{ borderBottomWidth: h('0.1%'), height:h('6%')}}/>

                        <Text> {this.state.confirm} </Text>
                        <TextInput style={{ borderBottomWidth: h('0.1%'), height:h('6%')}}/>

                          
                    </View>
                    </View>

                    <View style={{ alignItems:'center'}}>
               <View style={{
                    height:h('7%'),
                    width:w('85%'),
                    backgroundColor:'#367460',
                    borderRadius:h('4%'),
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: h('6%'),
                    marginBottom: h('1.6%'),
                }}>
                    <Text style={{
                        color:'#fff',
                        fontWeight:'500',
                        fontSize:h('2.5%'),
                    }}> Save Changes </Text>

                </View>
               </View>

                    

                 </View>
                 </SafeAreaView>
            
        )
    }
}