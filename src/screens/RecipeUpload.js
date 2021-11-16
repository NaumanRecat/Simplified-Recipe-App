import React from "react";
import {View, Text, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";


export class RecipeUpload extends React.Component{
    render(){
        return(
            <SafeAreaView>
                <View>

                    <Header/>
{/* Search Bar */}
                    <View style={{
                        height:h('7%'),
                        width:w('80%'),
                        // backgroundColor:'#ada',
                        borderWidth: h('0.1%'),
                        borderRadius: h('1%'),
                        marginLeft:h('5%'),
                        
                    }}>
                        <TextInput placeholder={'Step 1 Title'} />
                    </View>
{/* Image Picker */}
                    <View style={{
                        height:h('20%'), 
                        width:w('100%'),
                        // backgroundColor:'#ada',
                        marginTop: h('3%'),
                        borderTopWidth: h('0.06%'),
                        borderBottomWidth: h('0.1%'), 
                    }}>
                        {/* 3 Image Picker */}
                    </View>


{/* Des box */}
                    <View style={{
                         marginTop: h('3%'),
                         marginLeft:h('5%'),
                    }}>
                        <Text> Description</Text>
                        <TextInput style={{
                            height: h('20%'),
                            width: w('80%'),
                            borderWidth:h('0.1%'),
                            marginTop: h('2%'),
                            borderRadius: h('1%'),
                        }} placeholder={'Type Step Description'} />
                    </View>

{/* Save Button */}
<View style={{ alignItems:'center'}}>
               <View style={{
                    height:h('8%'),
                    width:w('60%'),
                    backgroundColor:'#EDF1F9',
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
                    }}> Save </Text>

                </View>
               </View>





                </View>
            </SafeAreaView>
        )
    }
}