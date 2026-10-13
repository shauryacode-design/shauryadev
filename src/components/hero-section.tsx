"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import "../app/page.css";
import { StripedPattern } from "@/components/ui/striped-pattern";
import AiChat from "@/components/AiChat";

export default function Home() {
    const scrollToSection = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  };
    const scrollTocontact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  };
    return (
        <div className="hero" id="home">
            <StripedPattern
                direction="right"
                width={2}
                height={14}
                className="hero-stripes"
            />
            <div className="hero-container">

                <header>
                    <div className="header-links">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#expertise">Expertise</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="header-button">
                        <button className="header-btn" onClick={scrollTocontact} type="button">Let's talk&rarr;</button>
                    </div>
                </header>
                <div className="body-container">
                    <div className="left-body">
                        <h1>Building <span className="blur-text">What's Next.</span></h1>
                        <h3>Creating intelligent <span className="text-color">products</span> with thoughtful <span className="text-color">design</span>.</h3>
                        <p>I'm an AI & Frontend Developer focused on building intuitive interfaces and AI-powered applications that turn ideas into useful, real-world products.</p>
                        <div className="hero-CTAs">
                            <button className="CTA-btn hero-projects" onClick={scrollToSection} type="button" >Explore My Works&#x2197;</button>
                            <a href="/Resume-ShauryaOjha -AI.pdf" download><button className="CTA-btn resume"> <img src="/file.svg" alt="" />Resume</button></a>
                        </div>
                    </div>
                    <div className="right-body">
                        <div className="ai-container">
                            <div className="ai-head">
                                <h2><img src="/ai.svg" alt="" />Ask my AI about me</h2>
                            </div>
                            <div className="ai-chat">
                                <AiChat />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}