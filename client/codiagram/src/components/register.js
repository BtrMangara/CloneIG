import React, { useEffect, useState } from 'react';
import pict from './../register.webp';
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux'
import { RegisterUser } from '../actions/UserAction';
import Swal from 'sweetalert2'

const Register = () => {

    const {
        handleSubmit,
        formState: {errors}} = useForm();
    
    
    const dispatch = useDispatch();
    const {registerUserResult, registerUserError} = useSelector((state)=> state.UserReducers)
    const [isRegister, setisRegister] = useState(false);
    const navigate = useNavigate();

    const [User, setUser] = useState({
        email: '',
        fullname: '',
        username: '',
        password: ''
    });

    
    const registerUser= (data)=>{
        data = User;
        // console.log(data)
        setisRegister(true)
        dispatch(RegisterUser(data))
        

    }

    useEffect(() => {
        isRegister ?
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        : 
          Swal.fire({
            icon: 'succes',
            title: registerUserResult,
            text: 'Silahkan Login!',
        })
    }, [registerUserResult,registerUserError]);

    return (
        <div className='container-fluid'>
           <div className='row justify-content-center mt-3'>
            <div className='col-12 col-lg-4 col-md-4'>
            <div className="card text-center shadow-lg">
                <div className="card-body">
                    <h4 className='logo-font mb-3'>Codiagram</h4>
                    <p className='fw-light'>Sign up to see photos and videos from your friends.</p>
                    <img src={pict} alt='' className='img-fluid w-50'></img>
                    <form onSubmit={handleSubmit(registerUser)} className='align-items-center'>
                        <div className="mb-3">                             
                            <input type="email" className="form-control rounded-0" placeholder='Input Your Email Here' id="email" onChange={(e)=> setUser({...User,email:e.target.value})} />
                        </div>
                        <div className="mb-3">
                               <input type="text" className="form-control rounded-0" placeholder='Input Your Fullname' id="fullname"onChange={(e)=> setUser({...User,fullname:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                               <input type="text" className="form-control rounded-0" placeholder='Input Your Username Here' id="username" onChange={(e)=> setUser({...User,username:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                               <input type="password" className="form-control rounded-0" placeholder='Input Your Password Here' id="password" onChange={(e)=> setUser({...User,password:e.target.value})}/>
                        </div>
                         <button type="submit" className="btn btn-primary w-100 opacity-75 text-light">Submit</button>
                    </form>
                </div>
                <div className="card-footer text-body-secondary">
                <p className='text-decoration-none fw-normal'>Have An Account ? <a href={'/Login'} className='text-decoration-none link-underline-opacity-50'>Login</a></p>
                </div>
            </div>
            </div>
           </div>
        </div>
    );
}

export default Register;
