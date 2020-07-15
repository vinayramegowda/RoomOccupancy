# Room Occupancy Application

## Requirements

Build a room occupancy optimization tool for one of our hotel clients! Our customer has a certain number of free rooms each night, as well as potential guests that would like to book a room for that night.						
Our hotel clients have two different categories of rooms: Business and Economy. Our hotels want their customers to be satisfied: they will not book a customer willing to pay AUD 100 or more for the night into an Economy room. But they will “upgrade” lower paying customers into Business rooms if these rooms would be empty and all the Economy rooms are filled. Highest paying customers below AUD 100 will get preference for the “upgrade”. Customers always only have one specific price they are willing to pay for the night.				
Please build a small app that provides an interface for hotels to enter the numbers of Business and Economy rooms that are available for the night and then tells them immediately how many rooms of each category will be occupied and how much money they will make in total. Potential guests are represented by an array of numbers that is their willingness to pay for the night. This input data can be in a json file.	
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Versioning

- Angular CLI: 10.0.1
- Node: 12.16.1
- OS: win32 x64
- Angular 8

## To run the Application

Run 'npm install' in your command prompt after traversing to the downloaded folder or forked folder. Use 'code .' to open it on Visual studio code upon traversing to its folder.
Then run 'ng serve' to run the application.
To test the application, Please run 'ng test'.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
