import React from 'react';

const Home = () => {
    return (
        <div className='container-fluid mt-4 mb-4'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-6 col-sm-12 col-md-12 min-wh-100'>

                    <div className='card border border-0 '>
                        <div className="card-header text-start bg-white mb-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle me-2 img-fluid" style={{width: "30px"}}alt="Avatar" />
                            BtrMangara
                        </div>
                        <div className='justify-content-center'>
                        <img src="https://via.placeholder.com/50" className="card-img-top img-fluid w-75 bordered" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="card-text text-start">
                                <p className='fs-6'>
                                    BtrMangara <span className='ms-1 fw-normal'>Hello Semuanyaa</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card border border-0 '>
                        <div className="card-header text-start bg-white mb-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle me-2" style={{width: "30px"}}alt="Avatar" />
                            BtrMangara
                        </div>
                        <div className='justify-content-center'>
                        <img src="https://via.placeholder.com/50" className="card-img-top img-fluid w-75 bordered" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
