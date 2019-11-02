import React,{useState,useContext} from 'react'
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'
import {Context as BlogContext} from '../context/BlogContext'

const EditScreen = ({navigation}) => {
    id = navigation.getParam('id');
    const {state,addBlogPost} = useContext(BlogContext)
    const blogPost = state.find((blogpost)=> blogpost.id===id)
    console.log(blogPost);
    const [title,setTitle]=useState(blogPost.title);
    const [content,setContent]=useState(blogPost.content);
    return(
        <View>
            <TextInput 
                style={styles.inputTitle}
                placeholder={title}
                onChangeText={(text)=>setTitle(text)}
                value={title}
            />
            <TextInput 
                style={styles.inputContent}
                multiline={true} 
                placeholder={content}
                onChangeText={(text)=>setContent(text)}
                value={content}
            />
            <Button title="Edit" onPress={()=>{
                addBlogPost(title,content,()=>{
                    navigation.navigate('Index')
                })
            }}
            />
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

export default EditScreen