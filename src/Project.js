import React, { useState } from 'react';
import githubs from './images/github_l.svg';

function Project({ title, description, languages, githubLink, videoUrl, imageUrl }) {
  const [showVideo, setShowVideo] = useState(false);

  // Fonction pour ouvrir/fermer la popup avec la vidéo YouTube
  const togglePopup = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="Project">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="Project-languages">
        {languages.map((language, index) => (
          <span className="Language-tag" key={index}>{language}</span>
        ))}
      </div>
      <button className="See-more" onClick={togglePopup}>
        {showVideo ? "Voir moins" : "Voir plus"}
      </button>
      <a className="See-more" href={githubLink}>
        <img src={githubs} alt="GitHub" className="GitHub-logo" />
      </a>

      {/* Affichage de la vidéo ou de l'image */}
      {showVideo ? ( videoUrl ? (<div className="Video-popup">
          <div className="Video-popup-content">
            <iframe
              title="video"
              width="560"
              height="315"
              src={videoUrl}
              allowFullScreen
            ></iframe>
          </div>
        </div>)
      :(
        <img src={imageUrl} alt="Project" className="Project-image" />
       )): 
      // Si l'URL de la vidéo n'est pas fournie, ne rien afficher
      <div>
        </div>
      }
    </div>
  );
}

export default Project;