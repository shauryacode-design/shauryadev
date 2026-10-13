"use client";

import { useState } from "react";

// placeholder cards: replace each with your real card component later
function HiremindCard() {
    return <div className="project-showcase">
        <div className="project-head">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="project-card">
            <div className="project-img">
                <div className="project-img-cover"></div>
                <img src="/Hiremind.png" alt="" />
            </div>
            <div className="project-text">
                <h1>Practice interviews. Understand your gaps. Improve with every answer.</h1>
                <p>An AI-powered interview platform that generates personalized questions from resume context, supports mock interviews and answer practice, and evaluates responses with structured feedback.</p>
                <div className="project-tech">
                    <div className="project-tech-capsule">FastAPI</div>
                    <div className="project-tech-capsule">PostgreSQL</div>
                    <div className="project-tech-capsule">SQLAlchemy</div>
                    <div className="project-tech-capsule">JWT</div>
                    <div className="project-tech-capsule">Next.js</div>
                </div>
                <div className="project-btn">
                    <button>Live Demo <img src="/link.svg" alt="" className="link-btn-img" /></button>
                </div>
            </div>
        </div>
    </div>;
}
function PathPilotCard() {
    return <div className="project-showcase">
        <div className="project-head">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="project-card">
            <div className="project-img">
                <div className="project-img-cover"></div>
                <img src="/Pathpilot.png" alt="" />
            </div>
            <div className="project-text">
                <h1>Turn career uncertainty into a clearer direction.</h1>
                <p>An AI-powered career guidance project designed to help users explore suitable career paths, understand skill requirements, and identify actionable next steps toward their goals.</p>
                <div className="project-tech">
                    <div className="project-tech-capsule">Next.js</div>
                    <div className="project-tech-capsule">React</div>
                    <div className="project-tech-capsule">TypeScript</div>
                    <div className="project-tech-capsule">AI Integration</div>

                </div>
                <div className="project-btn">
                    <button>Live Demo <img src="/link.svg" alt="" className="link-btn-img" /></button>
                </div>
            </div>
        </div>
    </div>;
}
function AIcomplaintCard() {
    return <div className="project-showcase">
        <div className="project-head">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="project-card">
            <div className="project-img">
                <div className="project-img-cover"></div>
                <img src="/aicomplaint.png" alt="" />
            </div>
            <div className="project-text">
                <h1>Turn customer complaints into structured quality insights.</h1>
                <p>An AI-powered complaint-processing application built for a pharmaceutical quality-management use case. It analyzes complaint descriptions and helps classify severity, priority, and complaint category.</p>
                <div className="project-tech">
                    <div className="project-tech-capsule">React</div>
                    <div className="project-tech-capsule">Redux</div>
                    <div className="project-tech-capsule">FastAPI</div>
                    <div className="project-tech-capsule">LangChain</div>
                    <div className="project-tech-capsule">LangGraph</div>
                </div>
                <div className="project-btn">
                    <button>Live Demo <img src="/link.svg" alt="" className="link-btn-img" /></button>
                </div>
            </div>
        </div>
    </div>;
}
function EnquiryBotCard() {
    return <div className="project-showcase">
        <div className="project-head">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="project-card">
            <div className="project-img">
                <div className="project-img-cover"></div>
                <img src="/EnquiryBot.png" alt="" />
            </div>
            <div className="project-text">
                <h1>Automate student enquiries. Deliver answers instantly.</h1>
                <p>A Telegram bot designed for coaching institutes to automate responses to common student enquiries. It helps students access relevant information quickly while reducing the need for staff to handle repetitive questions manually.</p>
                <div className="project-tech">
                    <div className="project-tech-capsule">Python</div>
                    <div className="project-tech-capsule">Telegram Bot API</div>
                    <div className="project-tech-capsule">AI Integration</div>

                </div>
                {/* <div className="project-btn">
                    <button>Live Demo <img src="/link.svg" alt="" className="link-btn-img" /></button>
                </div> */}
            </div>
        </div>
    </div>;
}

function ProjectPlaceholderCard({ number, title, tagline }: { number: string; title: string; tagline: string }) {
    return (
        <div className="project-showcase">
            <div className="project-head">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="project-placeholder-card">
                <span className="project-fourth-number">{number}</span>
                <h2>{title}</h2>
                <p>{tagline}</p>
                <div className="project-fourth-preview" aria-hidden="true">
                    Project preview
                </div>
            </div>
        </div>
    );
}

const projects = [
    { id: "hiremind", number: "01", title: "Hiremind", tagline: "AI Interview Preparation Platform", Card: HiremindCard },
    { id: "pathpilot", number: "02", title: "PathPilot", tagline: "AI career guidance", Card: PathPilotCard },
    { id: "aicomplaint", number: "03", title: "AI Complaint System", tagline: "AI for Pharmaceutical Quality Management", Card: AIcomplaintCard },
    {
        id: "enquirybot",
        number: "04",
        title: "Enquiry Bot",
        tagline: "Telegram bot for coaching institute enquiries",
        Card: EnquiryBotCard
    },

];

export default function ProjectsShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = projects[activeIndex];
    const ActiveCard = active.Card; // a capital letter is required to render it as a component

    return (
        <>
            <div className="project-body">
                <div className="project-list">
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            type="button"
                            className={`project ${i === activeIndex ? "active" : ""}`}
                            aria-pressed={i === activeIndex}
                            onClick={() => setActiveIndex(i)}
                        >
                            <h3>{p.number}</h3>
                            <h1>{p.title}</h1>
                            <p>{p.tagline}</p>
                        </button>
                    ))}
                </div>

                <div className="project-detail">
                    <div key={active.id} className="project-card-wrap">
                        <ActiveCard />
                    </div>
                </div>
            </div>

        </>
    );
}