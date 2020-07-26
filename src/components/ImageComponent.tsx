import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ImageComponentHeader from './ImageComponentHeader'
import ImageComponentFooter from './ImageComponentFooter'

const ImageComponent = (): any => {
    return (
        <View style={{marginTop:32}}>
            <ImageComponentHeader/>
            <Image 
                source={require('../../src/assets/images/mayoo.jpeg')}
            />
            <ImageComponentFooter/>
        </View>
    )
}

export default ImageComponent
