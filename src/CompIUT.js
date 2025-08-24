import React from 'react';
import './CompIUT.css';

const CompIUT = () => {
    const skillsData = [
        {
            title: "Réaliser un développement d'application",
            descrip: "Développer, c'est-à-dire concevoir, coder, tester et intégrer une solution informatique",
            lvl : "Développer des applications accessibles, ergonomiques et robustes au vu des spécifications définies à partir du besoin du client",
            sae : ["Sportify","OKebab","Aide Hospitalière","Stage LIRIS","MinhList","Alternance BAYARD"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence grâce à l'ensemble des travaux pratiques que j'ai réalisés au cours de mes 4 premiers semestres d'études.",
            nb : "2/3"
        },
        {
            title: "Optimiser des applications informatiques",
            descrip: "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources...",
            lvl : "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
            sae : ["Sportify","Plan PowerBI","Stage LIRIS","TakeNote","Alternance BAYARD"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence grâce à mes études, mon stage ainsi que les projets que j'ai réalisés.",
            nb : "2/3"
        },
        {
            title: "Conduire un projet",
            descrip: "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
            lvl : "Déployer des services dans une architecture réseau",
            sae : ["Sportify",'OKebab',"Aide Hospitalière","Stage LIRIS","Alternance BAYARD"],
            just :"Je considère être au niveau 2 dans cette compétence grâce aux différents projets ainsi que le stage que j'ai réalisés.",
            nb : "2/2"
        },
        {
            title: "Travailler dans une équipe informatique",
            descrip: "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
            lvl : "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
            sae : ["Sportify","Aide Hospitalière","Stage LIRIS","TakeNote"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence en grande partie grâce à mon stage et mes projets de groupes.",
            nb : "2/2"
        },
        {
            title: "Administrer des systèmes informatiques communicants complexes",
            descrip: "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux.",
            lvl : "Appliquer une démarche de suivi de projet en fonction des besoins métiers",
            sae : [" Sportify"," Okebab","Dockerisation de BD"," TakeNote","Alternance BAYARD"],
            just :"Je considère avoir atteint le niveau 2 grâce aux cours et TP ainsi que le déploiement de mes projets sur des serveurs.",
            nb : "2/2"
        },
        {
            title: "Gérer des données de l’information",
            descrip: "Concevoir, gérer, administrer et exploiter les données de l’entreprise.",
            lvl : "Situer son rôle et ses missions au sein d’une équipe informatique",
            sae : ["Sportify","Aide Hospitalière","Stage LIRIS","MinhList","Alternance BAYARD"],
            just :"Je considère avoir atteint le niveau 2 dans cette compétence en grande partie grâce aux projets et TP réalisés.",
            nb : "2/3"
        }
    ];


    return (
        <div className="compIUT-grid">
            {skillsData.map((skill, index) => (
                <div key={index} className="compIUT-card">
                    <h2>{skill.title}</h2>
                    <p className="desc">{skill.descrip}</p>
                    <p className="lvl">{skill.lvl}</p>

                    <ul className="tags">
                        {skill.sae.map((s, i) => (
                            <li key={i} className="Language-tag">{s}</li>
                        ))}
                    </ul>

                    <p className="just">{skill.just}</p>
                </div>
            ))}
        </div>
    );
};

export default CompIUT;