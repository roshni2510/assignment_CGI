# steps
1. Clone the code.
2. run command 'npm install'.
3. Select region. (Country dropdown is hidden)
4. Select country.(Table is hidden)
country details will be shown in a tabular format.

Note: Data refresh was a issue during implementaion, so *ngIf used for dropdown and table.

# Issues remain in the code: 
1. NgRx binding couldn't happen, so data used from http. 
2. On country change table is not getting refreshed. But it works for each region change.
3. Data type mapping is incomplete, due to errors, so type 'any' is used, which is not a good practice.

#snapshot
![image](https://user-images.githubusercontent.com/111244306/184553092-84487bae-5fec-4fd8-b3cb-1b403ad65d49.png)

![image](https://user-images.githubusercontent.com/111244306/184553121-9c5dbd91-fd11-4f7b-a72c-2a92bd33a5f4.png)



# RegionalGeography

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
