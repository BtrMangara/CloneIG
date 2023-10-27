import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import { Link, Outlet } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'

const Sidebar = () => {
    return (
        <div>
            <div className='container-fluid min-vh-100'>
                <div className='row '>
                    <div className='col-2 text-dark shadow border-end text-center  min-vh-100'>
                        <div className='mt-3'>
                            <h4 className='logo-font'>Codiagram</h4>
                            <hr/>
                        <div className='mt-2'>
                            <h5><span><AiFillHome/></span> Home</h5>
                        </div>
                        </div>
                    </div>

                    <div className='col-10'>
                        <Outlet/>
                     </div>  
                </div>

            </div>

              
        </div>
        
    );
}

export default Sidebar;
