import "../app/page.css";

export default function Home() {
    return (
        <div className="about" id="about">
            <div className="about-header">
                <h1>About me</h1>
            </div>
            <div className="about-body">
                <div className="about-left">
                    <div className="about-profile-img">
                        <img src="/Shaurya.jpeg" alt="" />
                    </div>
                    <div className="about-profile">
                        <h1>I turn ideas into <span className="blur-text expertise-text">AI-powered products</span> and <span className="blur-text expertise-text">interfaces.</span></h1>
                        <div className="about-profile-para">
                            <p>I'm <span className="blur-text about-para-blur">Shaurya Ojha</span>, an Applied <span className="blur-text about-para-blur">AI </span>and <span className="blur-text about-para-blur">Data Science</span> student at <span className="blur-text about-para-blur">IIT Jodhpur</span> with a strong interest in frontend development and AI-powered applications. I enjoy turning ideas into practical digital products, combining thoughtful UI design with intelligent features that solve real problems.</p>
                            <p>I focus on combining clean frontend design with practical backend logic and AI integrations. Through projects like HireMind and PathPilot, I’m learning to build end-to-end products that are useful, scalable, and thoughtfully engineered.</p>
                        </div>
                    </div>  
                </div>
                <div className="about-right">
                    <div className="about-right-box">
                        <div className="about-right-head">
                            <h3>Right now</h3>
                        </div>
                        <div className="about-right-body">
                            <div className="about-right-list">
                                <div className="about-list-dot">
                                    <div className="about-dots about-dot1"></div>
                                </div>
                                <div className="about-list-body">
                                    <h3>Building</h3>
                                    <h1><span className="blur-text about-blur-text">AI-powered projects</span></h1>
                                    <p>Personal portfolio and new AI applications</p>
                                </div>
                            </div>
                            <div className="about-right-list">
                                <div className="about-list-dot">
                                    <div className="about-dots about-dot2"></div>
                                </div>
                                <div className="about-list-body">
                                    <h3>Learning</h3>
                                    <h1><span className="blur-text about-blur-text">Backend & AI engineering</span></h1>
                                    <p>Backend systems, deployment and AI engineering</p>
                                </div>
                            </div>
                            <div className="about-right-list">
                                <div className="about-list-dot">
                                    <div className="about-dots about-dot3"></div>
                                </div>
                                <div className="about-list-body">
                                    <h3>Open to</h3>
                                    <h1><span className="blur-text about-blur-text">Internships & freelance projects</span></h1>
                                    <p>Frontend internships, AI opportunities and freelance projects</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}