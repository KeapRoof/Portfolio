import React, { useState } from 'react';
import './CompIUT.css';
import pleine from './images/pleine.png';
import vide from './images/vecteezy_green-star-png_17398785.png';

const CompIUT = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const skillsData = [
        {
            title: "Réaliser un développement d'application",
            descrip: "Développer, c'est-à-dire concevoir, coder, tester et intégrer une solution informatique",
            lvl : "Niveau 2 Développer des applications accessibles, ergonomiques et robustes au vu des spécifications définies à partir du besoin du client",
            sae : ["Sportify","OKebab","Aide Hospitalière","Stage LIRIS","MinhList"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence grâce à l'ensemble des travaux pratiques que j'ai réalisés au cours de mes 4 premiers semestres d'études. Ces exercices m'ont permis de développer des compétences solides en matière de développement d'applications informatiques simples.",
            nb : "2/3"
        },
        {
            title: "Optimiser des applications informatiques",
            descrip: "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources...",
            lvl : "Niveau 2 Sélectionner les algorithmes adéquats pour répondre à un problème donné",
            sae : ["Sportify","Plan PowerBI","Stage LIRIS","TakeNote"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence grâce à mes études, mon stage ainsi que les projets que j'ai réalisés. J'ai acquis une solide compréhension des concepts de base en algorithmique et des structures de données.",
            nb : "2/3"
        },
        {
            title: "Conduire un projet",
            descrip: "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
            lvl : "Niveau 2 Déployer des services dans une architecture réseau",
            sae : ["Sportify",'OKebab',"Aide Hospitalière","Stage LIRIS"],
            just :"Je considère être au niveau 2 dans cette compétence grâce à aux différents projets ainsi que le stage que j'ai réalisés. Je ne suis pas expert dans la conduite de projet, mais j'ai acquis une certaine expérience dans ce domaine me permettant de comprendre les besoins des clients et des utilisateurs.",
            nb : "2/2"
        },
        {
            title: "Travailler dans une équipe informatique",
            descrip: "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
            lvl : "Niveau 2 Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
            sae : ["Sportify","Aide Hospitalière","Stage LIRIS","TakeNote"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence en grande partie grâce à mon stage que j'ai réalisés mais egalement grâce à mes projets de groupes. J'ai acquis une solide compréhension des concepts de base du travail d'équipe et des méthodes de communication.",
            nb : "2/2"
        },
        {
            title: "Administrer des systèmes informatiques communicants complexes",
            descrip: "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d’une organisation.",
            lvl : "Niveau 2 Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
            sae : ["Hebergement Sportify","Hebergement Okebab","Dockerisation de BD","Hebergement TakeNote"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence en grande partie grâce à aux différents cours et travaux pratiques que j'ai réalisés au cours de mes 4 premiers semestres d'études. Le déployement de mes projets sur des serveurs m'a permis de comprendre les enjeux de l'administration de systèmes informatiques.",
            nb : "2/2"
        },
        {
            title: "Gérer des données de l’information",
            descrip: "Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise.",
            lvl : "Niveau 2 Situer son rôle et ses missions au sein d’une équipe informatique",
            sae : ["Sportify","Aide Hospitalière","Stage LIRIS","MinhList"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence en grande partie grâce à aux différents projets et travaux pratiques que j'ai réalisés au cours de mes 4 premiers semestres d'études. Ces exercices m'ont permis de développer des compétences solides en matière de conception et de mise en place de base de données",
            nb : "2/3"
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
    };

    const renderStars = (nb) => {
        const [fullStars, totalStars] = nb.split('/').map(Number);
        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            stars.push(
                <img 
                    key={i}
                    src={i < fullStars ? pleine : vide} 
                    alt={i < fullStars ? 'Full star' : 'Empty star'}
                    className="star"
                />
            );
        }

        return stars;
    };

    return (
        <div className="slider">
            {skillsData.map((skill, index) => (
                <div key={index} className={`item ${index === activeIndex ? 'active' : (index < activeIndex ? 'prev' : 'next')}`}>
                    <h1>{skill.title}</h1>
                    <p>{skill.descrip}</p>
                    <p>{skill.lvl}</p>
                    <ul>
                        {skill.sae.map((s, i) => (
                            <li key={i}>
                                <span className="Language-tag">
                                    {s}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="ppp">
                        <p>{skill.just}</p>
                    </div>
                    <div className="stars">
                        {renderStars(skill.nb)}
                    </div>
                </div>
            ))}
            <button id="prev" onClick={prevSlide}>{"<"}</button>
            <button id="next" onClick={nextSlide}>{">"}</button>
        </div>
    );
};

export default CompIUT;
