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


];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', subheading: 'Task 1.2P - s223773783', list: DevGlos });
});

module.exports = router;
