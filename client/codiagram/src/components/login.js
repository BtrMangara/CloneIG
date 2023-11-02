import React, { useEffect, useState } from 'react';
import logo from '../login.png'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../actions/UserAction';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const {handleSubmit} = useForm();
    const [DLogin, setDLogin] = useState({
        email:'',
        password:''
    });
    const [isLogin, setisLogin] = useState(false);
    const dispatch = useDispatch();

    const {loginUserResult, loginUserError} = useSelector((state)=> state.UserReducers)
    const LoginHandler =(data)=>{
        data = DLogin;
        setisLogin(true)
        dispatch(LoginUser(data))
        // console.log(data)
    }

    useEffect(() => {
        if(isLogin === true){
            loginUserResult?
                Swal.fire({
                    title: loginUserResult.data.message,
                    text:'Terimakasih!',
                    icon:'success'
                }).then((result)=>{
                    localStorage.setItem('Authorization', loginUserResult.data.token);
                    navigate('/Profile')
                })
            :  Swal.fire({
                title: loginUserError,
                text:'Silahkan Coba Kembali',
                icon:'error'
            })
    }
    }, [loginUserResult, loginUserError]);

    return (
        <div className='container-fluid d-flex justify-content-evenly min-vh-100'>
            <div className='row align-items-center '>
                <div className='col-12 col-lg-6 col-sm-12'>
                    <img src={logo} alt='' className='img-fluid w-100'></img>
                </div>
                <div className='col-12 col-lg-6 col-sm-12 min-lg-vh-100 d-flex align-sm-items-center justify-content-center'>
                <div className="card text-center w-100 rounded-0">
                    <div className="card-body">
                        <h4 className='logo-font mb-5'>Codiagram</h4>
                        <div className='text-start'>
                        <form onSubmit={handleSubmit(LoginHandler)} className='align-items-center'>
                            <div className="mb-3">                             
                                <input type="email" className="form-control rounded-0" placeholder='Input Your Email Here' id="username" onChange={(e)=>setDLogin({...DLogin,email:e.target.value})}/>
                                </div>
                            <div className="mb-3">
                                <input type="password" className="form-control rounded-0" placeholder='Input Your Password Here' id="password" onChange={(e)=>setDLogin({...DLogin,password:e.target.value})}/>
                            </div>
                           
                            <button type="submit" className="btn btn-primary w-100 opacity-75 text-light">Submit</button>
                        </form>
                        </div>

                    </div>
                    <div className="card-footer bg-white">
                        <p className='text-decoration-none fw-normal'>Dont Have an Account ? <a href={'/register'} className='text-decoration-none link-underline-opacity-50'> Sign Up </a></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
