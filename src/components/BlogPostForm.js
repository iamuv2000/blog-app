import React,{useState,useContext} from 'react'
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'
import {Context as BlogContext} from '../context/BlogContext'

const BlogPostForm =({onSubmit,initialValues}) => {

    const [title,setTitle]=useState(initialValues.title);
    const [content,setContent]=useState(initialValues.content);

    return(
        <View>
            <TextInput 
                style={styles.inputTitle}
                placeholder="Enter Title"
                onChangeText={(text)=>setTitle(text)}
                value={title}
            />
            <TextInput 
                style={styles.inputContent}
                multiline={true} 
                placeholder="Type here..."
                onChangeText={(text)=>setContent(text)}
                value={content}
            />
            <Button title="Save blog post" onPress={()=>onSubmit(title,content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues:{title:'',content:''}
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

export default BlogPostForm