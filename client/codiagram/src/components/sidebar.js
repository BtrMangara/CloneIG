import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import { Link, Outlet } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa'

const Sidebar = () => {
    const [LoginStatus, setLoginStatus] = useState(false);
    return (
        <div>
            <div className='container-fluid min-vh-100'>
                <div className='row'>
                    <div className='col-4 col-lg-2 col-md-4 col-sm-4 text-dark border-end text-center min-vh-100'>
                        <div className='mt-3 sticky-top'>
                            <div>
                                <h4 className='logo-font'>Codiagram</h4>
                                <hr/>
                            </div>
                            <div className='row align-items-center text-center' style={{minHeight:'60vh'}}>
                            <div className='col-12 sidebar'>
                                <div className='d-flex mt-2 nav-item justify-content-center'>
                                    <Link to={'/'} className='nav-link'>
                                        <p className='mt-2'><span><AiFillHome className='mb-1'/></span> Home</p>
                                    </Link>
                                </div>

                                <div className='d-flex mt-2 nav-item justify-content-center'>

                                    <Link to={'/Profile'} className='nav-link'>
                                        <p className='mt-2 '><span>
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle me-2" style={{width: "25px"}}alt="Avatar" /></span> Profile</p>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-8 col-lg-10 col-md-8 col-sm-8'>
                        <Outlet/>
                     </div>  
                </div>

            </div>

              
        </div>
        
    );
}

export default Sidebar;
