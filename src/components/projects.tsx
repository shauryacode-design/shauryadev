import "../app/page.css";
import ProjectsShowcase from "./ProjectsShowcase";

export default function Home() {
    return (
        <div className="projects" id="projects">
            <div className="project-container">
                <div className="project-header">
                    <h3>Selected Work</h3>
                    <h1>Things I've build</h1>
                </div>
                <ProjectsShowcase />
            </div>
        </div>
    );
}