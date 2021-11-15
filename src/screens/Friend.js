import React from "react";
import {View, Text, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { StylishInput } from "../components/StylishInput";
import { Header } from "../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { isTemplateElement } from "@babel/types";

export class Friend extends React.Component{
    state = {
        data: [
          {
            name: 'Lina',
            email: 'Linas@gmail.com',
            img: require('../assests/pf1.png'),
            img1: require('../assests/tra.png'),
          },
          {
            name: 'Mark',
            email: 'Mark@gmail.com',
            img: require('../assests/5.png'),
            img1: require('../assests/tra.png'),
          },
          {
            name: 'Michael',
            email: 'Michael@gmail.com',
            img: require('../assests/6.png'),
            img1: require('../assests/tra.png'),
          },
          {
            name: 'Jones',
            email: 'Jones@gmail.com',
            img: require('../assests/7.png'),
            img1: require('../assests/tra.png'),
          },
          {
            name: 'James',
            email: 'James@gmail.com',
            img: require('../assests/8.png'),
            img1: require('../assests/tra.png'),
          },
          {
            name: 'Kathrine',
            email: 'Kathrine@gmail.com',
            img: require('../assests/6.png'),
            img1: require('../assests/tra.png'),
          },
          {
            name: 'Maria',
            email: 'Maria@gmail.com',
            img: require('../assests/5.png'),
            img1: require('../assests/tra.png'),
          },
          
        ],
        selectedItem: '',
      };

      RemoveByIndex = (index) => {
        const arr = this.state.data;
        arr.splice(index, 1);
    
        this.setState({data: arr});
      };

      design = (item, index) => (
        <TouchableOpacity
          style={{
            height: h('15%'),
            width: w('100%'),
            // backgroundColor: 'pink',
            flexDirection: 'row',
            borderBottomWidth: h('0.1%')
          }}>
          <View
            style={{
              height: h('15%'),
              width: '25%',
            //   backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: h('10%'),
                width: h('10%'),
                // borderRadius: h('33%'),
              }}
              source={item.img}
              resizeMode={'cover'}
            />
          </View>


          <View
            style={{
              height: h('15%'),
              width: '50%',
            //   backgroundColor: 'green',
            //   alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{
                color:'#000',
                fontWeight:'600',
                fontSize: h('3.5%'),
            }}>
              {item.name}
            </Text>
            <Text style={{
                fontSize: h('2.5%'),
            }}>
            {item.email}
            </Text>
          </View>

          <View
            style={{
              height: h('15%'),
              width: '25%',
              // backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: h('4%'),
                width: h('4%'),
                borderRadius: h('33%'),
              }}
              source={item.img1}
              resizeMode={'cover'}
            />
          </View>

        </TouchableOpacity>
      );

      separator = () => (
        <View
          style={{
            height: h('1%'),
          }}
        />
      );
    
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <Header/>
                    <View style={{
                        height: h('92%'),
                        width: w('100%'),
                        // backgroundColor:'#820',
                    }}>
                         <FlatList
                        data={this.state.data}
                        renderItem={({item, index}) => this.design(item, index)}
                        keyExtractor={(item) => item.name}
                        ItemSeparatorComponent={() => this.separator()}  
                     />
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}