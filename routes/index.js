var express = require('express');
var router = express.Router();

const DevGlos = [
  {
    'sno':'1',
    'term':'DevOps',
    'def':'DevOps represents the combination of Development (Dev) and Operations (Ops).',
    'ref': 'Krief, M. (2022). Learning DevOps A Comprehensive Guide to Accelerating DevOps Culture Adoption with Terraform,Azure DevOps, Kubernetes, and Jenkins. Packt Publishing, Limited.'
  },

  {
    'sno':'2',
    'term':'CI',
    'def':'Continuous integration is a software development practice where members of a team integrate their work frequently.Each integration is verified by an automated build to detect integration errors',
    'ref': 'Krief, M. (2022). Learning DevOps A Comprehensive Guide to Accelerating DevOps Culture Adoption with Terraform, Azure DevOps, Kubernetes, and Jenkins. Packt Publishing, Limited.'
  },

  {
    'sno':'3',
    'term':'CD',
    'def':'After CI, applications must be deployed automatically in one or more non-production environments, which is called staging. This process is called continuous delivery (CD).',
    'ref': 'Krief, M. (2022). Learning DevOps A Comprehensive Guide to Accelerating DevOps Culture Adoption with Terraform,Azure DevOps, Kubernetes, and Jenkins. Packt Publishing, Limited.'
  },

  {
    'sno':'4',
    'term':'Agile',
    'def':'Agile is a key part of DevOps. While Agile focuses on constant changes and making developers and development cycles more efficient and DevOps focuses on CI and CD.',
    'ref': 'Coupland, M. (2021). DevOps Adoption Strategies: Principles, Processes, Tools, and Trends. Packt Publishing Ltd.'
  },
  {
    'sno':'5',
    'term':'Silos',
    'def':"A silo in IT is an isolated point in a system where data is kept segregated (on purpose or accidently) from other parts of an organization’sinformation and communication technology (ICT) architecture.",
    'ref': 'Rouse, M. (2023, July 14). Techopedia. https://www.techopedia.com/definition/25939/silo#What_Doe s_Silo_Mean'
  },

  {
    'sno':'6',
    'term':'IaC',
    'def':'In DevOps scope, Infrastructure as Code (IaC) is the automation of routine tasks through code, typically as configuration definition files.',
    'ref': 'Vadapalli, S. (2018). DevOps : Dive into the core DevOps strategies, rapid learning solution. Packt Publishing.'
  },

  {
    'sno':'7',
    'term':'Containers',
    'def':'The container acts as a boundary between the development and operations responsibilities. They can remove the need for some of the collaboration between development and operations',
    'ref': 'Coupland, M. (2021). DevOps adoption strategies : principles, processes, tools, and trends :embracing DevOps through effective culture, people, and processes. Packt Publishing.'
  },

  {
    'sno':'8',
    'term':'Microservices',
    'def':'Microservices are an architectural and organizational approach where software is composed of small independent services that communicate over well-defined APIs. It makes applications easier to scale and faster to develop, accelerates time-to-market for new features.',
    'ref': 'AWS. (2019). What are Microservices? | AWS. Amazon Web Services, Inc. https://aws.amazon.com/microservices/'
  },

  {
    'sno':'9',
    'term':'Bootstrap',
    'def':'Bootstrap is the most popular HTML, CSS and JS framework for developing a responsive and mobile friendly website. It can also use JavaScript plug-ins.',
    'ref': 'Kumar, R. (2022, December 14). What is Bootstrap & How it works? An Overview and Its Use Cases!!! DevOpsSchool.com. https://www.devopsschool.com/blog/what-is-bootstrap-how-it-works-an-overview-and-its-use-case/'
  },

  {
    'sno':'10',
    'term':'Dockers',
    'def':'We use Docker to package, publish, and test our microservices',
    'ref': 'Davis, A. (2021). Bootstrapping microservices with Docker, Kubernetes, and Terraform : a project-based guide. Manning.'
  },
  {
    'sno':'11',
    'term':'Image',
    'def':' An image is a bootable snapshot of a server (in our case, a microservice) including all the code, dependencies, and assets that it needs to run.',
    'ref': 'Davis, A. (2021). Bootstrapping microservices with Docker, Kubernetes, and Terraform : a project-based guide. Manning.'
  },

  {
    'sno':'12',
    'term':'Kubernetes',
    'def':'Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications',
    'ref': 'Kubernetes. (2019). Production-Grade Container Orchestration. Kubernetes.io. https://kubernetes.io/'
  },
  {
     'sno':'13',
    'term':'DevOps Pipeline',
     'def':'DevOps pipeline is a set of tools and automated practices that helps in the collaboration of developers and operational workforce from building to deploying the code into client system.',
     'ref':'Atlassian. (n.d.). DevOps Pipeline. Atlassian. https://www.atlassian.com/devops/devops-tools/devops-pipeline#:~:text=A%20DevOps%20pipeline%20is%20a'
     
  },
  {
    'sno':'14',
   'term':'DevOps as a service',
    'def':'This helps in building environments and automation for smaller organizations that may not have the budget or experience.',
    'ref':'Chapter 2: Business Benefits, Team Topologies, and Pitfalls of DevOps - DevOps Adoption Strategies: Principles, Processes, Tools, and Trends [Book]. (n.d.). Www.oreilly.com. Retrieved August 4, 2023, from https://learning.oreilly.com/library/view/devops-adoption-strategies/9781801076326/B17192_02_Final_ASB_ePub.xhtml#_idParaDest-52'

  },
  {
    'sno':'15',
   'term':'Anti-patterns',
    'def':'Practices that are counterproductive to the performance and overall progress of DevOps transformation.',
    'ref':'Chapter 2: Business Benefits, Team Topologies, and Pitfalls of DevOps - DevOps Adoption Strategies: Principles, Processes, Tools, and Trends [Book]. (n.d.). Www.oreilly.com. Retrieved August 4, 2023, from https://learning.oreilly.com/library/view/devops-adoption-strategies/9781801076326/B17192_02_Final_ASB_ePub.xhtml#_idParaDest-58'

  },
  {
    'sno':'16',
   'term':'Terraform',
    'def':'A Infrastructure as Code(TaC) tool developed by HashiCorp, users create and manage data infrastructure in cloud.',
    'ref':'‌Chapter 2: Provisioning Cloud Infrastructure with Terraform - Learning DevOps - Second Edition [Book]. (n.d.). Www.oreilly.com. Retrieved August 4, 2023, from https://learning.oreilly.com/library/view/learning-devops/9781801818964/B17725_02_ePub.xhtml#_idParaDest-31'

  },
  {
    'sno':'17',
   'term':'MVP',
    'def':'Minimum Viability Product(MVP) is defined as basic version of an application that should be released early and updated frequently.',
    'ref':'Chapter 12: Implementing DevOps in a Real-World Organization - DevOps Adoption Strategies: Principles, Processes, Tools, and Trends [Book]. (n.d.). Www.oreilly.com. Retrieved August 4, 2023, from https://learning.oreilly.com/library/view/devops-adoption-strategies/9781801076326/B17192_12_Final_ASB_ePub.xhtml'

  },
  {
    'sno':'18',
   'term':'BDD',
    'def':'Behavior-driven design(BDD) is a agile methodology which an application is documented and designed around user expected behavior.',
    'ref':'What is behavior-driven development (BDD)? Definition from SearchSoftwareQuality. (n.d.). Software Quality. Retrieved August 4, 2023, from https://www.techtarget.com/searchsoftwarequality/definition/Behavior-driven-development-BDD#:~:text=Laura%20Fitzgibbons-'

  },
  {
    'sno':'19',
   'term':'TDD',
    'def':'Test-Driven Development(TDD) is a methodology that focuses on writing iterative test cases to build and test software continuously.',
    'ref':'What is Test-Driven Development? (n.d.). Testdriven.io. https://testdriven.io/test-driven-development/'

  },
  {
    'sno':'20',
   'term':'SRE',
    'def':'Site reliability engineering(SRE) is a principle that applies practices and definition of software engineering to infrastructure and operations problems.',
    'ref':'Chapter 12: Implementing DevOps in a Real-World Organization - DevOps Adoption Strategies: Principles, Processes, Tools, and Trends [Book]. (n.d.). Www.oreilly.com. Retrieved August 4, 2023, from https://learning.oreilly.com/library/view/devops-adoption-strategies/9781801076326/B17192_12_Final_ASB_ePub.xhtml#_idParaDest-250'

  },
  {
    'sno':'21',
   'term':'Container Orchestration',
    'def':'Container orchestration automates deployment, scaling, and management of containerized applications for efficient DevOps workflows using tools like Kubernetes.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved August 21, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#heading_id_7'
  },
  {
    'sno':'22',
    'term':'Docker Compose',
    'def':'Docker Compose is a tool for defining and running multi-container Docker applications using a single configuration file, simplifying local development and testing.',
    'ref':'8 Automated testing for microservices - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved August 21, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/08.htm',
  },
  {
    'sno':'23',
    'term':'SDK',
    'def':'Software Development Kit is a set of tools which are platform-specific, used for building application for developers in one place.',
    'ref':'What is SDK? - SDK Explained - AWS. (n.d.). Amazon Web Services, Inc. Retrieved August 21, 2023, from https://aws.amazon.com/what-is/sdk/#:~:text=A%20software%20development%20kit%20(SDK',
  },
  {
    'sno':'24',
    'term':'YAML',
    'def':"YAML (YAML A'int Markup Language) is a human-readable data serialization format using indentation for structuring, commonly used for configuration files and data exchange in software applications.",
    'ref':'What is YAML? A Beginner’s Guide. (2021, April 9). CircleCI. https://circleci.com/blog/what-is-yaml-a-beginner-s-guide/',
  },

  {
    'sno':'25',
    'term':'Docker Compose file',
    'def':'A Docker Compose file is a YAML configuration defining how to run and connect multiple Docker containers as a single application.',
    'ref':'The Compose file. (2023, August 11). Docker Documentation. https://docs.docker.com/compose/compose-file/03-compose-file/',
  },

  {
    'sno':'26',
    'term':'RabbitMQ',
    'def':'This is a message sequencing software used for sending messages between microservices.',
    'ref':'5 Communication between microservices - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved August 21, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/05.htm#heading_id_4',
  },

  {
    'sno':'27',
    'term':'amqplib',
    'def':'It is a NPM package that is used to send and receive messages from JavaScript by configuring RabbitMQ',
    'ref':'5 Communication between microservices - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved August 21, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/05.htm#heading_id_4',
  },

  {
    'sno':'28',
    'term':'DOcker Swarm Hosted Service',
    'def':'Docker Swarm Hosted Service provides native container orchestration as a service, allowing automatic scaling and management of containerized applications across a cluster of machines.It simplifies the deployment and operation of containers, enhancing collaboration and resource utilization for distributed applications.',
    'ref':'4 Data management for microservices - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved August 21, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/04.htm#heading_id_12',
  },

  {
    'sno':'29',
    'term':'Separation of concerns',
    'def':'Separation of Concerns is a design principle that advocates breaking software systems into distinct components, each addressing a specific aspect or concern. This promotes modularity, reusability, and easier maintenance by isolating different functionalities, such as user interface, data storage, and business logic, within separate modules or layers. This enhances overall system clarity and adaptability.',
    'ref':'Separation of Concerns. (n.d.). DevIQ. https://deviq.com/principles/separation-of-concerns',
  },

    {
    'sno':'30',
    'term':'Single responsibility principle',
    'def':'The Single Responsibility Principle in DevOps refers to the practice of designing software components or microservices with a specific and well-defined purpose, ensuring they perform one distinct function effectively, which aids maintainability, scalability, and agility in the development and operations lifecycle.',
    'ref':'Devops, A. (2022, September 3). SOLID Principles Part-1. Medium. https://blog.devgenius.io/solid-principles-part-1-67b244fbac06',
  },


  // {
  //   'sno':'',
  //   'term':'',
  //   'def':'',
  //   'ref':'',
  // },



];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', subheading: 'Task 1.2P - s223773783', list: DevGlos });
});

module.exports = router;
