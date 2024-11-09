import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import anime from 'animejs/lib/anime.es.js';
import NightSky from '../assets/Hero/Nightsky.jpg';

const Hero = () => {
    useEffect(() => {
        // Register the plugin
        gsap.registerPlugin(TextPlugin);

        // Wrap each letter in a <span> inside the text to animate individually
        const textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // Anime.js animation for the letter animations
        anime.timeline({ loop: true })
            .add({
                targets: '.ml12 .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i + 1)
            }).add({
                targets: '.ml12',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });

        // GSAP text animation for the greeting text
        const tl = gsap.timeline({ repeat: Infinity, repeatDelay: 1, yoyo: true });
        tl.to("h1 span", {
            duration: 4,
            text: "Hi there 👋🏻",
            ease: "power2.inOut",
        });
    }, []);

    return (
        <section
            id="home"
            className="h-full pt-[12rem] w-full flex justify-center items-center relative"
        >
            <img className='absolute inset-0 h-full w-full -z-50 opacity-15' src={NightSky} alt="Night Sky Background" />

            <div className="flex justify-between w-full pl-48 z-50">
                <div className="relative">
                    <h1 className="text-white mt-4 text-7xl font-bold bg-clip-text">
                        <span className="shake">I am Vinay 👨‍💻</span>
                    </h1>
                    <br />
                    <br />
                    <div className="relative">
                        <p className="ml12 mt-2 text-4xl text-white leading-tight text-center justify-self-auto">
                            Building modern, responsive websites - UX/UI developer
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-[20rem] mt-[15rem] font-bold text-white border border-white py-4 text-lg bg-transparent transition-all duration-300 hover:bg-white hover:text-hibiscus-600 hover:border-hibiscus-600 relative"
                    >
                        Let's connect
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
