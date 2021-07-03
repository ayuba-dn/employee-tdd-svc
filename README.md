



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ayuba-dn/employee-service">
    <img src="assets/images/logo.png" alt="Logo" width="80" height="80">
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
* Single Responsibility Principle (SRP): As much as possible, the classes created are designated for a single purpose ()
* DRY (Do not repeat yourself): I created configuration files, helper classes and methods to avoid code repetition
* Time and space Efficiency (The big O and the event loop): To ensure system efficiency, the algorithm design for the system have been influenced My understanding of the big(0) as well as the event loop


### Built With

The following are the major tools that have been utilised for this project.
* [Typescript](https://www.typescriptlang.org)
* [Nodejs](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [Jest](https://jestjs.io/)
* [Supertest](https://www.npmjs.com/package/supertest)




<!-- GETTING STARTED -->
## Running this Project

The project is easy to run and extend. Subsequent sections give a highlight

### Prerequisites

* [Nodejs] Runtime environment coupled with npm, downloadable at (https://nodejs.org/en/)


### Installation

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


<!-- USAGE EXAMPLES -->
## Usage

The formal documentation for this service is still in the pipelin. You can however retrieve all employees with the route below;

```sh
   /api/v1/employees
   ```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ayuba-dn/employee-service/issues) for a list of proposed features (and known issues).






<!-- CONTACT -->
## Contact

Ayuba Dauda - [@ayuba-dn](https://twitter.com/ayuba-dn) - mailtoayuba@gmail.com

Project Link: [https://github.com/ayuba-dn/employee-service](https://github.com/ayuba-dn)








