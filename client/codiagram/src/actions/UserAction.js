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

        await axios({
            method:'POST',
            url : 'localhost:3006/users/register',
            data : data,
            timeout : 120000
        })
        .then((result)=>{
            dispatch({
                type: REGISTER_USER,
                payload:{
                    loading:false,
                    data: result.data,
                    errorMessage : false
                }
            })
        })
        .catch((error)=>{
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