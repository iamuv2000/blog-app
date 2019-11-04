import React,{useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Context as BlogContext} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation}) => {
    id = navigation.getParam('id');
    const {state,editBlogPost} = useContext(BlogContext)
    const blogPost = state.find((blogpost)=> blogpost.id===id)
    console.log(blogPost);

    return <BlogPostForm 
    initialValues={{title:blogPost.title,content:blogPost.content}}
    onSubmit={(title,content)=>{
        editBlogPost(title,content,id,()=>navigation.pop())
    }}
    />
}

const styles = StyleSheet.create({
})

export default EditScreen