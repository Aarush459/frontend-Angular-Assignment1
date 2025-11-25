This is my Angular SPA for managing people.
It shows list, edit and delete screens.
It uses the same backend I made in Assignment 2(by just calling api url)

Versions I used

Node.js: v16.20.2

npm: 8.19.4

Angular CLI: 8.3.29

(I had to switch to Node 16 because Angular 8 doesn't work with Node 24.)

How to run Angular project

Start Angular:

ng serve

Open the app in browser:

http://localhost:4200

Important
Backend must be running first, otherwise Angular can't load data.

Backend API used:

http://localhost:3000/api/person


If backend is not running you will see empty list or CORS errors.
features

List all people

Edit a person

Delete a person

Angular routing

Angular service calling REST API
