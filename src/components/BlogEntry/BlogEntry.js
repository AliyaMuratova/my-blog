import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const BlogEntry = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = () => {
        const url = `http://localhost:3002/posts`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
    };

    useEffect(() => fetchData(), [])

    return (
        <>
            {
                posts.map((post, index) => {
                    return (
                        <>
                            <div key={index} className="w3-card-4 w3-margin w3-white">
                                <img src={post.img_url} alt="Nature" style={{width: '100%'}}/>
                                <div className="w3-container">
                                    <h3><b>{post.title}</b></h3>
                                    <h5>{post.tags},<br/><span className="w3-opacity">{post.created_date}</span></h5>
                                </div>
                                <div className="w3-container">
                                    <p>{post.desc}</p>
                                    <div className="w3-row">
                                        <div className="w3-col m8 s12">
                                            <p><Link to="/post">
                                                <button className="w3-button w3-padding-large w3-white w3-border">
                                                    <b>READ MORE »</b>
                                                </button>
                                            </Link>
                                            </p>
                                        </div>
                                        <div className="w3-col m4 w3-hide-small">
                                            <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span
                                                className="w3-tag">{post.count_comments}</span></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </>
                    )
                })
            }

        </>
    );
};

export default BlogEntry;