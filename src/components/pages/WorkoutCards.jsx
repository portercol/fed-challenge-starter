// import React, Project & Button component and project data
import React from "react";
import Project from "../Project";
import projectData from "../projectData.json";

// create WorkoutCard functional component
function WorkoutCard() {
    
    // return data to page using project data that will be displayed in a card from Project component
    // using properties from projectData to display data
    // use .map to map over the properties to find the property needed for each section of the card
    return (
        <div className="container">
            <h1 className="header">iFit Challenge</h1>
            <div className="row justify-content-around">

                {projectData.map(project => {
                    return (
                        <Project
                            description={project.description} 
                            img={project.img} 
                            link={project.link} 
                            name={project.name} 
                            >
                        </Project>
                    );
                })}
            </div>
        </div>
    )
}

// export WorkoutCard component
export default WorkoutCard;