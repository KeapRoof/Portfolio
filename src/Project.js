import React, { useState } from 'react';
import MouseHalo from './MouseHalo';

const Project = ({ title, description, languages, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="Project" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="Project-languages">
        {languages.map((language, index) => (
          <span className="Language-tag" key={index}>{language}</span>
        ))}
      </div>
      <a className="See-more" href={link}>Voir plus</a>

      {/* Afficher le halo si le projet est survolé */}
      {isHovered && <MouseHalo />}
    </div>
  );
};

export default Project;
