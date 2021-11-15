import React from "react";
import {View, Text, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";


export class Recipe extends React.Component{
    state = {
        data: [
          {
            name: 'Avocado with Nuts Recipe',
            img: require('../assests/r.png'),
            imgtxt: 'John',
            Time: '11hr 45min',

            name1: 'New Cafe pizza Recipes',
            img1: require('../assests/r.png'),
            imgtxt1: 'Alex',
            Time1: '95cl',
          },
          {
            name: 'Palao with Chicken Recipes',
            img: require('../assests/r.png'),
            imgtxt: 'Jack',
            Time: '1hr 25min',

            name1: '13 Pizza with tamato recipes',
            img1: require('../assests/r.png'),
            imgtxt1: 'Herry',
            Time1: '45 mint',
          },
          {
            name: 'Avocado with Nuts Recipe',
            img: require('../assests/r.png'),
            imgtxt: 'John',
            Time: '11hr 45min',

            name1: 'New Cafe pizza Recipes',
            img1: require('../assests/r.png'),
            imgtxt1: 'Alex',
            Time1: '95cl',
          },
          {
            name: 'Palao with Chicken Recipes',
            img: require('../assests/r.png'),
            imgtxt: 'Jack',
            Time: '1hr 25min',

            name1: '13 Pizza with tamato recipes',
            img1: require('../assests/r.png'),
            imgtxt1: 'Herry',
            Time1: '45 mint',
          },
          
          
        ],
        selectedItem: '',
      };

      design = (item) => (
        <View
          style={{
            height: h('36'),
            width: w('100%'),
            // backgroundColor: 'pink',
            flexDirection: 'row',
            marginTop: h('1%'),
          }}>

          {/* View 1 */}

          <View style={{
              marginLeft:h('3%'),
          }}>
              {/* View 1 Image */}
          <View
            style={{
              height: h('40%'),
              width: w('50%'),
            }}>
            <Image
              style={{
                height: h('20%'),
                width: h('25%'),
                borderRadius: h('3%'),
              }}
              source={item.img}
              resizeMode={'cover'}
            />
            <Text style={{fontWeight:'600', fontSize: h('3'), marginBottom: h('1%')}}> {item.name} </Text>
           {/* Image Parallel Text */}
            <View style={{flexDirection:'row'}}>
            <View>
            <Image
                style={{
                height: h('4%'),
                width: h('4%'),
                borderRadius: h('33%'),
              }}
              source={item.img}
              resizeMode={'cover'}
            />
              </View>
              <View>
                  <Text> {item.imgtxt}</Text>
              </View>
              </View>
              <Text style={{fontSize:h('2%')}}> {item.Time} </Text>
          </View>
          </View>



              {/* View 2 */}

          <View style={{
              marginRight:h('3%')
          }}>
          <View
            style={{
              height: h('40%'),
              width: w('45%'),
            //   backgroundColor: 'yellow',
            }}>
            <Image
              style={{
                height: h('20%'),
                width: h('25%'),
                borderRadius: h('3%'),
              }}
              source={item.img}
              resizeMode={'cover'}
            />
            <Text style={{fontWeight:'600', fontSize: h('3'), marginBottom: h('1%')}}> {item.name1} </Text>
           



              <View style={{flexDirection:'row'}}>
              <View>
              <Image
              style={{
                height: h('4%'),
                width: h('4%'),
                borderRadius: h('33%'),
              }}
              source={item.img}
              resizeMode={'cover'}
            />
              </View>
              <View>
                  <Text> {item.imgtxt1} </Text>
              </View>
            
              </View>

              <Text style={{fontSize:h('2%')}}> {item.Time1} </Text>
          </View>
          </View>


          

        </View>
      );

    render(){
        return(
            <SafeAreaView style={{flex:1}} >
                <View style={{flex:1, backgroundColor:'#E5E5E5'}} >
                   <View style={{alignItems:'center'}}>
                   <TextInput style={{
                        height: h('8%'),
                        width: w('90%'),
                        // backgroundColor:'#ada',
                        borderWidth: h('0.1%'),
                        borderRadius: h('4%'),
                        marginTop: h('2%'),
                    }}  placeholder={"Search Recipe"}>  
                    </TextInput>
                   </View>

                    <View style={{
                        height: h('92%'),
                        width: w('100%'),
                        // backgroundColor:'#ada'
                    }}>
                          <FlatList
                        data={this.state.data}
                        renderItem={({item, index}) => this.design(item, index)}
                        // keyExtractor={(item) => item.name}
                     />
                    </View>


                </View>
            </SafeAreaView>
        )
    }
}