import React,{useContext} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Context as BlogContext} from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
    id = navigation.getParam('id')
    const {state} = useContext(BlogContext)
    const blogPost = state.find((blogpost)=> blogpost.id===id)
    console.log(blogPost)
    return(
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ShowScreen;