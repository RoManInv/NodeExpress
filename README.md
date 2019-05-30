# User Guide

## Overview

* This is an example code of Node MVC structure using express.
* By reading this user guide, it is assumed that the Node environment, as well as npm package management tool and MongoDB is ready on your device. 
* View is not included. Postman is used for interacting with the back-end. Should you still don't have Postman on your device, please [download Postman][1].

## Setup Guide

Initially, the ready-to-use environment should be integerated. This step should be able to be skipped. You could either skip this step and come back when it cannot be successfully run, or do the following steps in case of unexpected result.

To install the environment, open command prompt in this folder, run the following command(s):

`npm install mongoose express`

## Run the Code

To run the code, open command prompt in this folder, run the following command(s):
`node server.js`
or
`nodemon server.js`

## First Step First

Initially, there should be no data in your database. To generate the data, send a PUT request to `localhost:3000/api/database` in Postman. 

If you need to reset the data, this should also help.

## API Reference

`GET /` redirect to `GET /api/courses`
`GET /api/courses` show all the courses
`GET /api/courses/:id` show course with specific id
`PUT /api/courses/:id` update the course with specific id
`POST /api/courses` create a new course
`DELETE /api/courses/:id` delect the course with specific id
`PUT /api/database` reset database

  [1]: https://www.getpostman.com/downloads/