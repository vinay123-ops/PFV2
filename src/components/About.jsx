import React, { useEffect } from "react";
import { dataabout, worktimeline, skills, services, resume } from "../assets/Utilities/utilities";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const textElement = document.querySelector("#animated-heading");
        if (textElement) {
            const text = textElement.innerText;
            textElement.innerHTML = text.split("").map(char => `<span class="split-text">${char}</span>`).join("");

            gsap.from(".split-text", {
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 1,
                scrollTrigger: {
                    trigger: "#about", // Trigger when #about is in the viewport
                    start: "top 80%", 
                    toggleActions: "restart none none none"
                }
            });
        }

        // Section animations
        gsap.to('#about-section', {
            opacity: 5,
            x: 50,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#about-section",
                start: "top 80%",
                toggleActions: "restart none none none"
            }
        });

        gsap.to('#work-timeline', {
            opacity: 1,
            x: 50,
            duration: 1.5,
            delay: 0.5,
            scrollTrigger: {
                trigger: "#work-timeline",
                start: "top 80%",
                toggleActions: "restart none none none"
            }
        });

        gsap.to('#skills-section', {
            opacity: 1,
            x: 50,
            duration: 1.5,
            delay: 0.5,
            scrollTrigger: {
                trigger: "#skills-section",
                start: "top 80%",
                toggleActions: "restart none none none"
            }
        });

        gsap.to('#services-section', {
            opacity: 1,
            x: 50,
            duration: 1,
            delay: 0.5, 
            scrollTrigger: {
                trigger: "#services-section",
                start: "top 80%",
                toggleActions: "restart none none none"
            }
        });

        gsap.to('#download-resume', {
            opacity: 1,
            x: 50,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: "#download-resume",
                start: "top 80%",
                toggleActions: "restart none none none"
            }
        });

    }, []);

    return (
        <div id="about" className="h-auto w-full ml-10 pl-10 pt-32 items-center">
            <div className="mb-8 mt-4 pr-52">
                <h1 id="animated-heading" className="text-4xl text-white font-bold mb-4">About me</h1>
                <hr className="border-t-2 border-gray-600 my-4 w-full" />
            </div>
            <div id="about-section" className="mb-16 flex flex-col md:flex-row opacity-0">
                <div className="w-full md:w-2/5 mb-4 md:mb-0">
                    <h3 className="text-xl text-white py-4">{dataabout.title}</h3>
                </div>
                <div className="w-full md:w-3/5 pr-40 mr-8 items-center">
                    <p className="text-white pr-7">{dataabout.aboutme}</p>
                </div>
            </div>
            <div id="work-timeline" className="mb-16 w-full">
                <div className="w-full md:w-2/5 mb-4 md:mb-0">
                    <h3 className="text-xl text-white py-4">Work Timeline</h3>
                </div>
                <div className="w-full pr-48 mr-40">
                    <table className="w-full">
                        <tbody>
                            {worktimeline.map((data, i) => (
                                <tr key={i} className="border-b border-gray-200 w-full">
                                    <th className="text-white text-left py-2">{data.jobtitle}</th>
                                    <td className="text-white pr-24 py-2">{data.where}</td>
                                    <td className="text-white py-2">{data.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="skills-section" className="mb-16 w-full block opacity-0">
                <div className="w-full md:w-2/5 mb-4 md:mb-0">
                    <h3 className="text-xl text-white py-4">Skills</h3>
                </div>
                <div className="w-full md:w-3/5">
                    {skills.map((data, i) => (
                        <div key={i} className="mb-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-white text-lg">{data.name}</h3>
                                <div className="text-white text-sm font-semibold">{data.value}%</div>
                            </div>
                            <div className="relative w-full bg-gray-700 h-1 rounded overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-2"
                                    style={{
                                        width: `${data.value}%`,
                                        background: `linear-gradient(to right, #4ade80, #22d3ee)`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="services-section" className="mb-16">
                <div className="w-full flex justify-between pr-[10rem]">
                    <h3 className="text-xl text-white py-4">Services</h3>
                </div>
                <div className="w-full md:w-3/5">
                    {services.map((data, i) => (
                        <div className="py-4" key={i}>
                            <h5 className="text-lg font-semibold mb-2 border-b-2 border-gray-500">
                                {data.title}
                            </h5>
                            <p className="text-white">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div id="download-resume">
                <button
                    className="mr-8 mt-4 font-bold text-white border border-white px-8 py-4 text-lg ml-4 bg-transparent transition-all duration-300 hover:bg-white hover:text-hibiscus-600 hover:border-hibiscus-600 relative"
                    onClick={() => {
                        window.open(resume, "_blank");
                    }}
                >
                    DOWNLOAD RESUME
                </button>
            </div>
        </div>
    );
};

export default About;
