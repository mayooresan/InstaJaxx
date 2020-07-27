import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ImageComponentHeader from './ImageComponentHeader'
import ImageComponentFooter from './ImageComponentFooter'

interface ImageData {
    title: String;
    Uri: string;
}

const ImageComponent = (props: ImageData): any => {
    return (
        <View style={{marginTop:32}}>
            <ImageComponentHeader/>
            <Image source={{uri: props.Uri}} 
                style={{ resizeMode: 'cover', width: '100%', height:300 }}
            />
            <ImageComponentFooter title={props.title}/>
        </View>
    )
}

export default ImageComponent
