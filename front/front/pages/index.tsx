
import '../styles/globals.css'
import { useEffect, useState } from "react";
import { fetchCV } from "../services/api";

export default function Home() {
  const [cv, setCv] = useState<any>(null);

  useEffect(() => {
    fetchCV().then(setCv);
  }, []);

  if (!cv) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto p-6 text-center">
      <div className="container animate-fade-in">
        <h1>{cv.name}</h1>
        <h2>{cv.role}</h2>
        <p>{cv.about}</p>
      </div>


      <div className="container animate-fade-in delay-300">
        <h3 className="animate-bounce">📧 Contacto</h3>
        <p>Email: {cv.contact.email}</p>
        <p>
          <a href={cv.contact.linkedin} target="_blank" className="text-blue-500">
            LinkedIn
          </a>
        </p>
        <p>
          <a href={cv.contact.github} target="_blank" className="text-blue-500">
            GitHub
          </a>
        </p>
      </div>

      <div className="container animate-fade-in delay-400">
        <h3 className="animate-bounce">🛠 Habilidades</h3>
        <ul>
          {Object.entries(cv.skills).map(([category, skills]: any) => (
            <li key={category}>
              <strong>{category}:</strong> {skills.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="container animate-fade-in delay-500">
        <h3 className="animate-bounce">🚀 Proyectos</h3>
        <ul>
          {cv.projects.map((project: any, index: number) => (
            <li key={index}>
              <strong>{project.name}</strong> - {project.role} ({project.date})
              <p>{project.description}</p>
              <a href={project.github} target="_blank" className="text-blue-500">
                Ver en GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container animate-fade-in delay-600">
        <h3 className="animate-bounce">💼 Experiencia</h3>
        <ul>
          {cv.experience.map((job: any, index: number) => (
            <li key={index}>
              <strong>{job.position}</strong> en {job.company} ({job.date})
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container animate-fade-in delay-700">
        <h3 className="animate-bounce">🎓 Educación</h3>
        <ul>
          {cv.education.map((edu: any, index: number) => (
            <li key={index}>
              <strong>{edu.title}</strong> - {edu.institution} ({edu.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

