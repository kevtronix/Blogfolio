# Kevin's Personal Website

This repository contains the code for my personal website, built with React.

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Setup](#setup)
4. [Features](#features)
5. [Status](#status)

## General Info
This website serves multiple purposes:

1. It is a digital portfolio where I highlight the projects I've completed or worked on, providing a comprehensive view of my skills and experiences in the software engineering realm.

2. It functions as a blog where I share my learning journey, discuss intriguing topics I encounter, and delve into various aspects of AI and beyond.

3. It acts as a gallery for displaying images and other unique content I've created using AI.  

In addition to these, the website offers a glimpse into my world beyond coding, featuring my hobbies, interests, and projects outside of software engineering. This eclectic mix of features ensures that the site is not just a professional platform, but also a personal space that reflects my passions and pursuits.

## Technologies
The project is created with:
* React.js version: ^18.2.0
* Node.js version: v20.3.1 
* React-DOM version: 18.2.0 
* @emotion/react version: 11.11.1 and @emotion/styled version: 11.11.0 for CSS-in-JS styling
* @mui/material version: 5.13.5 and @mui/icons-material version: 5.11.16 for Material UI components
* React Router DOM version: 6.13.0 for routing and navigation within the application

## Setup
To run this project, you will need to install [node and npm](https://nodejs.org/en/download/) if not already installed.

Clone the repository:

```bash
git clone https://github.com/kevtronix/personal_website_frontend.git
```

Install the dependencies:

```bash
cd  personal_website_frontend
npm install
```

Start the development server:

```bash
npm start
```

The site should now be accessible at [http://localhost:3000](http://localhost:3000).

## Features
List of features ready and TODOs for future development
* Accessible navigation
* Theming set 
* Skeleton for server outputs. 
* Content Modification: Welcome page and About page edited 
* Deployed Website to self hosted server
* CI/CD: Integrate with Github actions and make sure that each commit can 
directly go towards updating personal server 
* Fix viewing issue with the homepage and projects page (grid)
* Responsiveness: Enhance the website's design to better accommodate smaller scale devices, ensuring a positive user experience across all device types.
* Host the project on Google Cloud while server is being set up 
* Blog functionality - connected to database
* Show specific views to authenticated user
* Optimize the log in page so that it is able to navigate to the home page after logging in
 * Modify the blog post edit page so that the snippets only take a portion of 
    the body and not the entire body
* Create functionality to add a blog post 
* Store a retrieved blog post into local storage and check to see if its 
    there in context before making a request to the server 


* TODO:
   
    * Project Database functionality
    * Handle situations for errors in blog retrieval
    * Image showcase 
    * Animations: Add animations to each of the pages/cards to make the website more interactive and visually appealing.
    * Implement tests in order to ensure 
    * Create a workflow to allow CI/CD to work for google cloud
    * Implement animations

## Status
Project is: _always-improving_ 

---
