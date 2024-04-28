import React from 'react';
import './App.css'; // Créez un fichier Portfolio.css pour vos styles
// Import images
import keap from './images/keap.jpg';
import pdp from './images/pdp.jpg';
import SkillsSlider from './SkillsSlider';
import githubs from './images/github_l.svg';
import linkedin from './images/linkedin.svg';
import phone from './images/phone.svg';
import mail from './images/mail.svg';

function Portfolio() {
  const phoneNumber = "+33611441521";

  const handleRedirect = (url) => {
    window.location.href = url;
  };
  
  return (
    <div className="Portfolio">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet"/>
      <header className="Portfolio-header">
        <h1>Mon Portfolio</h1>
        <p>Haithem HADJ AZZEM</p>
        <img src={keap} alt="Keap" className="Portfolio-logo" />
      </header>
      <main className="Portfolio-main">
      <section className="About-me">
          <h2>À propos de moi</h2>
          <div className="About-me-card">
            <div className="About-me-content">
              <p>Bienvenue sur mon portfolio ! Je suis Haithem, étudiant en BUT Informatique, passionné par le développement.</p>
              <p>Depuis que j'ai découvert le monde du développement, j'ai été fasciné par sa capacité à créer des solutions innovantes. Mon intérêt pour le développement web et applicatif est né de mon désir de créer des expériences utilisateur uniques et efficaces.</p>
              <p>Je suis constamment à la recherche de nouvelles technologies et de nouvelles méthodes pour améliorer mes compétences. Développeur informatique en devenir.</p>
            </div>
            <div className="Profile-picture-container">
              <img src={pdp} alt="Photo de profil" className="Profile-picture" />
            </div>
          </div>
        </section>
      <section className="Experience">
        <h2>Expérience</h2>
        <div className="Experience-item">
          <h3>Stage Développeur Web</h3>
          <p>Entreprise : LIRIS</p>
          <p>Durée : 3 mois</p>
          <p>Description : J'ai travaillé sur le développement d'une plateforme européen permettant l'amélioration des traitements par imunothérapie.</p>
        </div>
        <div className="Experience-item">
          <h3>Stage découverte informaticien</h3>
          <p>Entreprise : Mairie de Vénissieux</p>
          <p>Durée : 2 semaine</p>
          <p>Description : J'ai découvert le monde professionel, j'ai aussi était innitié au développement Web.</p>
        </div>
        </section>
        {/* Ajoutez d'autres expériences si nécessaire */}
        <section className="Projects">
          <h2>Projets</h2>
          <div className="Project">
            <h3>Sportify</h3>
            <p>Sportify est une plateforme sociale dédiée aux passionnés de sport, offrant une expérience immersive où les utilisateurs peuvent partager des moments forts, interagir avec une communauté partageant les mêmes intérêts, participer à des pronostics sportifs, et même parier et jouer.</p>
            <div class="Project-languages">
              <span class="Language-tag">PHP</span>
              <span class="Language-tag">HTML</span>
              <span class="Language-tag">CSS</span>
              <span class="Language-tag">JavaScript</span>
            </div>
            <a class="See-more" href="https://github.com/KeapRoof/Sportify">Voir plus</a>
          </div>
          <div className="Project">
            <h3>Aide Hospitalière</h3>
            <p> Application permettant la simulation de trajet entre plusieurs dispensaires avec des critères définir pour obtenir un chemin optimal pour le transport des patients. Implementation d'algorithmes de parcours de graphe : Dijkstra. L'application a aussi une interface graphique</p>
            <div class="Project-languages">
            <span class="Language-tag">Java</span>
            </div>
            <a class="See-more" href="https://github.com/KeapRoof/Parcours_de_graphe_JAVA">Voir plus</a>
          </div>
          <div className="Project">
            <h3>Annuaire</h3>
            <p>Application permettant la gestion d'un annuaire grace à un fichier Csv. La recherche d'un client selon des caractéristiques définie par l'utilisateur . Le programme permet aussi d'entrainer les différentes opérations effectuées par le client.</p>
            <div class="Project-languages">
            <span class="Language-tag">C</span>
            </div>
            <a class="See-more" href="https://github.com/KeapRoof/Gestion_Annuaire_C">Voir plus</a>
          </div>
          <div className="Project">
            <h3>Portfolio</h3>
            <p>Site web permettant de presenter mes compétences techniques, montrer les differents projet que j'ai realisé, faire du marketing personnel et ainsi crée une identité personnel. Le site me permettra de mettre en valeurs mes projet future afin de les presenter au recruteur</p>
            <div class="Project-languages">
            <span class="Language-tag">React</span>
            </div>
            <a class="See-more" href="https://github.com/KeapRoof/Gestion_Annuaire_C">Voir plus</a>
          </div>
        </section>
        <section className="Education">
          <h2>Formation</h2>
          <div className="Education-item">
            <h3>BUT Informatique</h3>
            <p>Université : IUT Lyon 1</p>
            <p>Durée : 3 ans</p>
            <p>Description : Formation en informatique, avec une spécialisation en développement Réalisation d'Application. La Formation inclus aussi des modules de management avancé</p>
          </div>
          <div className="Education-item">
            <h3>Baccalauréat Générale</h3>
            <p>Lycée : Lycée La Martinière MonPlaisir</p>
            <p>Durée : 3 ans</p>
            <p>Description : Spécialité NSI - SVT.</p>
            <p>Mentien : Bien</p>
          </div>
        </section>
        <h2>Compétences</h2>
        <section className="Skills">
          <SkillsSlider />
        </section>
        <h2>Contact</h2>
        <section className="Contact">
          <p>Contactez-moi à <a href="mailto:haithemh.pro@gmail.com">haithemh.pro@gmail.com</a> pour toute opportunité ou simplement pour dire bonjour !</p>
          <p>Appelez-moi au <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> pour toute question ou demande.</p>
          <div className="Contact-icons">
          <img src={githubs} alt="GitHubL" className="Contact-icon" onClick={() => handleRedirect("https://github.com/KeapRoof")} style={{ cursor: 'pointer' }} />
          <img src={linkedin} alt="LinkedIn" className="Contact-icon" onClick={() => handleRedirect("https://www.linkedin.com/in/haithem-hadj-azzem-5065b5251/")} style={{ cursor: 'pointer' }} />
          <img src={phone} alt="Téléphone" className="Contact-icon" onClick={() => handleRedirect(`tel:${phoneNumber}`)} style={{ cursor: 'pointer' }} />
          <img src={mail} alt="Mail" className="Contact-icon" onClick={() => handleRedirect("mailto:haithemh.pro@gmail.com")} style={{ cursor: 'pointer' }} />
          </div>
        </section>
      </main>
      <footer className="Portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
