# Project Title

SBA 318: Express Server Application

## Objectives
Create a server application with Node and Express.
Create a RESTful API using Express.
Create Express middleware.
Use Express middleware.
Use a template engine to render views with Express.
Interact with a self-made API through HTML forms.

## Description

This is basic Express.js server that serves up JSON data for a list of fake users, actual list of fruit and actual quotes. Includes unique endpoints and allows for dynamic GET requests with request url paramaters

#### Home page

http://localhost:5000/

check out the homepage layout to visit either the user, fruits or quotes JSON data

![Alt text](<screenshots/Screen Shot 2023-11-09 at 3.56.25 PM.png>)

#### Users

http://localhost:5000/users

![Alt text](<screenshots/Screen Shot 2023-11-09 at 3.23.22 PM.png>)

#### Users API

http://localhost:5000/api/users

(from json placeholer)

![Alt text](<screenshots/Screen Shot 2023-11-09 at 3.25.03 PM.png>)

enter a specific id to get just that user's info
( http://localhost:5000/api/users/:id )

#### Fruits

http://localhost:5000/fruits

![Alt text](<screenshots/Screen Shot 2023-11-09 at 3.24.18 PM.png>)

enter a specific id  to get just that fruits's info
( http://localhost:5000/api/fruit/68 )

![Alt text](<screenshots/Screen Shot 2023-11-09 at 3.58.03 PM.png>)

#### Quotes

http://localhost:5000/quotes

![Alt text](<screenshots/Screen Shot 2023-11-09 at 3.24.07 PM.png>)

enter a keyword or author to get quotes that contain that name or word
(http://localhost:5000/api/quotes/proverb)

![Alt text](<screenshots/Screen Shot 2023-11-09 at 3.57.13 PM.png>)


## Getting Started

- clone this repo
https://github.com/benjahmin-koenigsberg/SBA_318.git


### Dependencies

* Handlebars
* Bootstrap
* Nodemon
* Moment


### Executing program

- instal node modules
```
npm i
```
- start local server
```
npm run start
```

## Authors

Benjahmin Koenigsberg

https://benjahminkoenigsberg.com

## Acknowledgments


* [Per Scholas](https://perscholas.org)
* [Brad Traversy's Express Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)

* [awesome-readme](https://github.com/matiassingers/awesome-readme)
