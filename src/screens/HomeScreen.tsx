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
    
    const renderItem = ({ item } : any ): any => (
        <ImageComponent 
          title={item.alt_description} 
          Uri={item.urls.regular} 
          likes={item.likes} 
          profileImage = {item.user.profile_image.small}
          userName = {item.user.username}
          location = {item.user.location}
        />
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
