import React, { useState } from 'react';
import './SkillsSlider.css'; // Importez votre fichier CSS
import c from './images/c.png';
import css from './images/css.svg';
import git from './images/git.svg';
import html from './images/html.svg';
import java from './images/java.svg';
import javascript from './images/javascript.png';
import mongodb from './images/mongodb.png';
import mysql from './images/mysql.svg';
import php from './images/php.svg';
import python from './images/python.png';
import sqlite from './images/sqlite.svg';
import vscode from './images/vscode.png';
import jetbrains from './images/jetbrains.png';
import github from './images/github.png';
import agile from './images/agile.png';
import communication from './images/communication.jpg';
import teamwork from './images/equipe.png';
import english from './images/anglais.png';
import rea from './images/react.svg';
import vueJS from './images/vue.svg';
import symfony from './images/symfony.svg';


const SkillsSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Index actif de la slide

    const skillsData = [ // Données des domaines de compétences
        {
            title: "Web",
            skills: ["PHP", "JavaScript", "HTML", "CSS"],
            images: [php, javascript, html, css]
        },
        {
            title: "Framework",
            skills: ["React", "VueJS", "Symfony"],
            images: [rea,vueJS,symfony]
        }
        ,
        {
            title: "Programmation",
            skills: ["Java", "C", "Python"],
            images: [java, c, python]
        },
        {
            title: "Base de données",
            skills: ["MySQL", "SQLite", "MongoDB"],
            images: [mysql, sqlite, mongodb]
        },
        {
            title: "Outils",
            skills: ["Git", "GitHub", "Visual Studio Code", "Suite Jetbrains"],
            images: [git, github, vscode, jetbrains] 
        },
        {
            title: "Autres",
            skills: ["Anglais", "Méthodes Agiles", "Communication", "Travail en équipe"],
            images: [english, agile, communication, teamwork] 
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
    };

    return (
        <div className="slider">
            {skillsData.map((skill, index) => (
                <div key={index} className={`item ${index === activeIndex ? 'active' : (index < activeIndex ? 'prev' : 'next')}`}>
                    <h1>{skill.title}</h1>
                    <ul>
                        {skill.skills.map((s, i) => (
                            <li key={i}>
                                <div className="skill">
                                    <span>{s}</span>
                                    {skill.images[i] && <img src={skill.images[i]} alt={s} />}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button id="prev" onClick={prevSlide}>{"<"}</button>
            <button id="next" onClick={nextSlide}>{">"}</button>
        </div>
    );
};

export default SkillsSlider;
