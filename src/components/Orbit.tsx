"use client";

import { useState, type CSSProperties } from "react";

const dots = [
    { label: "AI", color: "#4f6bff", items: ["LLM APIs", "Prompt engineering", "AI-powered apps"] },
    { label: "Frontend", color: "#7a5ce0", items: ["HTML, CSS, JavaScript", "React", "Next.js", "Responsive UI"] },
    { label: "Backend", color: "#b8509a", items: ["Python", "FastAPI", "REST APIs"] },
    { label: "Database", color: "#d9437a", items: ["PostgreSQL", "SQLAlchemy"] },
    { label: "Workflow", color: "#ff3b5c", items: ["Git", "GitHub"] },
];

export default function Orbit() {
    const [active, setActive] = useState<number | null>(null);
    const current = active !== null ? dots[active] : null;

    return (
        <div className="expertise" id="expertise">
            <div className="expertise-header">
                <h1>My Expertise</h1>
                
            </div>
            <div className="whole-orbit">
                <div className="orbit-left-text">
                    <h1>From interfaces to <span className="blur-text expertise-text">intelligent</span> systems, here's what i build with. <span className="blur-text expertise-text">AI products.</span></h1>
                    <p>Hover or tap a dot to see what’s inside.</p>
                </div>
                <div
                    className={`orbit ${active !== null ? "paused" : ""}`}
                    onMouseLeave={() => setActive(null)}
                >
                    {/* centre card: shows the hovered dot's details */}
                    <div
                        className="orbit-core"
                        style={current ? ({ "--c": current.color } as CSSProperties) : undefined}
                    >
                        {current ? (
                            <>
                                <h3 className="expertise-label" >{current.label}</h3>
                                <ul>
                                    {current.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3>What I build with</h3>
                            </>
                        )}
                    </div>

                    {/* the rotating ring with the dots */}
                    <div className="ring">
                        {dots.map((d, i) => (
                            <div
                                key={d.label}
                                className="orbit-item"
                                style={
                                    { "--angle": `${(360 / dots.length) * i}deg`, "--c": d.color } as CSSProperties
                                }
                            >
                                <div className="orbit-holder">
                                    <button
                                        type="button"
                                        className="orbit-dot"
                                        onMouseEnter={() => setActive(i)}
                                        onFocus={() => setActive(i)}
                                        onClick={() => setActive(i)}
                                    >
                                        {d.label}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}