import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state,action)=>{
    switch(action.type){
        case 'get_blogposts':
            return action.payload;
        case 'add_blogpost':
            return[...state, {id: Math.floor(Math.random() * 9999) ,
                title: action.payload.title,
                content:action.payload.content
            } ]
        case 'delete_blogpost':
            return state.filter((blogPost)=>blogPost.id!==action.payload)
        case 'edit_blogpost':
            return  state.map((blogPost)=>{
                if(blogPost.id === action.payload.id){
                    return action.payload
                }
                 else{
                     return blogPost
                 }   
            })
        case 'show_blogpost':
        return state.filter((blogPost)=>{
            if(blogPost.id===action.payload){
                return blogPost.content
            }
        })

        default:
            return state
    }
}

const getBlogPost=(dispatch)=>{
    return async()=>{
       const response = await jsonServer.get('/blogPosts');
        dispatch({type:'get_blogposts',payload:response.data })
    }
}

const addBlogPost = (dispatch) =>{
    return async(title,content,callback)=>{
        await jsonServer.post('/blogPosts',{title,content})
        // dispatch({type:'add_blogpost',payload:{title,content}});
        callback()
    }
}

const deleteBlogPost = (dispatch) =>{
    return async(id)=>{
        await jsonServer.delete(`/blogPosts/${id}`)
        dispatch({type:'delete_blogpost',payload:id})
    }
}

const showBlogPost = (dispatch) =>{
    return(id)=>{
        dispatch({type:'show_blogpost',payload:id})
    }
}

const editBlogPost = (dispatch) =>{
    return async(title,content,id,callback)=>{
        await jsonServer.put(`/blogPosts/${id}`,{title,content})
        dispatch({type:'edit_blogpost',payload:{title,content,id}})
        callback()
    }
}

export const {Context,Provider} = createDataContext(
    blogReducer,
    {getBlogPost,addBlogPost,deleteBlogPost,showBlogPost,editBlogPost},
    []
)

//{title:'TEST POST', content: 'TEST CONTENT', id:1}