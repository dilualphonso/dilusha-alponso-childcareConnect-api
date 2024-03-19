# ChildCare Connect App
## Overview
In today’s whirlwind of responsibilities, childcare stands as a vital pillar in the lives of many families, especially for working parents. The challenge of finding a quality daycare that meets both the needs of the child and the budget of the family is a common one. The Childcare connect Web Application aims to address this challenge, particularly in the Ontario region. Understanding the heart of the matter, this application acknowledges the tireless efforts of parents, particularly working moms, in seeking that elusive balance of excellent childcare and affordability. It’s more than a mere directory, it’s a meticulously designed solution, poised to empower parents in one of the most critical decisions for their child’s well-being

## Problem
Parents in Ontario face challenges when searching for quality childcare or Montessori programs. Currently, the process involves cumbersome Google searches, making numerous phone calls, and sending emails to inquire about availability and details. Often, the information available online is limited, outdated, or lacks transparency on costs. Parents are left with the frustrating task of piecing together information from various sources, sometimes only to find that the options are too expensive or don't match their needs

## User profile

For those utilizing the Childcare Finder Web Application, this platform offers a beacon of reassurance in the whirlwind of parenthood. Designed with the needs of working parents, particularly moms, at its core, this application provides a seamless solution to the common challenge of finding quality childcare within budget constraints. By empowering users with a meticulously curated database of daycare options, detailed profiles, and real reviews, it simplifies the daunting task of choosing the best care for their child's development. Whether navigating busy work schedules or seeking affordable excellence, this app is a trusted companion, dedicated to making one of the most critical decisions for a child's well-being a smoother, more informed, and ultimately empowering experience

## Features
This app currently includes the following list of features
- Search: Search results display relevant daycare centers based on the user's input.
- Detail view-As user when clicking on a daycare from the search results or listings, the user is taken to the detail view page.
- Daycare profile 
             - As a childcare provider, I want to create and edit a profile to make my daycare center visible to parents searching for childcare
- Kid's entrollement - As childcare provider I want to add, edit, and delete child

## Technology Stack:
- Frontend: SCSS, ReactJS
- Backend: Node.js, Express.js
- Database: SQL
- Authentication: JWT for user authentication

## Sitemap
![userdiagram](https://github.com/dilualphonso/dilusha-alponso-childcareConnect-api/blob/main/userdiagram.jpg)

## Endpoints
This app's API server has the following list of endpoints:

####  HTTP methods:

- **GET All Daycare Centers**
   - Endpoint: `/api/daycares`
   - Description: Retrieve a list of all daycare centers.

- **GET Daycare Center by ID**
   - Endpoint: `/api/daycares/:id`
   - Description: Get details of a specific daycare center by its ID.

- **POST New Daycare Center**
   - Endpoint: `/api/daycares`
   - Description: Create a new daycare center.

- **PUT Update Daycare Center by ID**
   - Endpoint: `/api/daycares/:id`
   - Description: Edit details of a specific daycare center by its ID.

- **GET Search Daycare Centers**
   - Endpoint: `/api/daycares/search`
   - Description: Search for daycare centers based on specified filters.


#### Children API Endpoints

- /api/daycares/children
    - GET: Get a list of children from a particular daycare
    - POST: Enroll a new child with details

- /api/daycares/children/:id
    - GET: Get detailed information about a specific child
    - PUT: Update details for a specific child
    - DELETE: Remove a specific child from the daycare

#### RESPONSES: 
  - 200 success for all GET and PUT/PATCH requests
  - 201 created new content for POST requests
  - 404 not found
  - 403 unauthorized; display if user tries to access user page without logging in
  - 400 bad request
  - 500 internal server error

## Auth
#### Token-Based Authentication for Childcare Providers
Token-based authentication is a common method used to secure web applications. It involves issuing a token to authenticated users, which they then include in subsequent requests to authenticate themselves.
