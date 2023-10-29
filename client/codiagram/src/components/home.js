import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Home = () => {
    
    const [Posts, setPosts] = useState([]);

    const getPosts = async()=>{
        await axios({
            method:'GET',
            url:'http://localhost:3006/post/getPost'
        })
        .then(result=>{
            // console.log(result.data);
            setPosts(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    };

    useEffect(() => {
       getPosts();
    }, []);
    
    
    return (
        <div className='container-fluid mt-4 mb-4'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-6 col-sm-12 col-md-12 min-wh-100'>

                    {Posts.map((data)=>{
                       const username = data.User.username;
                        return(
                        
                    <div className='card border border-0' key={data.id}>
                        <div className="card-header text-start bg-white mb-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle me-2 img-fluid" style={{width: "30px"}}alt="Avatar" />
                            {username}
                        </div>
                        <div className='justify-content-center'>
                        <img src={data.image} className="card-img-top img-fluid w-75 bordered" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="card-text text-start">
                                <p className='fs-6'>
                                    {username} <span className='ms-1 fw-normal'>{data.caption}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    )
                })}

                </div>
            </div>
        </div>
    );
}

export default Home;
