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
                                <TouchableOpacity onPress={
                                    ()=>{
                                        this.props.navigation.navigate('RecipeDes')
                                    }
                                } style={{
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
                                </TouchableOpacity>                        
                            </View>
{/* Next */}

                            <View style={{
                                marginTop: h('2%'),
                                height:h('10%'),
                                width: w('95%'),
                                // backgroundColor:'#367460',
                                flexDirection:'row',
                                borderBottomWidth: h('0.1%'),
                                
                            }}>
                                <View style={{
                                    height:h('10%'),
                                    width: w('33%'),
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}>
                                    <Text>
                                        Serving
                                    </Text>
                                    <Text style={{
                                        fontWeight:'bold',
                                    }}>
                                        2pp
                                    </Text>
                                </View>
                                <View style={{
                                   height:h('10%'),
                                   width: w('33%'),
                                   alignItems:'center',
                                   justifyContent:'center',
                                }}>
                                <Text>
                                        Prep Time
                                    </Text>
                                    <Text style={{
                                        fontWeight:'bold',
                                    }}>
                                        45 m
                                    </Text>
                                </View>
                                <View style={{
                                   height:h('10%'),
                                   width: w('33%'),
                                   alignItems:'center',
                                   justifyContent:'center',
                                }}>
                                <Text>
                                        Cook Time
                                    </Text>
                                    <Text style={{
                                        fontWeight:'bold',
                                    }}>
                                        20 m
                                    </Text>
                                </View>
                            </View>

{/* Description */}

                            <View style={{
                                marginTop:h('1%'),
                            }}>
                                <Text>
                                Ingredients
                                </Text>
                                <Text>
                                2 oz gin
                                </Text>
                                <Text>
                                1 oz lychee liqueur
                                </Text>
                                <Text>
                                1 oz lime juice
                                </Text>
                                <Text>
                                0.5 oz simple syrup
                                </Text>
                                <Text> 
                                    Instruction
                                </Text>
                                <Text>
                                Combine all ingredients into a shaker with ice, and shake until well chilled. Double strain into a Combine all ingredients into a shaker with ice, and shake until well chilled. Double strain into aCombine 
                                </Text>
                            </View>


                            
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}