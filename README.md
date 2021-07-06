



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ayuba-dn/employee-service">
    <img src="https://i.ibb.co/zFM537r/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Employee Service</h3>

  <p align="center">
 This service manages employees across different organizations and countries. It is a demonstration of the patterns i utilize in building projects. Technical Proposal document for improvement is available <a href="https://docs.google.com/document/d/1NQAYiJfMpgfAQGixtT5ZST-BRoveKTAwoqVYh4KoXL0/edit?usp=sharing">here</a>
    <br />
    <a href="#installation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://docs.google.com/document/d/1NQAYiJfMpgfAQGixtT5ZST-BRoveKTAwoqVYh4KoXL0/edit?usp=sharing">View Proposal</a>
    ·
    <a href="https://github.com/ayuba-dn/employee-service/issues">Report Bug</a>
    ·
    <a href="https://github.com/ayuba-dn/employee-service/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Stack Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This employee service is an API server that basically returns a list of employees alongside their countries. To ensure optimal performance, code readability and extensibility of this project; I have followed certain software developement patterns/principle which i highlight below.

* Test-First (TDD): I wrote the tests base on the user story, run the tests, and write the required code when the test fails
* Single Responsibility Principle (SRP): As much as possible, the classes and functions created are designated for a single purpose ()
* DRY (Do not repeat yourself): I created configuration files, helper classes and functions to avoid code repetition
* Time and space Efficiency (The big O and the event loop): To ensure system efficiency, the algorithm design for the system have been influenced My understanding of the big(0) as well as the event loop


### Built With

The following are the major tools that have been utilized for this project.
* [Typescript](https://www.typescriptlang.org)
* [Nodejs](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [Jest](https://jestjs.io/): I utilized this rich testing library to write unit tests
* [Supertest](https://www.npmjs.com/package/supertest): To ensure every unit of this service including the endpoints is tested, i utilize this library to mock HTTP requests to the endpoints
* [Auth0](https://auth0.com/): Auth0 is integrated to demonstrate how authentication and authorization middelwares will fit into the codebase. A test auth0 account is used for this.
* [Docker](https://docker.com/): The service is dockerized and pushed to docker hub for ease of installation accross different environments
* [Tsoa](https://github.com/lukeautry/tsoa#readme): This has been used to automatically generate API documentation in line with the Swagger API specification
* [Github_Actions](https://docs.github.com/en/actions/guides/about-continuous-integration): To automatically and continuosly push this service to production, a workflow has been created using git actions.






<!-- GETTING STARTED -->
## Running this Project

This section contains a highlight of how to install and run the project

### Prerequisites

* [Nodejs] Runtime environment coupled with npm, downloadable at (https://nodejs.org/en/)
* [Docker] (Optional)



### Installation

RUN WITH DOCKER
 ```sh
 docker run -d -p 8000:8000 --name employee-svc imagehub360/employee-service:main
 ```
USING NPM
1. Clone the repo
   ```sh
   git clone https://github.com/ayuba-dn/employee-service.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Configure ports in `.env`
  
5. Start the project
   ```sh
     npm run dev
   ```
  
5. Run Tests
   ```sh
     npm run test
   ```


<!-- USAGE EXAMPLES -->
## Usage

The API documentation for this service will be available automatically at the path /docs. Example if you are running the project on the host localhost:8000, the docs will be available at localhost:8000/docs


<!-- ROADMAP -->
## Roadmap

See the (https://docs.google.com/document/d/1NQAYiJfMpgfAQGixtT5ZST-BRoveKTAwoqVYh4KoXL0/edit#heading=h.m0x3bho09ha3) for a list of proposed features (and known issues).






<!-- CONTACT -->
## Contact

Ayuba Dauda - [@ayuba-dn](https://twitter.com/ayuba-dn) - mailtoayuba@gmail.com

Project Link: [https://github.com/ayuba-dn/employee-service](https://github.com/ayuba-dn)








