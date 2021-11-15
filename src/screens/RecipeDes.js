import React from "react";
import {View, Text, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";


export class RecipeDes extends React.Component{
    render(){
        return(
            <SafeAreaView style={{
                flex:1,
            }}>
                <View style={{
                    flex:1,
                }}>
                    <Header/>
                    {/* Step 1 */}
                    <View style={{
                        height:h('12%'),
                        width:w('100%'),
                        // backgroundColor:'#ada',
                        borderBottomWidth: h('0.1%'),
                        marginLeft: h('5%'),
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:h('5%'),
                            marginTop:h('4%'),
                            color:'#000',

                        }}>
                            Step 1.
                        </Text>
                    </View>

                        {/* Title */}

                    <View style={{
                         marginLeft: h('5%'),
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:h('3%'),
                            marginTop:h('2.5%'),
                            color:'#000',
                        }}>
                            Vedio / Photo Title
                        </Text>
                    </View>

                    {/* Image */}

                    <View style={{
                        height:h('35%'),
                        width: w('100%'),
                        backgroundColor:'#faf',
                        marginTop: h('1%'),
                    }}>
                        <Image style={{
                             height:h('35%'),
                             width: w('100%'),
                        }} source={require('../assests/r.png')} />
                    </View>

                    {/* Content */}

                   <View style={{
                       alignItems:'center',
                       justifyContent:'center',
                   }}>
                   <View style={{
                        height:h('20%'),
                        width: w('85%'),
                        // backgroundColor:'#faf',
                        marginTop: h('2%'),
                        // alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text style={{
                            fontSize: h('2.5%'),
                        }} >
                        Recipes Description 
                        </Text >
                        <Text style={{
                            fontSize: h('2.5%'),
                        }}>
                        Serves meals by so reviewing recipes; assembling, combining, cook ro s and cooking ingredients; and maintaining a sanitary kitchen. Executes cold food production in accordance.
                        </Text>
                    </View>
                   </View>

                   {/* Button */}

                   <View style={{ alignItems:'center'}}>
               <View style={{
                    height:h('8%'),
                    width:w('85%'),
                    backgroundColor:'#EDF1F5',
                    borderRadius:h('4%'),
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: h('3%'),
                    marginBottom: h('1.6%'),
                }}>
                    <Text style={{
                        color:'#367460',
                        fontWeight:'500',
                        fontSize:h('2.5%'),
                    }}> Next Step </Text>

                </View>
               </View>


                </View>
            </SafeAreaView>
        )
    }
}