import React,{useReducer} from 'react';

export default(reducer,actions,initialState)=>{
    const Context = React.createContext();
    const Provider =({children})=>{
        const [state,dispatch] = useReducer(reducer,initialState)
        const boundActions = {}
        for(let key in actions){
            //key==='addBlogPost'
            boundActions[key] = actions[key](dispatch)
        }
        //bound actions are nothing but an object that contain all the actions you would want to
        //perform on the data. For each key in the 'actions' argument {key:value}, the key is
        //extracted and assigned the value of the function that is its 'value'.
        //{key:value}, the value here is a function. We have assigned a function to the key,
        //in an object. The key represents/refers to the value, ie, the action function.
        return(
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        )
    }

    return {Context,Provider}

}