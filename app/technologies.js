const technologies = [
    {
        "name": "React.js",
        "image": "/img/tech/react.svg",
        "description": "React.js is a powerful JavaScript library for building user interfaces. It enables developers to create reusable UI components and efficiently update the DOM using its virtual DOM. React is widely used for single-page applications and dynamic UIs."
    },
    {
        "name": "Next.js",
        "image": "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        "description": "Next.js is a React framework that simplifies server-side rendering and provides features like automatic code splitting, optimized page performance, and SEO-friendly rendering. It's ideal for building production-ready React applications."
    },
    {
        "name": "TailwindCSS",
        "image": "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
        "description": "TailwindCSS is a utility-first CSS framework that provides pre-built, customizable components. It allows developers to rapidly build modern, responsive web interfaces by composing utility classes directly in the HTML."
    },
    {
        "name": "JavaScript",
        "image": "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
        "description": "JavaScript is a versatile programming language used for both client-side and server-side development. It powers dynamic behavior on web pages and is essential for modern web development."
    },
    {
        "name": "TypeScript",
        "image": "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        "description": "TypeScript is a superset of JavaScript that adds optional static typing. It enhances code quality and developer productivity by providing type-checking capabilities and improved IDE support."
    },
    {
        "name": "Go",
        "image": "https://cdn.worldvectorlogo.com/logos/go-6.svg",
        "description": "Go, also known as Golang, is a statically typed, compiled programming language designed for efficiency and scalability. It's widely used for building robust backend services and distributed systems."
    },
    {
        "name": "Jest",
        "image": "/img/tech/jest.svg",
        "description": "Jest is a delightful JavaScript testing framework with a focus on simplicity. It's widely adopted for testing JavaScript applications, including React components, with features like snapshot testing and built-in mocking."
    },
    {
        "name": "Node.js",
        "image": "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        "description": "Node.js is a server-side JavaScript runtime environment that allows developers to build scalable network applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient."
    },
    {
        "name": "Nest.js",
        "image": "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
        "description": "Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript and incorporates best practices from frameworks like Angular."
    },
    {
        "name": "Python",
        "image": "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        "description": "Python is a versatile programming language known for its readability and simplicity. It's used for web development, data analysis, artificial intelligence, and scientific computing."
    },
    {
        "name": "Django",
        "image": "https://cdn.worldvectorlogo.com/logos/django-community.svg",
        "description": "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It provides built-in tools for authentication, routing, ORM, and templating."
    },
    {
        "name": "WebRTC",
        "image": "https://cdn.worldvectorlogo.com/logos/webrtc.svg",
        "description": "WebRTC (Web Real-Time Communication) is a set of technologies that enable peer-to-peer audio, video, and data sharing over the web. It's commonly used for real-time communication applications."
    },
    {
        "name": "Docker",
        "image": "https://cdn.worldvectorlogo.com/logos/docker.svg",
        "description": "Docker is a platform for developing, shipping, and running applications in containers. It provides a lightweight virtualization solution that enables consistent deployment across different environments."
    },
    {
        "name": "WebSockets",
        "image": "/img/tech/websocket.svg",
        "description": "WebSockets is a protocol that enables full-duplex communication between a client and a server over a single, long-lived connection. It's ideal for applications requiring real-time data updates."
    },
    {
        "name": "PostgreSQL",
        "image": "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        "description": "PostgreSQL is a powerful, open-source relational database management system known for its reliability, extensibility, and SQL compliance. It's widely used in enterprise and web applications."
    },
    {
        "name": "MySQL",
        "image": "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
        "description": "MySQL is an open-source relational database management system known for its speed, reliability, and ease of use. It's a popular choice for web applications and scalable database solutions."
    },
    {
        "name": "MongoDB",
        "image": "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        "description": "MongoDB is a NoSQL database known for its flexibility and scalability. It stores data in JSON-like documents and is widely used for applications requiring flexible data models and high performance."
    },
    {
        "name": "Firestore",
        "image": "/img/tech/firebase.png",
        "description": "Firestore is a flexible, scalable database from Firebase and Google Cloud Platform. It supports real-time data synchronization and offline support, making it ideal for mobile and web applications."
    },
    {
        "name": "IaC",
        "image": "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg",
        "description": "Infrastructure as Code (IaC) refers to managing and provisioning computing infrastructure through machine-readable files. It allows for automated infrastructure deployment and consistency across environments."
    },
    {
        "name": "Pipelines",
        "image": "https://cdn.worldvectorlogo.com/logos/jenkins.svg",
        "description": "Pipelines are a series of automated steps that define the software delivery process. Tools like Jenkins enable continuous integration and continuous delivery (CI/CD) by automating build, test, and deployment workflows."
    },
    {
        "name": "Firebase",
        "image": "/img/tech/firebase.png",
        "description": "Firebase is a comprehensive platform from Google for building mobile and web applications. It provides features like real-time databases, authentication, analytics, hosting, and more, all as backend services."
    },
    {
        "name": "AWS",
        "image": "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
        "description": "Amazon Web Services (AWS) is a leading cloud platform offering a wide range of services such as computing power, storage, databases, and machine learning. It's popular for its scalability, reliability, and flexibility."
    },
    {
        "name": "AWS EC2",
        "image": "https://cdn.worldvectorlogo.com/logos/aws-ec2.svg",
        "description": "AWS EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud. It allows users to launch virtual servers (instances) and scale capacity up or down based on application demands."
    },
    {
        "name": "AWS ECS",
        "image": "/img/tech/aws-elastic-container-service.svg",
        "description": "AWS ECS (Elastic Container Service) is a fully managed container orchestration service that allows users to run Docker containers in the cloud. It simplifies deploying, managing, and scaling containerized applications."
    },
    {
        "name": "AWS ECR",
        "image": "/img/tech/elastic-container-registry.svg",
        "description": "AWS ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images. It integrates seamlessly with AWS services like ECS and EKS."
    },
    {
        "name": "AWS Route53",
        "image": "/img/tech/route-53.svg",
        "description": "AWS Route53 is a scalable Domain Name System (DNS) web service designed to route end users to internet applications. It offers domain registration, DNS routing, and health monitoring with high availability."
    },
    {
        "name": "AWS CloudFormation",
        "image": "https://cdn.worldvectorlogo.com/logos/aws-cloudformation.svg",
        "description": "AWS CloudFormation is an Infrastructure as Code (IaC) service that allows users to define and provision AWS infrastructure using YAML or JSON templates. It automates resource provisioning and ensures consistent deployment."
    },
    {
        "name": "AWS Code Pipelines",
        "image": "/img/tech/aws-code-pipeline.svg",
        "description": "AWS CodePipeline is a fully managed continuous integration and continuous delivery (CI/CD) service. It automates build, test, and deployment workflows, enabling fast and reliable software delivery on AWS."
    },
    {
        "name": "AWS CodeDeploy",
        "image": "/img/tech/aws-code-deploy.svg",
        "description": "AWS CodeDeploy automates software deployments to Amazon EC2, AWS Lambda, and on-premises servers. It ensures reliable updates with minimal downtime, supports automatic and manual deployments, and integrates with CI/CD pipelines."
    },
    {
        "name": "Salesforce",
        "image": "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
        "description": "Salesforce is a cloud-based CRM platform for sales, marketing, and customer service. It enhances productivity, provides analytics for insights, and improves customer relationships through tools like sales management, marketing automation, and support."
    }
];

export default technologies;