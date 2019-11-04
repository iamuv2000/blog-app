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
            <Text style={styles.inputTitle}>{blogPost.title}</Text>
            <Text style={styles.inputContent}>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputTitle:{
        fontSize:22,
        borderColor: 'rgba(0,0,0,0.4)',
        borderBottomWidth:1,
        paddingVertical:2,
        marginTop:20,
        marginHorizontal:10,
    },
    inputContent:{
        fontSize:18,
        paddingVertical:2,
        marginTop:20,
        marginHorizontal:10,
        height:'80%',
    }
})

ShowScreen.navigationOptions=({navigation})=>{
    return{
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
        <Feather name="edit" size={25} style={{marginRight:15}}/>
        </TouchableOpacity>
    }
}

export default ShowScreen;