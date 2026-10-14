"use client";

import "../app/page.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [currentTime, setCurrentTime] = useState("");
    const [emailFeedback, setEmailFeedback] = useState("");
    const feedbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(`${now.getHours() % 12 || 12}:${String(now.getMinutes()).padStart(2, "0")}`);
        };

        updateTime();
        const interval = window.setInterval(updateTime, 1000);
        return () => window.clearInterval(interval);
    }, []);

    useEffect(() => () => {
        if (feedbackTimeout.current) {
            clearTimeout(feedbackTimeout.current);
        }
    }, []);

    const copyEmail = async () => {
        if (feedbackTimeout.current) {
            clearTimeout(feedbackTimeout.current);
        }

        try {
            await navigator.clipboard.writeText("shauryaofficial06@gmail.com");
            setEmailFeedback("Email copied");
        } catch {
            setEmailFeedback("Unable to copy email");
        }

        feedbackTimeout.current = setTimeout(() => setEmailFeedback(""), 2000);
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-head">
                <div className="contact-time">
                    <p>{currentTime}</p>
                </div>
                <div className="contact-name">
                    <a href="#about">Shaurya</a>
                </div>
            </div>
            <div className="contact-body">
                <div className="contact-text">
                    <h1 data-reveal="up" suppressHydrationWarning>Interested in talking? <br /> <span className="blur-text expertise-text">let&apos;s do it</span></h1>
                    <div className="contact-CTA">
                        <button type="button" onClick={copyEmail} aria-live="polite" data-reveal="up" data-reveal-delay="150" suppressHydrationWarning>
                            {emailFeedback || "shauryaofficial06@gmail.com"}
                        </button>
                        <a
                            href="https://wa.me/919319649564?text=Hi%2C%20I%20came%20here%20from%20your%20Portfolio."
                            target="_blank"
                            rel="noopener noreferrer"
                            data-reveal="up"
                            data-reveal-delay="150"
                            suppressHydrationWarning
                        >
                            WhatsApp me
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-connect" data-reveal="fade" suppressHydrationWarning>
                <div className="contact-rights">
                    <p>© 2026 Shaurya</p>
                </div>
                <div className="contact-social">
                    <Link href="https://www.linkedin.com/in/shaurya-ojha/?isSelfProfile=true" target="_blank">Linkedin</Link>
                    <Link href="https://github.com/shauryacode-design" target="_blank">GitHub</Link>
                    <Link href="https://www.instagram.com/_shauryaojha/" target="_blank">Instagram</Link>
                </div>
            </div>
        </div>
    );
}