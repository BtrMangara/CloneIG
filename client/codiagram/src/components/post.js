import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { BsThreeDots } from 'react-icons/bs';
import {GrUpdate} from 'react-icons/gr';

const Post = () => {

    const [showModals, setshowModals] = useState(false);
    return (
        <div className='mt-5'>
            <div className="container text-center">
            <div className="row mt-5">
                
                <div className="col icon-link-hover">
                    <img src='https://via.placeholder.com/500' className='img-fluid' alt='' onClick={()=>setshowModals(true)}></img>
                </div>
                <div className="col icon-link-hover">
                    <img src='https://via.placeholder.com/500' className='img-fluid' alt='' onClick={()=>setshowModals(true)}></img>
                </div>
                <div className="col icon-link-hover">
                    <img src='https://via.placeholder.com/500' className='img-fluid' alt='' onClick={()=>setshowModals(true)}></img>
                </div>
                <Modal
                    size="lg"
                    show={showModals}
                    onHide={() => setshowModals(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header className='border border-0' closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row pb-2 align-items-center'>
                            <div className='col-4'>
                                <img src='https://via.placeholder.com/500' className='img-fluid' alt=''></img>
                            </div>
                            <div className='col-8'>
                            <button className="btn btn-light dropdown-toggle btn-sm-sm float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsThreeDots/>
                            </button>
                            <ul className="dropdown-menu dropdown-sm-menu ">
                                <li><div className="dropdown-item" href="#"><GrUpdate className='me-2'/>Update</div></li>
                            </ul>

                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle me-2" style={{width: "30px"}}alt="Avatar" />
                            <span className='ms-2'>BtrMangara</span>
                            <p className='m-3' style={{textAlign:'justify'}}>Occaecat magna excepteur id est enim proident excepteur id quis qui. Lorem laboris dolor magna incididunt ullamco ex nostrud esse cillum in dolore ullamco Lorem aute. Occaecat sunt magna dolor amet proident sit magna. Consequat non tempor adipisicing ullamco consectetur reprehenderit est culpa proident amet consectetur in cupidatat reprehenderit. Veniam reprehenderit incididunt est nostrud nostrud Lorem qui deserunt nostrud sint excepteur quis proident. Id deserunt elit ad dolor ad elit pariatur reprehenderit sint eu velit culpa.</p>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal> 
                
                
                </div>
            </div>
        </div>
    );
}

export default Post;
