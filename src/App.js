import React from 'react';
import './App.css'; // Créez un fichier Portfolio.css pour vos styles
// Import images
import php from './images/php.png';
import javascript from './images/javascript.png';
import html from './images/html.png';
import css from './images/css.png';
import java from './images/java.png';
import c from './images/c.png';
import python from './images/python.png';
import mysql from './images/mysql.png';
import sqlite from './images/sqlite.png';
import git from './images/git.png';
import github from './images/github.png';
import vscode from './images/vscode.png';
import jetbrains from './images/jetbrains.png';




function Portfolio() {
  const phoneNumber = "+33611441521";
  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <h1>Mon Portfolio</h1>
      </header>
      <main className="Portfolio-main">
      <section className="About-me">
        <h2>À propos de moi</h2>
        <p>Bienvenue sur mon portfolio ! Je suis Haithem, étudiant en BUT Informatique, passionné par le développement.</p>
        <p>Depuis que j'ai découvert le monde du développement, j'ai été fasciné par sa capacité à créer des solutions innovantes. Mon intérêt pour le développement web et applicatif est né de mon désir de créer des expériences utilisateur uniques et efficaces.</p>
        <p>Je suis constamment à la recherche de nouvelles technologies et de nouvelles méthodes pour améliorer mes compétences. Développeur informatique en devenir.</p>
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
            <p>Sportify est une plateforme sociale dédiée aux passionnés de sport, offrant une expérience immersive où les utilisateurs peuvent partager des moments forts, interagir avec une communauté partageant les mêmes intérêts, participer à des pronostics sportifs, et même parier et jouer, le tout dans un environnement engageant et informatif.</p>
            <a>PHP</a><br></br>
            <a>HTML</a><br></br>
            <a>CSS</a><br></br>
            <a>JavaScript</a><br></br>
            <a href="https://github.com/KeapRoof/Sportify">Voir plus</a>
          </div>
          <div className="Project">
            <h3>Aide Hospitalière</h3>
            <p>Application permettant la simulation de trajet entre plusieurs dispensaires avec des critères définir pour obtenir un chemin optimal pour le transport des patients.</p>
            <a>Java</a><br></br>
            <a href="https://github.com/KeapRoof/Parcours_de_graphe_JAVA">Voir plus</a>
          </div>
          <div className="Project">
            <h3>Annuaire</h3>
            <p>Application permettant la gestion d'un annuaire grace a un fichier csv.</p>
            <a>C</a><br></br>
            <a href="https://github.com/KeapRoof/Gestion_Annuaire_C">Voir plus</a>
          </div>
          {/* Ajoutez d'autres projets si nécessaire */}
        </section>
        <section className="Education">
          <h2>Formation</h2>
          <div className="Education-item">
            <h3>BUT Informatique</h3>
            <p>Université : IUT Lyon 1</p>
            <p>Durée : 2 ans</p>
            <p>Description : Formation en informatique, avec une spécialisation en développement Réalisation d'Application.</p>
          </div>
          <div className="Education-item">
            <h3>Baccalauréat Générale</h3>
            <p>Lycée : Lycée La Martinière MonPlaisir</p>
            <p>Durée : 3 ans</p>
            <p>Description : Spécialité NSI - SVT.</p>
          </div>
        </section>
        <section className="Skills">
          <h2>Compétences</h2>
          <ul>
    <li><h3>Web</h3></li>
    <li><img src={php} alt="PHP"></img> PHP</li>
    <li><img src={javascript} alt="JavaScript"></img>JavaScript</li>
    <li><img src={html} alt="HTML"></img>HTML</li>
    <li><img src={css} alt="CSS"></img> CSS</li>
    </ul>
    <ul>
        <li><h3>Programmation</h3></li>
        <li><img src={java} alt="Java"></img> Java</li>
        <li><img src={c} alt="C"></img> C</li>
        <li><img src={python} alt="Python"></img> Python</li>
    </ul>
    <ul>
        <li><h3>Base de données</h3></li>
        <li><img src={mysql} alt="MySQL"/> MySQL</li>
        <li><img src={sqlite} alt="SQLite"></img> SQLite</li>
    </ul>
    <ul>
        <li><h3>Outils</h3></li>
        <li><img src={git} alt="Git"></img> Git</li>
        <li><img src={github} alt="GitHub"></img> GitHub</li>
        <li><img src={vscode} alt="Visual Studio Code"></img> Visual Studio Code</li>
        <li><img src={jetbrains} alt="Suite Jetbrains"></img> Suite Jetbrains</li>
    </ul>
    <ul>
        <li><h3>Autres</h3></li>
        <li>Anglais</li>
        <li>Méthodes Agiles</li>
        <li>Communication</li>
        <li>Travail en équipe</li>
    </ul>

        </section>
        <section className="Contact">
          <h2>Contact</h2>
          <p>Contactez-moi à <a href="mailto:haithemh.pro@gmail.com">haithemh.pro@gmail.com</a> pour toute opportunité ou simplement pour dire bonjour !</p>
          <p>Appelez-moi au <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> pour toute question ou demande.</p>
        </section>
      </main>
      <footer className="Portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
