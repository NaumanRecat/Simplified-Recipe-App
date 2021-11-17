import React from "react";
import {View, Text, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";


export class Recipeuploadfinal extends React.Component{
    render(){
        return(
            <SafeAreaView style={{
                flex:1,
            }}>
                <ScrollView style={{
                    flex:1,
                }}>

                   <Header/>
{/* Bob View */}
                <View style={{
                    height:h('10%'),
                    width: w('100%'),
                    // backgroundColor:'#ada',
                    flexDirection:'row',
                }}>
                    <View style={{
                        alignContent:'center',
                        justifyContent:'center',
                        marginLeft: h('2%'),
                    }}>
                        <Image style={{
                            height:h('8%'),
                            width: w('13%'),
                            borderRadius: h('5%')
                        }} source={require('../assests/22.png')} />
                    </View>
                    <View style={{
                        alignContent:'center',
                        justifyContent:'center',
                        marginLeft: h('2%'),
                    }}>
                        <Text style={{
                            fontSize: h('3%'),
                            fontWeight:'bold',
                        }}> Bob </Text>
                    </View>
                </View>

{/* Recipe title */}

                    <View style={{
                        height:h('7%'),
                        width:w('80%'),
                        // backgroundColor:'#ada',
                        borderWidth: h('0.1%'),
                        borderRadius: h('1%'),
                        marginLeft:h('5%'),
                        marginTop: h('2%'),
                        
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
                        <View style={{
                            height:h('5%'), 
                            width:w('100%'),
                            // backgroundColor:'#faf',
                            justifyContent:'center',
                            marginLeft: h('2%'),
                        }}>
                            <Text style={{
                                fontSize: h('3.5%'),
                                fontWeight: 'bold',
                                color:'#000'

                            }}>
                                Upload Image and Vedio
                            </Text>
                        </View>
                    </View>

{/* Recipe Information */}

                    <View style={{
                        height:h('20%'), 
                        width:w('100%'),
                        // backgroundColor:'#ada',
                        marginTop: h('3%'),
                    }}>
                        {/* Text */}
                        <View style={{
                            height:h('5%'), 
                            width:w('100%'),
                            // backgroundColor:'#faf',
                            justifyContent:'center',
                            marginLeft: h('2%'),
                        }}>
                            <Text style={{
                                fontSize: h('3.5%'),
                                fontWeight: 'bold',
                                color:'#000'

                            }}>
                                Recipe Information
                            </Text>
                        </View>

                        {/* 3 box */}

                        <View style={{
                            height:h('15%'), 
                            width:w('100%'),
                            // backgroundColor:'orange',
                            flexDirection:'row',
                        }}>
                            <View style={{
                                height:h('15%'), 
                                width:w('33%'),
                                // backgroundColor:'yellow',
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                                <Text style={{
                                    fontSize:h('3%'),
                                    marginBottom: h('1%'),
                                }}>
                                    Serving
                                </Text>
                                <TextInput style={{
                                    borderWidth: h('0.1%'),
                                    width:w('20%'),
                                    borderRadius: h('2%'),
                                }}/>
                            </View>

                            <View style={{
                                height:h('15%'), 
                                width:w('34%'),
                                // backgroundColor:'grey',
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                                      <Text style={{
                                    fontSize:h('3%'),
                                    marginBottom: h('1%'),
                                }}>
                                    Preparing Time
                                </Text>
                                <TextInput style={{
                                    borderWidth: h('0.1%'),
                                    width:w('20%'),
                                    borderRadius: h('2%'),
                                }}/>
                            </View>

                            <View style={{
                                height:h('15%'), 
                                width:w('33%'),
                                // backgroundColor:'yellow',
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                                    <Text style={{
                                    fontSize:h('3%'),
                                    marginBottom: h('1%'),
                                }}>
                                    Cook Time
                                </Text>
                                <TextInput style={{
                                    borderWidth: h('0.1%'),
                                    width:w('20%'),
                                    borderRadius: h('2%'),
                                }}/>  
                            </View>              

                        </View>

                    </View>

                    {/* Descri */}

                    <View style={{
                         marginTop: h('3%'),
                         marginLeft:h('5%'),
                    }}>
                        <Text> Ingrediants</Text>
                        <TextInput style={{
                            height: h('20%'),
                            width: w('80%'),
                            borderWidth:h('0.1%'),
                            marginTop: h('2%'),
                            borderRadius: h('1%'),
                        }} placeholder={'Type Recipe Ingrediant'} />
                    </View>

                    {/* Des 2 */}

                    <View style={{
                         marginTop: h('3%'),
                         marginLeft:h('5%'),
                         
                         
                    }}>
                        <Text> Instruction </Text>
                        <TextInput style={{
                            height: h('20%'),
                            width: w('80%'),
                            borderWidth:h('0.1%'),
                            marginTop: h('2%'),
                            borderRadius: h('1%'),
                        }} placeholder={'Type Recipe Instruction'} />
                    </View>

                        <View style={{
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Text style={{
                                height:h('5%'), 
                                width:w('97%'),
                                // backgroundColor:'#faf', 
                                justifyContent:'center',
                                marginLeft: h('3%'),
                                fontSize: h('3.5%'),
                                fontWeight:'bold',
                                color:'#000',
                                marginTop: h('2%')
                            }}>
                                Add Cooking Step
                            </Text>                
                            
                        </View>
                   
{/* St */}
                            <View style={{
                                height: h('8%'),
                                width: w('85%'),
                                // backgroundColor:'#ada',
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center',
                                marginLeft: h('5%'),
                                marginTop: h('3%')
                            }}>
                                <View style={{
                                    height: h('8%'),
                                    width: w('75%'),
                                    marginTop: h('3%')
                                }}>
                                    <Text style={{
                                        fontSize: h('3%')
                                    }}> Step 1 Added </Text>
                                </View>
                                <View>
                                    <Image source={require('../assests/tick.png')} />
                                </View>
                            </View>
{/* st 2 */}

<View style={{
                                height: h('8%'),
                                width: w('85%'),
                                // backgroundColor:'#ada',
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center',
                                marginLeft: h('5%'),
                                marginTop: h('3%')
                            }}>
                                <View style={{
                                    height: h('8%'),
                                    width: w('75%'),
                                    marginTop: h('3%')
                                }}>
                                    <Text style={{
                                        fontSize: h('3%')
                                    }}> Step 1 Added </Text>
                                </View>
                                <View>
                                    <Image source={require('../assests/tick.png')} />
                                </View>
                            </View>

{/* Buton */}

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

{/* Last Button */}

               <View style={{ alignItems:'center'}}>
               <TouchableOpacity onPress={()=>{
                   this.props.navigation.navigate('RecipeUpload')
               }} style={{
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
                    }}> Update Recipe Now </Text>

                </TouchableOpacity>
               </View>



                </ScrollView>
            </SafeAreaView>
        )
    }
}