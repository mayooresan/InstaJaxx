import React, {useEffect} from 'react'
import {Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import Header from '../../src/components/Header'
import ImageComponent from '../../src/components/ImageComponent'
import {connect, useSelector, useDispatch} from 'react-redux'
import { fetchImages } from '../../src/redux/actions'
import {RootState} from '../../src/redux/reducer'

const HomeScreen = (): any => {
  const dispatch = useDispatch()
  const imageData = useSelector( (state: RootState) => state.data)
  
  useEffect(() => {
      dispatch(fetchImages())
  }, [])
    
    const renderItem = ({ item } ): any => (
        <ImageComponent title={item.title} Uri={item.url}/>
    );

    return (
        <View style={{flex:1}}>
            <Header/>
            <FlatList
                data={imageData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            /> 
        </View>
    )
}

export default HomeScreen
