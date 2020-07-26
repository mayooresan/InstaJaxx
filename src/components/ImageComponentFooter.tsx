import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const ImageComponentFooter = () => {
    return (
        <View style={{marginTop:16}}>
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
            <Text style={{margin:16, fontWeight: 'bold'}}>130 Likes</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontWeight: 'bold'}}>jaydraws2019</Text>
                <Text> Just took a shot at maple tree business city</Text>
            </View>
        </View>
    )
}

export default ImageComponentFooter
