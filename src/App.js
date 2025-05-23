import React from 'react';
import './App.css';
import Project from './Project';
import Experience from "./Experience";
// Import images
import keap from './images/keap.jpg';
import pdp from './images/pdp.jpg';
import SkillsSlider from './SkillsSlider';
import githubs from './images/github_l.svg';
import linkedin from './images/linkedin.svg';
import phone from './images/phone.svg';
import mail from './images/mail.svg';
import portfolioimg from './images/portfolio.png';
import annuaireimg from './images/annuaire.png';
import appmeteo from './images/appmeteo.png';
import minhlist from './images/minhlist.png';
import takenote from './images/takenote.png';
// import CompIUT from './CompIUT';

function Portfolio() {
  const phoneNumber = "+33611441521";

  const handleRedirect = (url) => {
    window.location.href = url;
  };
  
  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <h1>Mon Portfolio</h1>
        <p>Haithem HADJ AZZEM</p>
        <a href="https://github.com/KeapRoof/Portfolio/raw/master/Cv_Haithem.pdf" download="Cv_Haithem.pdf" id='cv'>Mon CV</a>
        <img src={keap} alt="Keap" className="Portfolio-logo" />
      </header>
      <main className="Portfolio-main">
      <section className="About-me">
          <h2>À propos de moi</h2>
          <div className="About-me-card">
            <div className="About-me-content">
              <p>Bienvenue sur mon portfolio ! Je suis Haithem, étudiant en BUT Informatique, passionné par le développement.</p>
              <p>Depuis que j'ai découvert le monde du développement, j'ai été fasciné par sa capacité à créer des solutions innovantes. Mon intérêt pour le développement web et applicatif est né de mon désir de créer des expériences utilisateurs uniques et efficaces.</p>
              <p>Je suis constamment à la recherche de nouvelles technologies et de nouvelles méthodes pour améliorer mes compétences. Développeur informatique en devenir.</p>
            </div>
            <div className="Profile-picture-container">
              <img src={pdp} alt="Moi" className="Profile-picture" />
            </div>
          </div>
        </section>
      <section className="Experience">
        <h2>Expériences</h2>
          <Experience
              title="Alternant développeur full-stack"
              location="Bayard Meyzieu"
              duration="depuis 09/2024"
              description="J'ai développé/conçu un outil de dimensionnement de vannes. Maintenance d'application mobile et web."
          />
          <Experience
              title="Stage Développeur"
              location="LIRIS"
              duration="3 mois"
              description="J'ai travaillé sur le développement d'une plateforme européenne permettant l'amélioration des traitements par immunothérapie."
              />
          <Experience
              title="Stage découverte informaticien"
              location="Mairie de Vénissieux"
              duration="2 semaines"
              description="J'ai découvert le monde professionnel, j'ai aussi été initié au développement Web."
              />
        </section>
        <section className="Projects">
          <h2>Projets</h2>

              <Project
                title="Sportify"
                description="Sportify est une plateforme sociale dédiée aux passionnés de sport, offrant une expérience immersive où les utilisateurs peuvent partager des moments forts, interagir avec une communauté partageant les mêmes intérêts, participer à des pronostics sportifs, et même parier et jouer."
                languages={["PHP", "HTML", "CSS", "JavaScript"]}
                githubLink="https://github.com/KeapRoof/Sportify"
                videoUrl="https://www.youtube.com/embed/b4Y6eFOt6R0?si=p2TGSjE4SESJstSs"
              />
            <Project
                title="TakeNote"
                description="Plateforme de gestion de notes liée à un compte. L'utilisateur peut créer, modifier, supprimer des notes. L'application est sécurisée et permet à l'utilisateur de se connecter et de s'inscrire. TakeNote est connectée à une base de données pour stocker les informations."
                languages={["Angular","FastAPI","Sonarqube"]}
                githubLink="https://github.com/KeapRoof/TakeNote"
                imageUrl={takenote}
            />
              <Project
                title="Aide Hospitalière"
                description="Application permettant la simulation de trajet entre plusieurs dispensaires avec des critères définis pour obtenir un chemin optimal pour le transport des patients. Implémentation d'algorithmes de parcours de graphe : Dijkstra. L'application a aussi une interface graphique."
                languages={["Java"]}
                githubLink="https://github.com/KeapRoof/Parcours_de_graphe_JAVA"
                videoUrl="https://www.youtube.com/embed/AvutbkUVduU?si=JJYBUWMtSzOv6fSZ"
              />
              <Project
                title="Annuaire"
                description="Application permettant la gestion d'un annuaire grâce à un fichier CSV. La recherche d'un client selon des caractéristiques définies par l'utilisateur. Le programme permet aussi d'entraîner les différentes opérations effectuées par le client."
                languages={["C"]}
                githubLink="https://github.com/KeapRoof/Gestion_Annuaire_C"
                imageUrl={annuaireimg}
              />
              <Project
                title="Portfolio"
                description="Site web permettant de présenter mes compétences techniques, montrer les différents projets que j'ai réalisés, faire du marketing personnel et ainsi créer une identité personnelle. Le site me permettra de mettre en valeur mes projets futurs afin de les présenter aux recruteurs."
                languages={["React"]}
                githubLink="https://github.com/KeapRoof/Gestion_Annuaire_C"
                imageUrl={portfolioimg}
              />
              <Project
                title="AppMeteo"
                description="Application mobile permettant de consulter la météo de la ville de votre choix. L'application est connectée à une API météo pour obtenir les informations en temps réel. L'application est disponible sur Android. Elle comporte une liste de villes favorites, une recherche de ville et une map interactive."
                languages={["Kotlin","Firebase"]}
                githubLink="https://github.com/KeapRoof/App_meteo"
                imageUrl={appmeteo}
                />
              <Project
                title="MinhList"
                description="Site web permettant de créer des listes d'articles à acheter. L'utilisateur peut ajouter des articles, les supprimer et les modifier. L'application est connectée à une base de données pour stocker les informations. L'application est sécurisée et permet à l'utilisateur de se connecter et de s'inscrire."
                languages={["Symfony"]}
                githubLink="https://github.com/KeapRoof/MinhList"
                imageUrl={minhlist}
                />
        </section>
        <section className="Education">
          <h2>Formations</h2>
          <div className="Education-item">
            <h3>BUT Informatique</h3>
            <p>Université : IUT Lyon 1</p>
            <p>Durée : 3 ans</p>
            <p>Description : Formation en informatique, avec une spécialisation en développement Réalisation d'Application. La formation inclut aussi des modules de management avancé.</p>
          </div>
          <div className="Education-item">
            <h3>Baccalauréat Général</h3>
            <p>Lycée : Lycée La Martinière Monplaisir</p>
            <p>Durée : 3 ans</p>
            <p>Description : Spécialité NSI - SVT.</p>
            <p>Mention : Assez bien</p>
          </div>
        </section>
        <h2>Skills</h2>
        <section className="Skills">
          <SkillsSlider />
        </section>
        {/*<h2>Compétences</h2>*/}
        {/*<section className="IUT">*/}
        {/*  <CompIUT />*/}
        {/*</section>*/}
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
