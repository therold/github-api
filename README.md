# Github User Search

#### _An application to search Github users, 10/13/2016_

#### By _**Timothy Herold**_

## Description

_This application is designed to search users on Github. This application will allow the user to search usernames on github, and display repository information from github._

## Setup/Installation Requirements

* Clone project from [github](https://github.com/therold/github-api):
  * git clone https://github.com/therold/github-api
  * cd github-api
* Install dependencies via npm and bower:
  * npm install
  * bower install
* Create a file called ".env" in the main project directory:
  * touch github-api/.env
* Open the .env file in your preferred text editor and add your Github API key. There should be a single line in the .env file using the following format:
  * exports.apiKey = "YOUR-API-KEY-HERE";
* Build and run the project:
  * gulp serve
* Open the site in your favorite web browser:
  * [http://localhost:3000](http://localhost:3000)

## Objectives

* _The website should work as expected._
* _The website should follow all setup instructions, including storing your API key in the variable exports.apiKey._
* _The website include at least 2 JavaScript files._
* _Exports used successfully in at least one JavaScript file._
* _Dependencies managed with npm and bower._
* _The website should include a gulp-based asset pipeline with a development server._
* _The asset pipeline include all tasks from the homework this week:_
  * _Concatenation, minification, and running the browserify package on your JavaScript._
  * _Building and cleaning._
  * _Running the development server with live reloading._
  * _Running JSHint._
  * _Automatically including Bower dependencies as vendor.min.js and vendor.css._
* _The project should demonstrate concepts covered this week._
* _The website should be in a presentable, portfolio-quality state._

## Minimum Specification
* The program should accept and store a Github username.
  * **Example Input**: _therold_
  * **Example Output**: _therold_
* The program should return an error if the entered username is not a valid Github username.
  * **Example Input**: _username_
  * **Example Output**: _Error: invalid username._
* The program should return a list of Github repositories.
  * **Example Input**: _therold_
  * **Example Output**: _[ repository1, repository2, ...]_

## Technologies Used

* _HTML/CSS_
* _Javascript_
* _npm_
* _bower_
* _Github_

### License

*GPL*

Copyright (c) 2016 **_Timothy Herold_**
