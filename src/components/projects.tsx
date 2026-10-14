import "../app/page.css";
import ProjectsShowcase from "./ProjectsShowcase";

export default function Home() {
    return (
        <div className="projects" id="projects">
            <div className="project-container">
                <div className="project-header">
                    <h3 data-reveal="up" suppressHydrationWarning>Selected Work</h3>
                    <h1 data-reveal="up" suppressHydrationWarning>Things I've build</h1>
                </div>
                <ProjectsShowcase />
            </div>
        </div>
    );
}