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

## Mockup wireframes

<div style="display: flex; justify-content: space-between;">
    <!-- First image with specific size -->
   <div style="flex: 1;">
      <img src="https://github.com/dilualphonso/dilusha-alponso-childcareConnect-api/blob/feature/proposal/images/home.png" alt="Image Description" width="200" height="200">
      </div>
   <div style="flex: 1;">
      <img src="https://github.com/dilualphonso/dilusha-alponso-childcareConnect-api/blob/feature/proposal/images/2-2024-03-08-1646.png" alt="Image Description" width="200" height="200">
    </div>
    <!-- Second image with specific size -->
    <div style="flex: 1;">
      <img src="https://github.com/dilualphonso/dilusha-alponso-childcareConnect-api/blob/feature/proposal/signup-for-provider-2024-03-08-1646.png" alt="Image Description" width="200" height="200">
  </div>

        <div style="flex: 1;">
      <img src="https://github.com/dilualphonso/dilusha-alponso-childcareConnect-api/blob/main/signup-for-provider-2024-03-08-1646.png" alt="Image Description" width="200" height="200">
    </div>
    
</div>

## Data
   <img src="https://github.com/dilualphonso/dilusha-alponso-childcareConnect-api/blob/feature/proposal/images/data.png" alt="Image Description" width="500" height="500">

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

#### Responses: 
  - 200 success for all GET and PUT/PATCH requests
  - 201 created new content for POST requests
  - 404 not found
  - 403 unauthorized; display if user tries to access user page without logging in
  - 400 bad request
  - 500 internal server error

## Auth
#### Token-Based Authentication for Childcare Providers
Token-based authentication is a common method used to secure web applications. It involves issuing a token to authenticated users, which they then include in subsequent requests to authenticate themselves.

## Roadmap
## Sprint 1
#### Backend Tasks:
- Implement GET endpoint to retrieve all daycares
- Implement GET endpoint to retrieve a single daycare by ID
- Implement POST endpoint to create a new daycare 
- Implement PUT endpoint to update an existing daycare

#### Frontend Tasks:
- Set up project structure
- Create daycare listing page
- Create daycare  detail page
- Integrate backend API endpoints with frontend pages

 ## Sprint 2

#### Backend Tasks:
- Add search functionality to GET endpoint for retrieving daycare 
- Allow users to search daycares by daycare name

#### Frontend Tasks:
- Implement search input field on the daycare profile listing page
- Update frontend to display search results 

## Sprint 3

#### Backend Tasks:
- Implement GET endpoint to retrieve all children
- Implement GET endpoint to retrieve a single child by ID
- Implement POST endpoint to entroll new child
- Implement PUT endpoint to update an existing child
- Implement DELETE endpoint to update an existing child

#### Frontend Tasks:
- need to implement every thing to diplay the child details
  
## Nice-to-haves

#### Reviews for Daycares:
- Allow users to add reviews and ratings for daycare centers.
- Display average ratings and individual reviews on daycare detail pages.
- Provide a form for users to submit reviews with ratings and comments.

#### Google Maps Integration:
- Implement Google Maps integration for displaying daycare locations.
- Show daycare locations on a map in the search results and detail view.
- Allow users to interact with the map (zoom, pan, etc.) to explore daycare locations.

#### Pagination for Daycare Details:
- Implement pagination for daycare detail pages.
- Display a limited number of daycare details per page with pagination controls.
- Allow users to navigate through multiple pages of daycare details.

#### Login Functionality for Parents:
- Create a login page for parents to access their accounts.
- Implement authentication using JWT (JSON Web Tokens) for secure login.
- Upon login, parents can view child-related details such as enrollment status, schedules, etc.


  
