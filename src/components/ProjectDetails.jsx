import React from "react";

const ProjectDetails = ({ match }) => {
  const projectTitle = match.params.title;

  // Define your project data here
  const projects = [
    { title: "project-1", websiteUrl: "https://example.com/project1" },
    { title: "project-2", websiteUrl: "https://example.com/project2" },
    // Add more projects as needed
  ];

  // Find the selected project based on the URL parameter
  const selectedProject = projects.find(
    (project) => project.title === projectTitle
  );

  return (
    <div>
      {selectedProject ? (
        // Display project details when the title parameter is present
        <div>
          <h2>{selectedProject.title}</h2>
          <p>
            {/* Add project details here */}
            Details about {selectedProject.title} project.
          </p>
          <a
            href={selectedProject.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project Website
          </a>
        </div>
      ) : (
        // Handle the case when the project is not found
        <div>
          <h2>Project Not Found</h2>
          <p>The requested project does not exist.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
