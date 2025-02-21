import '../styles/globals.css'
import { useEffect, useState } from "react";

export default function Home() {
  const [cv, setCv] = useState<any>(null);

  useEffect(() => {
    const cvData = {
      name: 'Adriel Pérez',
      role: 'Full Stack Developer',
      about:
        'Desarrollador especializado en backend con experiencia en TypeScript, Node.js y bases de datos relacionales como PostgreSQL y MySQL. Pasión por optimizar APIs, mejorar rendimiento y aplicar buenas prácticas en desarrollo.',
      contact: {
        email: 'adrielperez227@gmail.com',
        linkedin: 'https://www.linkedin.com/in/adriel-perez-ab3266268/',
        github: 'https://github.com/adrielperez33',
      },
      skills: {
        languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Java'],
        frameworks: ['React', 'Node.js', 'Nest.js'],
        databases: ['PostgreSQL', 'MySQL'],
        tools: ['Git', 'Swagger', 'Jest'],
        methodologies: ['Scrum'],
      },
      projects: [
        {
          name: 'TecnoPanda (eCommerce)',
          role: 'Backend Developer',
          date: 'Abr. 2022 - May. 2022',
          description:
            'Desarrollé un eCommerce con autenticación JWT, manejo de errores, CRUD de productos, usuarios y órdenes, documentación con Swagger y optimización de consultas.',
          tech: ['TypeScript', 'JavaScript', 'PostgreSQL'],
          github: 'https://github.com/adrielperez33/tecnoPanda',
        },
        {
          name: 'Fit Manager (Web API para Gym)',
          role: 'Backend Developer',
          date: 'Proyecto grupal',
          description:
            'API para gestión de gimnasios con integración de pagos, persistencia de usuario y roles diferenciados. Implementación de Mercado Pago y diseño de entidades clave.',
          tech: ['TypeScript', 'Node.js', 'PostgreSQL'],
          github: 'https://github.com/adrielperez33/fit-manager',
        },
      ],
      experience: [
        {
          position: 'Cajero / Repositor / Fiambrero',
          company: 'Granja Benedetti',
          date: 'Ene. 2022 - Jun. 2023',
          description:
            'Atención al cliente, gestión de ventas y organización de stock.',
        },
        {
          position: 'Vendedor / Atención al Cliente',
          company: 'Barijho Beer Garden',
          date: 'May. 2023 - Ene. 2024',
          description:
            'Asesoría de clientes, gestión de pagos y promoción de un ambiente colaborativo.',
        },
      ],
      education: [
        {
          title: 'Full Stack Web Developer',
          institution: 'Henry Bootcamp',
          date: 'Mar. 2024 - Actualidad',
        },
        {
          title: 'Programación Full Stack',
          institution: 'Egg Education',
          date: 'Feb. 2023 - Dic. 2024',
        },
      ],
    };

    setCv(cvData); // Setea los datos de CV directamente en el estado
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
