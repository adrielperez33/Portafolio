import { Injectable } from '@nestjs/common';

@Injectable()
export class CvService {
  getCv() {
    return {
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
  }
}
