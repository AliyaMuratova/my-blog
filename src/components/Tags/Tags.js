import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../constants";

const Tags = () => {
    const [tags, setTags] = useState([])

    const getTags = () => {
        fetch(BASE_URL + '/tags')
            .then(response => response.json())
            .then(data => setTags(data))
    }

    useEffect(getTags, [])

    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p>
                    {
                        tags.map((item, index) => {
                            return (
                                <span key={index} className="w3-tag w3-light-grey w3-small w3-margin-bottom">{item.tag}</span>
                            )
                        })
                    }
                </p>
            </div>
        </div>
    );
};

export default Tags;