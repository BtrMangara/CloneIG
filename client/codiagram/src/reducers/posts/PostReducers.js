import {GET_POSTS} from '../../actions/PostsAction'

const initialState ={
    getPostResult : false,
    getPostLoading : false,
    getPostError : false
}

const PostReducers  = (state = initialState , action)=>{
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                getPostResult : action.payload.data,
                getPostLoading : action.payload.loading,
                getPostError : action.payload.errorMessage
            }
        
        
        default: 
            return state;
    }


}

export default PostReducers;
