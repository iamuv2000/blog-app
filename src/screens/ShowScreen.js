import React,{useContext} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {Context as BlogContext} from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
    id = navigation.getParam('id')
    const {state} = useContext(BlogContext)
    const blogPost = state.find((blogpost)=> blogpost.id===id)
    console.log(blogPost)
    return(
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

ShowScreen.navigationOptions=({navigation})=>{
    return{
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
        <Feather name="edit" size={25} style={{marginRight:15}}/>
        </TouchableOpacity>
    }
}

export default ShowScreen;