import React, { useRef, useEffect } from 'react';
import './SkillsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Images (même liste que précédemment)
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
import kotlin from './images/kotlin.svg';
import docker from './images/docker.svg';
import angular from './images/angular.png';
import postgresql from './images/postgresql.svg.png';

const skillsData = [
    {
        title: "Web",
        skills: ["PHP", "JavaScript", "HTML", "CSS"],
        images: [php, javascript, html, css]
    },
    {
        title: "Framework",
        skills: ["React", "VueJS", "Symfony", "Angular"],
        images: [rea, vueJS, symfony, angular]
    },
    {
        title: "Programmation",
        skills: ["Java", "C", "Python", "Kotlin"],
        images: [java, c, python, kotlin]
    },
    {
        title: "Base de données",
        skills: ["MySQL", "SQLite", "MongoDB", "PostgreSQL"],
        images: [mysql, sqlite, mongodb, postgresql]
    },
    {
        title: "Outils",
        skills: ["Git", "GitHub", "Visual Studio Code", "Suite Jetbrains", "Docker"],
        images: [git, github, vscode, jetbrains, docker]
    },
    {
        title: "Autres",
        skills: ["Anglais", "Méthodes Agiles", "Communication", "Travail en équipe"],
        images: [english, agile, communication, teamwork]
    }
];

const SkillsSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="slider">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                loop
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
            >
                {skillsData.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <div className="item active">
                            <h1>{skill.title}</h1>
                    <div className="skills-grid">
                        {skill.skills.map((s, i) => (
                            <div key={i} className="skill-card">
                            <span>{s}</span>
                            {skill.images[i] && <img src={skill.images[i]} alt={s} />}
                            </div>
                        ))}
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Flèches personnalisées */}
            <div ref={prevRef} className="custom-button-prev custom-nav">◀</div>
            <div ref={nextRef} className="custom-button-next custom-nav">▶</div>
        </div>
    );
};

export default SkillsSlider;