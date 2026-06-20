import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    tags: ['React', 'SpringBoot', 'MongoDB'],
    description: 'A fully functional online store featuring advanced search, secure checkout, and a vendor management portal.',
    stats: '40% conversion increase'
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    category: 'Frontend & UI/UX Design',
    tags: ['React', 'Figma', 'Chart.js'],
    description: 'A data-intensive monitoring tool with custom reporting, interactive charts, and real-time alerts.',
    stats: '99.9% uptime monitored'
  },
  {
    id: 3,
    title: 'Task Management System',
    category: 'Backend & APIs',
    tags: ['SpringBoot', 'MongoDB', 'REST API'],
    description: 'A scalable task scheduling and execution server supporting concurrent operations, task dependency, and webhooks.',
    stats: '150k+ daily operations'
  },
  {
    id: 4,
    title: 'Corporate Branding Website',
    category: 'UI/UX & Web Solution',
    tags: ['Figma', 'HTML/CSS', 'React'],
    description: 'A stunning corporate website highlighting brand identity, including animated sections and dynamic query forms.',
    stats: 'Mobile-first design'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Works</h2>
        <p className="section-subtitle">Here is a selection of recent projects built with modern technologies.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <span className="project-category">{project.category}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="project-footer">
              <span className="project-stats">{project.stats}</span>
              <a href="#contact" className="project-link">
                View Project <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
