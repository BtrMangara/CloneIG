import React from 'react';
import Post from './post';
import Draft from './draft';
import {BsThreeDots} from'react-icons/bs';
import {BsBookmark,BsGrid3X3Gap} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

const Profile = () => {
    return (
        <div className='container-fluid mt-4 mb-4'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-12 col-sm-12 col-md-12 min-wh-100 justify-content-center'>

                    <div className='row g-0 justify-content-center align-items-center'>
                        <div className='col-5 col-lg-5 col-md-5 col-sm-3'>
                            <img src="https://via.placeholder.com/500" className='img-fluid rounded-circle w-50' alt=''/>
                        </div>
                        <div className='col-7 col-lg-7 col-md-7 col-sm-5 text-start mt-lg-5'>
                            <div className='dropdown text-end me-lg-5'>
                            <button className="btn btn-secondary dropdown-toggle btn-light btn-sm-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsThreeDots/>
                            </button>
                            <ul className="dropdown-menu dropdown-sm-menu ">
                                <li><div className="dropdown-item text-danger" href="#"><FiLogOut className='me-2'/>Log Out</div></li>
                            </ul>
                            </div>
                            BtrMangara
                            <p></p>
                            Butar Butar Mangara
                            <p className='fs-sm-6 fs-6 fw-light mt-3 w-50 text-justify'>
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </div>

                   
                    <nav className='mt-5'>
                        <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                <BsGrid3X3Gap className='me-2'/>Post
                            </button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                               <BsBookmark className='me-2'/> Draft
                            </button>
                        </div>
                    </nav>

                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <Post/>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <Draft/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;
