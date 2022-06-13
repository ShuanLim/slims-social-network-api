# Slim's Social Network API

## Table Of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation Method](#installation-method)
- [Link To Video Demonstration](#link-to-video-demonstration)
- [Contributions](#contributions)

## Description

This is a REST API for a social media application. The technologies used are Node.js, MongoDB, Mongoose, & Express.

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation Method

Run through the following instructions prior to using the application:

- Please clone this repository or copy the code to your development environment.
- You must have Node.js, Mongoose, Express, and MongoDB to run this app on your machine.

- From the root of the file, run commands:

```
npm i
```

Then

```
npm start
```

Testing the REST API can be done via Insomnia.

## Link to video demonstration

<a href='https://drive.google.com/file/d/1MuL3Pvcs5ma6Kkz9l12xfwDKEyP-6Y1Y/view'>Part 1</a>
<a href='https://drive.google.com/file/d/1BYOdqYS7ucJAYHR_MM50KaElrwCFyETu/view'>Part 2</a>

## Contributions

<a href='https://github.com/ShuanLim'>Shuan Lim</a>

Contact me via <a href='mailto:shuanmlim@gmail.com'>email</a>
