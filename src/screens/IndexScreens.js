import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList,Button,TouchableOpacity} from 'react-native'
import {Context as BlogContext} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'
import { Directions } from 'react-native-gesture-handler'

const IndexScreen = ({navigation}) =>{
    const {state,addBlogPost,deleteBlogPost} = useContext(BlogContext)
    return (
        <View>
         {state.length===0
            ?
            <View style={styles.noBlogView}>
                <Text style={styles.noBlogViewText}>No blogs to show</Text>
                <Button title='Add Blog' onPress={()=>navigation.navigate('Create')}/>
            </View>
            :
            <FlatList
                data={state}
                keyExtractor={(blogPost)=>blogPost.id.toString()}
                renderItem={({item})=>{
                    return( 
                    <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    )
                }
                }/>
            }
        </View>
    )
}

IndexScreen.navigationOptions=({navigation})=>{
    return{
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
            <Feather name="plus" size={20} style={{marginRight:15}}/>
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    title:{
        fontSize:18,
    },
    icon:{
        fontSize: 24
    },
    noBlogView:{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'70%'
    },
    noBlogViewText:{
        fontSize:18,
        color:'gray'
    }
})

export default IndexScreen