import axios from "axios";
import Swal from "sweetalert2";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

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
            dispatch({
                type: REGISTER_USER,
                payload:{
                    loading:false,
                    data: result.data.message,
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

export const LoginUser = (data)=>{
    return async(dispatch)=>{
        dispatch({
            type : LOGIN_USER,
            payload:{
                loading : true,
                data : false,
                errorMessage : false
            }
        })

        axios({
            method: 'POST',
            url : 'http://localhost:3006/users/login',
            data : data,
            timeout : 120000
        })
        .then((result)=>{
            dispatch({
                type : LOGIN_USER,
                payload:{
                    loading : false,
                    data : result,
                    errorMessage : false
                }
            })
        })
        .catch((error)=>{
            // console.log(error)
            dispatch({
                type : LOGIN_USER,
                payload:{
                    loading : false,
                    data : false,
                    errorMessage : error.response.data.message
                }
            })
        })

    }
}