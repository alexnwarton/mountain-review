# Mountain Review

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Mountain Review** is a full-stack web application that allows winter sports enthusiasts to share their experience at a mountain resort with others. Built using Ruby on Rails and React, users can create reviews for a mountain resort_


<br>

## MVP

- RESTful JSON API built with Ruby on Rails
	- A database of 2+ tables
	- At least 1 association between tables
	- Full CRUD on the reviews table
- Front end built with React
	- 8+ separate components
	- Utilize React Router
	- Integrate with Ruby on Rails back end
	- Full CRUD on reviews
- Style with flexbox/grid
- Implement responsive design


<br>

### Goals

- Build a database of users, resorts, and reviews
- Allow a user to view all resorts and search resorts
- Allow a user to add, edit, and delete their own reviews

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end framework using javascript_     |
|   React Router   | _Used for routing through React components_|
|    MaterialUI    | _Package for custom styling using React_ 	|
|   Ruby on Rails  | _Back-end framework for creating JSON API_ |
|     axios        | _Used for making front-end API calls_ 		|
|     bcrypt       | _Used for password hashing_ 				|
|     react snowfall      | _used for homepage animation_                        |

<br>

### Client (Front End)

#### Wireframes

- Home Page

![home-page](assets/home-page.png)

- Show Resorts

![resorts-page](assets/resorts-page.png)

- Resort Detail

![resort-detail-page](assets/resort-detail-page.png)

- Sign In

![sign-in-page](assets/sign-in-page.png)

- Sign Up

![sign-up-page](assets/sign-up-page.png)

- Create Review

![create-review-page](assets/create-review-page.png)

- Detail with Edit

![detail-with-edit-page](assets/detail-with-edit-page.png)

- Edit Review

![edit-review-page](assets/edit-review-page.png)

- Search Results

![search-results-page](assets/search-results-page.png)



#### Component Hierarchy

![Component Hierarchy](assets/component-hierarchy.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ css

|__ components/
      |__ Layout.js
      |__ Footer.js
      |__ Nav.js
      |__ ResortCard.js

|__ containers/
      |__ MainContainer.js

|__ screens/
      |__ HomePage.js
      |__ SignIn.js
      |__ SignUp.js
      |__ Resorts.js
      |__ SearchResults.js
      |__ ResortDetail.js
      |__ CreateReview.js
      |__ EditReview.js

|__ services/
	  |__ apiConfig.js
	  |__ auth.js
	  |__ resorts.js
	  |__ reviews.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create tables/associations    	 |    H     |     1.5 hrs      |     TBD     |     1.5 hrs     |
| Create back-end routes/controllers |    H     |     3 hrs      |     6 hrs    |     6 hrs     |
| Test back-end CRUD actions 		 |    H     |     2 hr     |     5 hrs    |     5 hrs     |
| Deploy back-end   				 |    H     |     1 hr      |     0.5 hrs   |     0.5 hrs     |
| Create React app 					 |    H     |     1 hr      |    1 hr     |    1 hr     |
| Add Layout, Nav, Footer    		 |    L     |     3 hrs      |     2 hrs   |     2 hrs     |
| Add SignIn, SignUp, HomePage 	 	 |    H     |     3 hrs      |     6 hrs    |     6 hrs     |
| Add Resorts, Card, ResortDetail    |    H     |     3 hrs      |     3 hrs    |     3 hrs     |
| Add SearchResults  				 |    L     |     3 hrs      |     5 hrs    |     5 hrs     |
| Add Review CRUD actions  			 |    H     |     2.5 hrs      |     3 hrs    |     3 hrs     |
| Deploy front-end 					 |    H     |     1 hr      |     0.5 hrs    |     0.5 hrs     |
| Styling and media queries 		 |    H     |     10 hrs      |    20 hrs     |     16 hrs     |
| TOTAL               				 |          |     34 hrs     |     49.5     |     49.5    |

<br>

### Server (Back End)

#### ERD Model

![ERD](assets/ERD.png)
<br>

***

## Post-MVP

- Add runs table as a child of resorts
- Add reviews to runs
- Add interactive map to find resorts by location
- Allow certain users admin access to create and update resorts

***

## Code Showcase

### Home Page Conditional Render
```jsx
 <div className={ routePath === '/' ? 'snow' : 'App'}>
```

### Sign-In/Sign-Up Error Handling
```javascript
 const handleSignIn = async (formData) => {
    setIsError(false)
    try {
      const userInfo = await loginUser(formData);
      setUser(userInfo);
      history.push('/');
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  }
```
```jsx
 { isError ? <p className='error-message'>Invalid credentials. Please try again.</p> : ''}
```


## Code Issues & Resolutions

- Issue: Adding an animated background to the home page. React does not recognize certain CSS pseudo-classes.
      - Solution: Install an npm package for the specific animation (falling snow)
