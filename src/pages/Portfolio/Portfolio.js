import React from 'react';
import css from './Portfolio.module.css';

import Project from '../../components/Project/Project';
import projectData from '../../project-data/projectData';

const Portfolio = () => {


    return (
        <div className={css.Portfolio}>
            <div className={css.Wrapper}>
                {projectData.reverse().map((data, i) => {
                    return (
                        <Project
                            image={data.image}
                            heading={data.heading}
                            linkCheck={data.linkCheck}
                            linkFiles={data.linkFiles}
                            skills={data.skills}
                            description={data.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;
