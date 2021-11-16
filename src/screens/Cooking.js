import React from "react";
import {View, Text, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";


export class Cooking extends React.Component{
    render(){
        return(
            <SafeAreaView style={{
                flex:1,
            }}>
                <View style={{
                    flex:1,
                }}>

                    <View style={{
                        height:h('35%'),
                        width: w('100%'),
                        backgroundColor:'#ada',
                    }}>
                        <Image style={{
                             height:h('50%'),
                             width: w('100%'),
                        }} source={require('../assests/coo.png')}></Image>
                    </View>
{/* Under View */}
                    <View style={{
                        height:h('65%'),
                        width: w('100%'),
                        backgroundColor:'#fff',
                        borderWidth: h('0.1%'),
                        borderRadius: h('5%'),
                    }}>
{/* First view in Text */}
                        <View style={{
                            height:h('12%'),
                            width: w('100%'),
                            // backgroundColor:'#ada',
                            marginLeft: h('2%'),
                            marginTop: h('2%'),
                            borderBottomWidth: h('0.1%'),
                            
                        }}>
                            <Text style={{
                                fontSize: h('3.5%'),
                                fontWeight:'600',
                            }}> Avocado with Nuts Recipes</Text>
{/* 3 View line */}
                            <View style={{
                                height: h('5%'),
                                width:w('100%'),
                                // backgroundColor:'#ffa',
                                flexDirection:'row',
                                // justifyContent:'flex-end',
                                marginTop:h('1%'),
                                
                            }}>
{/* 1st view */}
                            <View style={{
                                height:h('5%'),
                                width: w('15%'),
                                // backgroundColor:'#fa7',
                                
                             }}>
                                <Image style={{
                                    height:h('5%'),
                                    width: w('9%'),
                                    borderRadius: h('7%'),
                                }} source={require('../assests/8.png')} />
                            </View>
{/*2ND vIEW */}
                                <View style={{
                                    height:h('5%'),
                                    width: w('10%'),
                                    // backgroundColor:'#faf',
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}>
                                    <Text style={{
                                        fontSize: h('2.5%')
                                    }}> Jack</Text>
                                </View>
{/* 3rd View */}
                                <View style={{
                                    height:h('5%'),
                                    width: w('65%'),
                                    // backgroundColor:'yellow',
                                    // borderWidth:h('0.2%'),
                                    // borderRadius: h('5%'),
                                    justifyContent:'flex-end',
                                    alignItems:'flex-end',     
                                }}>
                                    <View style={{
                                        height:h('5%'),
                                        width: w('30%'),
                                        backgroundColor:'#367460',
                                        borderWidth:h('0.2%'),
                                        borderRadius: h('5%'),
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}>
                                        <Text style={{
                                            color:'#fff'
                                        }}> Start Cooking</Text>
                                    </View>
                                </View>
{/* Next */}
                            







                            </View>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}