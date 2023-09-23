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
    'term':'Docker Swarm Hosted Service',
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

  {
    'sno':'31',
    'term':'SKU',
    'def':'Stock Keeping Unit contains all the version of a product,Azure Load Balancer will be available in two (Stock-keeping-Unit)SKUs - Basic and Standard.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#:-:text=%E2%91%A5%20Using%20the%20basic',
  },

    
  {
    'sno':'32',
    'term':'SSH key',
    'def':'SSH is an access credential following SSH protocol similar to names and passwords.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#:-:text=SSH%20key',
  },
  {
    'sno':'33',
    'term':'Vault',
    'def':'HashiCorp Vault is an identity-based secrets and encryption management system.Terraform Cloud automatically configures these values as environment variables in the runtime environment. To leverage these secrets from Vault in conjunction with other Terraform resources, you can employ the Vault provider.',
    'ref':'Chapter 12: Architecting for DevSecOps - Enterprise DevOps for Architects [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/enterprise-devops-for/9781801812153/B17492_12_ePub_RK.xhtml#:-:text=%20Vault%20',
  },
  {
    'sno':'34',
    'term':'Service Principle',
    'def':'A "service principal" refers to a type of authentication mechanism used to interact with cloud providers and services like Microsoft Azure, Google Cloud Platform (GCP), or AWS (Amazon Web Services) when managing infrastructure with Terraform.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#:-:text=A%20service%20principal%20is',
  },
  {
    'sno':'35',
    'term':'RBAC',
    'def':'RBAC stands for Role-Based Access Control. AKS provides native integration with Azure Active Directory (Azure AD) and Kubernetes RBAC, allowing you to define fine-grained access control for users and applications interacting with your Kubernetes clusters.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#:-:text=-rbac',
  },

    {
    'sno':'36',
    'term':'Kubectl',
    'def':'kubectl is a command-line tool for interacting with Kubernetes clusters, used to manage containerized applications and resources.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#:-:text=-rbac',
  },
  {
    'sno':'37',
    'term':'tls',
    'def':'TLS stands for Transport Layer Security. It is a cryptographic protocol designed to provide secure communication over a network, typically the internet.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#:-:text=tls_private_key',
  },
  {
    'sno':'38',
    'term':'Nodes',
    'def':'In the context of Kubernetes, "nodes" refer to the individual machines or instances that make up a Kubernetes cluster. Nodes are the worker machines responsible for running containerized applications and services.',
    'ref':'6 Creating your production environment - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 8, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm#:-:text=%20nodes',
  },
  {
    'sno':'39',
    'term':'CRI',
    'def':'The Container Runtime Interface (CRI) is a standardized interface that allows container runtimes to seamlessly integrate with the kubelet on a node.',
    'ref':'Glossary. (n.d.). Kubernetes. Retrieved September 8, 2023, from https://kubernetes.io/docs/reference/glossary/?fundamental=true#term-cri',
  },
  {
    'sno':'40',
    'term':'UID',
    'def':'Uid Link is a system-generated string used to provide a unique identifier for objects within the Kubernetes ecosystem. This string is crucial for distinguishing and tracking various resources, such as pods, services, and nodes, throughout their lifecycle in a Kubernetes cluster.',
    'ref':'Glossary. (n.d.). Kubernetes. https://kubernetes.io/docs/reference/glossary/?fundamental=true',
  },
  
  {
    'sno':'41',
    'term':'Bitbucket',
    'def':"Bitbucket is a web-based platform for version control and collaboration that enables DevOps teams to host, manage, and collaborate on code repositories using Git or Mercurial. It supports features like pull requests, code review, and continuous integration.",
    'ref':'8 Automated testing for microservices - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 23, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/08.htm#:-:text=configuring%20Bitbucket%20Pipelines',
  },

  {
    'sno':'42',
    'term':'Tenant ID',
    'def':'In the context of DevOps and cloud services like Azure, a Tenant ID is a unique identifier associated with an Azure Active Directory (Azure AD) tenant. It is used to authenticate and manage resources within that tenant, often in conjunction with service principals for automation and access control.',
    'ref':'MikePlumleyMSFT. (2023, July 17). Find your Microsoft 365 tenant ID - SharePoint in Microsoft 365. Learn.microsoft.com. https://learn.microsoft.com/en-us/sharepoint/find-your-office-365-tenant-id',
  },

  {
    'sno':'43',
    'term':'ARM',
    'def':"ARM is Microsoft's infrastructure as code (IaC) service in Azure DevOps. It allows DevOps teams to define and manage Azure resources using templates and scripts, making it easier to provision, update, and delete cloud infrastructure as part of the DevOps pipeline.",
    'ref':'Evangelist, Y. P., Product. (n.d.). Azure Resource Manager (ARM) Benefits and Best Practices. Bluexp.netapp.com. Retrieved September 23, 2023, from https://bluexp.netapp.com/blog/azure-cvo-blg-azure-resource-manager-arm-benefits-and-best-practices#:~:text=Topics%3A%20Cloud%20Volumes%20ONTAP%2C%20Azure',
  },

  {
    'sno':'44',
    'term':'Terraform state',
    'def':'Terraform state refers to the record of the current state of infrastructure managed by Terraform, an open-source IaC tool. It helps Terraform understand the resources it manages, track changes, and plan updates. Storing this state is essential for safely managing infrastructure as code.',
    'ref':'7 Getting to continuous delivery - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 23, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/07.htm#:-:text=We%20learned%20how%20to',
  },

  {
    'sno':'45',
    'term':'REST',
    'def':'REST is an architectural style used in DevOps for designing networked applications. It uses a set of principles for creating web services that are scalable, stateless, and easy to consume. RESTful APIs are commonly used in DevOps for communication between different components of a system.',
    'ref':'What is a REST API? | IBM. (n.d.). Www.ibm.com. Retrieved September 23, 2023, from https://www.ibm.com/topics/rest-apis#:~:text=For%20example%2C%20a%20REST%20API',
  },

  {
    'sno':'46',
    'term':'Jest',
    'def':'Jest is a JavaScript testing framework commonly used in DevOps for testing JavaScript applications and components. It provides a suite of tools for writing and running tests, making it easier to ensure the reliability and functionality of code.',
    'ref':'8 Automated testing for microservices - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 23, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/08.htm#:-:text=Jest%20',
  },

  {
    'sno':'47',
    'term':'Cypress',
    'def':'Cypress is an end-to-end testing framework used in DevOps to test web applications. It allows DevOps teams to write and run automated tests that simulate real user interactions with a web application, helping identify and fix issues early in the development process.',
    'ref':'Cypress (software). (2023, July 13). Wikipedia. https://en.wikipedia.org/wiki/Cypress_(software)',
  },

  {
    'sno':'48',
    'term':'Gateway',
    'def':'In DevOps, a gateway typically refers to an API gateway, which is a server that acts as an entry point for multiple microservices. It handles tasks like routing, load balancing, authentication, and rate limiting, making it easier to manage and secure microservices-based applications.',
    'ref':'A Guide to DevSecOps with API Gateway - API7.ai. (n.d.). A Guide to DevSecOps with API Gateway - API7.Ai. Retrieved September 23, 2023, from https://api7.ai/blog/guide-to-devsecops-with-api-gateway',
  },

  {
    'sno':'49',
    'term':'Load Balancer',
    'def':'A load balancer in DevOps is a network device or service that distributes incoming network traffic across multiple servers or instances. It ensures high availability, improves performance, and prevents overloading of a single server, making it a critical component for scaling applications.',
    'ref':'What is Kubernetes Load Balancer? (n.d.). Avi Networks. Retrieved September 23, 2023, from https://avinetworks.com/glossary/kubernetes-load-balancer/#:~:text=The%20load%20balancer%20tracks%20the',
  },

  {
    'sno':'50',
    'term':'Timeout',
    'def':'In DevOps, a timeout refers to the maximum allowed duration for a process or operation to complete. Timeouts are often used in various DevOps tools and systems to handle situations where an operation takes longer than expected, ensuring that resources are not tied up indefinitely and that errors are appropriately managed.',
    'ref':'10 Healthy microservices - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. (n.d.). Www.oreilly.com. Retrieved September 23, 2023, from https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/10.htm#:-:text=timeout',
  }
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
