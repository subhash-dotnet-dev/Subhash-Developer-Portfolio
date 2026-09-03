/* ============================================
   PROJECTS DATA
   ============================================ */

const projectsData = [
  {
    id: 'task-management-system',
    title: 'Task Management System',
    category: 'Full Stack',
    tags: ['.NET', 'C#', 'SQL Server'],
    image: 'assets/images/projects/task-management.svg',
    shortDescription:
      'A full-featured task management application with role-based access, assignment tracking, and status workflows.',
    technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'Bootstrap', 'JavaScript'],
    features: [
      'Role-based authentication and authorization',
      'Create, assign, and track tasks through status workflows',
      'Dashboard with task summary and progress indicators',
      'Filtering and searching across tasks and projects',
    ],
    overview:
      'A web-based task management system built on ASP.NET Core MVC. It allows teams to organize work into projects, assign tasks to members, and track progress through configurable status pipelines.',
    problem:
      'Teams needed a centralized way to track tasks across multiple projects with clear ownership and status visibility.',
    solution:
      'Designed a layered architecture using the Repository Pattern and Dependency Injection, with SQL Server for persistence and a responsive Bootstrap frontend.',
    architecture:
      'Three-tier architecture — presentation (ASP.NET Core MVC), business logic (services with DI), and data access (Entity Framework repositories). Stored procedures handle complex queries.',
    challenges:
      'Managing role-based permissions across different project contexts while keeping the UI intuitive for end users.',
    results:
      'A maintainable, extensible codebase that cleanly separates concerns and supports future feature growth.',
    github: 'https://github.com/subhashyadav',
    liveDemo: '',
    hasDetails: true,
  },
  {
    id: 'e-commerce-api',
    title: 'E-Commerce REST API',
    category: 'Backend',
    tags: ['.NET', 'Web API', 'SQL Server'],
    image: 'assets/images/projects/ecommerce-api.svg',
    shortDescription:
      'A RESTful API for an e-commerce platform with product catalog, cart, and order management endpoints.',
    technologies: ['ASP.NET Core Web API', 'Entity Framework', 'SQL Server', 'Swagger', 'Postman'],
    features: [
      'CRUD endpoints for products, categories, and orders',
      'JWT-based authentication for customer accounts',
      'Swagger documentation for all endpoints',
      'Input validation and consistent error responses',
    ],
    overview:
      'A RESTful Web API providing the backend for an e-commerce platform. Exposes endpoints for browsing products, managing a shopping cart, and placing orders.',
    problem:
      'A frontend-agnostic backend was needed that could serve web and mobile clients through a consistent API contract.',
    solution:
      'Built with ASP.NET Core Web API, using Entity Framework for data access and Swagger for interactive documentation. Implemented JWT authentication for secure customer access.',
    architecture:
      'Controller-based Web API with service layer and repository pattern. Entity Framework Code First migrations manage the SQL Server schema.',
    challenges:
      'Designing a consistent response envelope for errors and pagination across all endpoints.',
    results:
      'A well-documented, testable API that any frontend client can consume without coupling to the data layer.',
    github: 'https://github.com/subhashyadav',
    liveDemo: '',
    hasDetails: true,
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    category: 'Full Stack',
    tags: ['.NET', 'C#', 'SQL Server'],
    image: 'assets/images/projects/inventory-management.svg',
    shortDescription:
      'An inventory tracking system with stock management, supplier records, and low-stock alerts.',
    technologies: ['ASP.NET Core MVC', 'ADO.NET', 'SQL Server', 'Bootstrap', 'JavaScript'],
    features: [
      'Track stock levels across multiple warehouse locations',
      'Supplier management with purchase order records',
      'Low-stock alerts and automatic reorder suggestions',
      'Transaction history for audit and reporting',
    ],
    overview:
      'A web application for managing inventory across warehouse locations. Tracks stock movements, supplier relationships, and generates alerts when items fall below threshold levels.',
    problem:
      'Manual inventory tracking led to stockouts and overstocking across multiple locations with no central visibility.',
    solution:
      'Built a centralized inventory system with ADO.NET for direct data access and stored procedures for performance-critical operations.',
    architecture:
      'ASP.NET Core MVC frontend with a data access layer using ADO.NET and stored procedures for complex queries. SQL Server stores all inventory and transaction data.',
    challenges:
      'Optimizing stock lookup queries across multiple warehouses while maintaining real-time accuracy.',
    results:
      'A performant inventory system with clear visibility into stock levels and movement history.',
    github: 'https://github.com/subhashyadav',
    liveDemo: '',
    hasDetails: true,
  },
  {
    id: 'student-management-portal',
    title: 'Student Management Portal',
    category: 'Full Stack',
    tags: ['.NET', 'C#', 'JavaScript'],
    image: 'assets/images/projects/student-portal.svg',
    shortDescription:
      'A student records portal with enrollment, grade tracking, and administrative dashboards.',
    technologies: ['ASP.NET Core MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'JavaScript'],
    features: [
      'Student enrollment and profile management',
      'Grade and attendance tracking with semester views',
      'Role-based dashboards for students, faculty, and admins',
      'Searchable directory with filtering by course and batch',
    ],
    overview:
      'A student management portal for educational institutions. Manages student records, course enrollment, grades, and attendance with role-specific views.',
    problem:
      'Institutions needed a unified system to manage student academic records across departments and semesters.',
    solution:
      'Developed an MVC application with Entity Framework for data access and role-based views for students, faculty, and administrators.',
    architecture:
      'ASP.NET Core MVC with Entity Framework Code First. Layered architecture with separate service and repository layers for business logic and data access.',
    challenges:
      'Designing flexible role-based access that could accommodate different institution policies.',
    results:
      'A structured student records system with clear role separation and extensible academic data models.',
    github: 'https://github.com/subhashyadav',
    liveDemo: '',
    hasDetails: true,
  },
  {
    id: 'react-portfolio-frontend',
    title: 'React Portfolio Frontend',
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'CSS3'],
    image: 'assets/images/projects/react-portfolio.svg',
    shortDescription:
      'A responsive portfolio frontend built with React, featuring component-based architecture and smooth interactions.',
    technologies: ['React.js', 'JavaScript (ES6+)', 'CSS3', 'Responsive Design'],
    features: [
      'Component-based architecture with reusable UI elements',
      'Responsive layout across mobile, tablet, and desktop',
      'Theme switching with persisted user preference',
      'Smooth scroll animations and micro-interactions',
    ],
    overview:
      'A frontend portfolio application built with React.js demonstrating component architecture, state management, and responsive design principles.',
    problem:
      'A modern, maintainable frontend was needed to showcase development work with reusable components and clean state management.',
    solution:
      'Implemented with React.js using functional components and hooks. CSS variables drive a consistent design system with theme support.',
    architecture:
      'React functional components with hooks for state. Component-based folder structure with separation between presentation and data.',
    challenges:
      'Ensuring consistent theming across all components while keeping the bundle lightweight.',
    results:
      'A clean, responsive frontend that demonstrates modern React patterns and reusable component design.',
    github: 'https://github.com/subhashyadav',
    liveDemo: '',
    hasDetails: true,
  },
  {
    id: 'blog-engine-api',
    title: 'Blog Engine API',
    category: 'Backend',
    tags: ['.NET', 'Web API', 'EF Core'],
    image: 'assets/images/projects/blog-engine.svg',
    shortDescription:
      'A content management API for a blog engine with posts, categories, comments, and author management.',
    technologies: ['ASP.NET Core Web API', 'Entity Framework', 'SQL Server', 'Swagger'],
    features: [
      'CRUD endpoints for posts, categories, and comments',
      'Author profiles with post ownership',
      'Pagination and filtering for post listings',
      'Swagger-documented API surface',
    ],
    overview:
      'A RESTful API powering a blog engine. Supports post creation and management, categorization, commenting, and author profiles.',
    problem:
      'A structured content API was needed to serve a blog frontend with flexible querying and author ownership.',
    solution:
      'Built with ASP.NET Core Web API and Entity Framework. Implemented DTOs for clean API contracts and Swagger for documentation.',
    architecture:
      'Web API with service layer, repository pattern, and Entity Framework Code First migrations. DTOs separate API contracts from domain models.',
    challenges:
      'Designing pagination and filtering that remained efficient on large post sets.',
    results:
      'A documented, structured content API ready to power any blog frontend.',
    github: 'https://github.com/subhashyadav',
    liveDemo: '',
    hasDetails: true,
  },
];

window.projectsData = projectsData;
