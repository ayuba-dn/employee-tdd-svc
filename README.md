
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ayuba-dn/EmployeeService">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Employee Service</h3>

  <p align="center">
 This service manages employees across different organizations and countries. It is a demonstration of the patterns i utilize in building projects
    <br />
    <a href="https://github.com/ayuba-dn/EmployeeService"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ayuba-dn/EmployeeService">View Demo</a>
    ·
    <a href="https://github.com/ayuba-dn/EmployeeService/issues">Report Bug</a>
    ·
    <a href="https://github.com/ayuba-dn/EmployeeService/issues">Request Feature</a>
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
   git clone https://github.com/ayuba-dn/EmployeeService.git
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

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ayuba-dn/EmployeeService/issues) for a list of proposed features (and known issues).






<!-- CONTACT -->
## Contact

Ayuba Dauda - [@ayuba-dn](https://twitter.com/ayuba-dn) - mailtoayuba@gmail.com

Project Link: [https://github.com/ayuba-dn/EmployeeService](https://github.com/ayuba-dn)









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/ayuba-dn/EmployeeService/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/ayuba-dn/EmployeeService/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/ayuba-dn/EmployeeService/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/ayuba-dn/EmployeeService/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/ayuba-dn/EmployeeService/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ayuba-dauda/
[product-screenshot]: images/screenshot.png
