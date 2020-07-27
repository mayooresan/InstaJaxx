import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'

const ImageComponentFooter = (props: {title: String, likes: Number, userName: String}) => {
    return (
        <SafeAreaView style={{marginTop:16}}>
             <View style={{flexDirection:'row'}}>
                 <View style={{flexDirection:'row', width:'90%'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../src/assets/images/heart.png')}
                                style={{width:30, height:30, marginLeft:16, resizeMode: 'contain'}}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Image
                                source={require('../../src/assets/images/comment.png')}
                                style={{width:30, height:30, marginLeft:16, resizeMode: 'contain'}}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Image
                                source={require('../../src/assets/images/messages.png')}
                                style={{width:30, height:30, marginLeft:16, resizeMode: 'contain'}}
                            />
                        </TouchableOpacity>
                        
                 </View>
                 <TouchableOpacity>
                    <Image
                            source={require('../../src/assets/images/bookmark.png')}
                            style={{width:30, height:30, resizeMode: 'contain'}}
                        />
                    </TouchableOpacity>
             </View>
            <Text style={{margin:16, fontWeight: 'bold'}}>{props.likes} Likes</Text>
            <View style={{flexDirection:'row', alignItems:'center', paddingLeft:16, paddingRight:16}}>
                    <Text><Text style={{fontWeight: 'bold'}}>{props.userName}</Text> {props.title} </Text>
            </View>
        </SafeAreaView>
    )
}

export default ImageComponentFooter
