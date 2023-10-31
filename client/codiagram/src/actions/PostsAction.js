import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_USER_DRAFT = "GET_POSTS_USER_DRAFT";

export const getPosts = () =>{
    return (dispatch)=>{
        console.log('2. Masuk Ke Actions')
        dispatch({
            type: GET_POSTS,
            payload: {
                loading :true,
                data: false,
                errorMessage:false
            }
        })

        axios({
            method :"GET",
            url :"http://localhost:3006/post/getPost",
            timeout: 120000
        })
        .then((result)=>{
            console.log('3. Berhasil Get Data' , result.data)
            dispatch({
                type: GET_POSTS,
                payload: {
                    loading :false,
                    data: result.data,
                    errorMessage:false
                }
            })

        })
        .catch((error)=>{
            console.log('3. Error',error.message)
            dispatch({
                type: GET_POSTS,
                payload: {
                    loading :false,
                    data: false,
                    errorMessage:error.message
                }
            })
        })
    }
}