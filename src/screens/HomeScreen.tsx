import React from 'react'
import {Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import Header from '../../src/components/Header'
import ImageComponent from '../../src/components/ImageComponent'

const HomeScreen = (): any => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
    
    const renderItem = ( ): any => (
        <ImageComponent/>
    );

    return (
        <View style={{flex:1}}>
            <Header/>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> 
        </View>
    )
}

export default HomeScreen
