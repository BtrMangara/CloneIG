import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";


export const RegisterUser = (data)=>{
    
    return async (dispatch)=>{
        dispatch({
            type : REGISTER_USER,
            payload:{
                loading : true,
                data : false,
                errorMessage : false
            }
        })
        // console.log(data)
        await axios({
            method:'POST',
            url : 'http://localhost:3006/users/register',
            data : data,
            timeout : 120000
        })
        .then((result)=>{
            console.log(result)
            dispatch({
                type: REGISTER_USER,
                payload:{
                    loading:false,
                    data: result.config.data.message,
                    errorMessage : false
                } 
            })
            // console.log(result)
        })
        .catch((error)=>{
            // console.log(error)
            dispatch({
                type: REGISTER_USER,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage : error.response.data.message
                }
            })
        })


    }
}