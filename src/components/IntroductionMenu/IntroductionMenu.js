import React from 'react';
import AboutCard from "../AboutCard/AboutCard";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";

const IntroductionMenu = () => {
    return (
            <div className="w3-col l4">
               <AboutCard />
                <Posts />
                <Tags />
            </div>
    );
};

export default IntroductionMenu;