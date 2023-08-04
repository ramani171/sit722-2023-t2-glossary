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

  }

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', subheading: 'Task 1.2P - s223773783', list: DevGlos });
});

module.exports = router;
