import React from 'react';
import pict from './../register.webp'

const Register = () => {
    return (
        <div className='container-fluid'>
           <div className='row justify-content-center mt-3'>
            <div className='col-12 col-lg-4 col-md-4'>
            <div class="card text-center shadow-lg">
                <div class="card-body">
                    <h4 className='logo-font mb-3'>Codiagram</h4>
                    <p className='fw-light'>Sign up to see photos and videos from your friends.</p>
                    <img src={pict} alt='' className='img-fluid w-50'></img>
                    <form className='align-items-center'>
                        <div className="mb-3">                             
                            <input type="email" className="form-control rounded-0" placeholder='Input Your Email Here' id="email" />
                        </div>
                        <div className="mb-3">
                               <input type="text" className="form-control rounded-0" placeholder='Input Your Fullname' id="password"/>
                        </div>
                        <div className="mb-3">
                               <input type="text" className="form-control rounded-0" placeholder='Input Your Username Here' id="password"/>
                        </div>
                        <div className="mb-3">
                               <input type="password" className="form-control rounded-0" placeholder='Input Your Password Here' id="password"/>
                        </div>
                         <button type="submit" className="btn btn-primary w-100 opacity-75 text-light">Submit</button>
                    </form>
                </div>
                <div class="card-footer text-body-secondary">
                <p className='text-decoration-none fw-normal'>Have An Account ? <a href={'/Login'} className='text-decoration-none link-underline-opacity-50'>Login</a></p>
                </div>
            </div>
            </div>
           </div>
        </div>
    );
}

export default Register;
