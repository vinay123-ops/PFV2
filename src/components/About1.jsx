import React, { useEffect } from 'react';
import { FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiThreedotjs } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TrackVisibility from 'react-on-screen';
import Tilt from 'react-parallax-tilt';
import Male from '../assets/Hero/Male.svg';

gsap.registerPlugin(ScrollTrigger);

const About1 = () => {
    useEffect(() => {
        const textElement = document.querySelector("#animated-heading");
        const text = textElement.innerText;
        textElement.innerHTML = text.split("").map(char => `<span class="split-text">${char}</span>`).join("");

        gsap.from(".split-text", {
            opacity: 0,
            y: 20,
            display: 'inline-block', // Prevents layout shift on animation
            stagger: 0.05,
            duration: 1,
            scrollTrigger: {
                trigger: "#about-me",
                start: "top 80%",
                toggleActions: "restart"
            }
        });
    }, []);

    useEffect(() => {
        gsap.to('#about-me', {
            opacity: 1, // Set to 1 for full opacity
            x: 10,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#about-me",
                start: "top 80%",
                toggleActions: "restart"
            }
        });
    }, []);

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/About');
    };

    return (
        <section id="about" className="w-auto h-screen m-12 mt-[4rem] p-[4rem]">
            <div id='about-me'>
                <h1 id="animated-heading" className="text-4xl text-white font-bold mb-4">About me</h1>
                <hr className="border-t-2 border-gray-600 my-4 mr-12" />
            </div>
            <br />
            <TrackVisibility>
                {({ isVisible }) => (
                    <div className="flex justify-between items-start">
                        <p className={`ml13 text-white/75 ${isVisible ? 'animate__animated animate__fadeInLeft' : ""}`} id='about-section'>
                            Hey there! Just, a tech enthusiast who loves turning ideas into interactive web experiences. <br />
                            It includes late nights spent solving problems with endless <br /> cups of coffee
                            <b className="text-white font-bold"><i> and maybe a "few energy drinks".</i></b> <br /><br />
                            Today, I'm all about creating <b className="text-white font-bold">responsive, modern web applications</b> <br /> that not only look great
                            but work seamlessly. <br />
                            I believe… 🤷‍♂️
                            <br />
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i className="text-white">
                                <b>React <FaReact className="icon inline text-blue-500" />, JavaScript <FaJs className="icon inline text-yellow-500" />, and CSS <FaCss3Alt className="icon inline text-cyan-500" /> frameworks like Tailwind <SiTailwindcss className="icon inline text-teal-400" /> <br />
                                    "A hands-on experience with building 3D models using three.js <SiThreedotjs className="icon inline text-green-500" /> can be included as well"
                                </b>
                            </i>
                            <br />
                            <br />
                            <i><b className="text-white">Let's create something awesome together!</b></i>
                        </p>

                        <div className={`ml-8 ${isVisible ? 'animate__animated animate__fadeInRight' : ""}`}>
                            <Tilt><img
                                src={Male}
                                alt="Male Icon"
                                className="h-[15rem] rounded-full z-10"
                            /></Tilt>
                        </div>
                    </div>
                )}
            </TrackVisibility>
            <button
                onClick={handleButtonClick}
                className={`mt-8 font-bold text-white border border-white px-8 py-4 text-lg bg-transparent transition-all duration-300 hover:bg-white hover:text-hibiscus-600 hover:border-hibiscus-600`}
            >
                Know more
            </button>
        </section>
    );
};

export default About1;
