import React from 'react';
import AboutCard from "../AboutCard/AboutCard";
import PopularPosts from "../Posts/PopularPosts";
import Tags from "../Tags/Tags";

const IntroductionMenu = () => {

    return (
        <div className="w3-col l4">
            <AboutCard/>
            <PopularPosts/>
            <Tags/>
        </div>
    );
};

export default IntroductionMenu;