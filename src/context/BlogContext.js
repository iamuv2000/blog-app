import createDataContext from './createDataContext'


const blogReducer = (state,action)=>{
    switch(action.type){
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

const addBlogPost = (dispatch) =>{
    return(title,content,callback)=>{
        dispatch({type:'add_blogpost',payload:{title,content}});
        callback()
    }
}

const deleteBlogPost = (dispatch) =>{
    return(id)=>{
        dispatch({type:'delete_blogpost',payload:id})
    }
}

const showBlogPost = (dispatch) =>{
    return(id)=>{
        dispatch({type:'show_blogpost',payload:id})
    }
}

const editBlogPost = (dispatch) =>{
    return(title,content,id,callback)=>{
        dispatch({type:'edit_blogpost',payload:{title,content,id}})
        callback()
    }
}

export const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost,showBlogPost,editBlogPost},
    []
)

//{title:'TEST POST', content: 'TEST CONTENT', id:1}