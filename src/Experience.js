import React from "react";

function Experience({ title, location,duration,description}) {

    return (
        <div className="Experience-item">
            <h3>{title}</h3>
            <p>Entreprise : {location}</p>
            <p>Durée : {duration}</p>
            <p>Description : {description}</p>
        </div>
    );
}

export default Experience;