import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/PostsAction';

const Home = () => {
    
    const dispatch = useDispatch();

    const {getPostResult, getPostLoading, getPostError } = useSelector((state)=>state.PostsReducers);
 
    useEffect(() => {
        console.log('1. use Effect component did mount')
        dispatch(getPosts())
    }, [dispatch]);
    
    
    return (
        <div className='container-fluid mt-4 mb-4'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-6 col-sm-12 col-md-12 min-wh-100'>

                    {
                        getPostResult.length>0 ?(
                            getPostResult.map((post)=>{
                                const username = post.User.username;
                                return(
                                    <div className='card border border-0' key={post.id}>
                                    <div className="card-header text-start bg-white mb-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle me-2 img-fluid" style={{width: "30px"}}alt="Avatar" />
                                        {username}
                                    </div>
                                    <div className='justify-content-center'>
                                    <img src={post.image} className="card-img-top img-fluid w-75 bordered" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text text-start">
                                            <p className='fs-6'>
                                                {username} <span className='ms-1 fw-normal'>{post.caption}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            
                            )
                        )
                        : getPostLoading?(
                        <h3>Loading...</h3>
                        )
                        :(
                            <div><h1>{getPostError? getPostError : "data Kosong"}</h1></div>
                        )
                    }   
                     
                    

                </div>
            </div>
        </div>
    );
}

export default Home;
