import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ImageComponentHeader from './ImageComponentHeader'

const ImageComponent = (): any => {
    return (
        <View>
            <ImageComponentHeader/>
            <Image 
                source={require('../../src/assets/images/mayoo.jpeg')}
            />
        </View>
    )
}

export default ImageComponent
