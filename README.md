# steps
1. Clone the code.
2. run command 'npm install'.
3. ng serve to run the code. (hit: http://localhost:4200/)
4. Select region. (Country dropdown is hidden)
5. Select country.(Table is hidden)
country details will be shown in a tabular format.

Note: Data refresh was a issue during implementaion, so *ngIf used for dropdown and table.

# Issues remain in the code: 
1. NgRx binding couldn't happen, so data used from http. 
2. Data type mapping is incomplete, due to errors, so type 'any' is used, which is not a good practice.

#To deploy in git hub and to get live url of the code
1. ng build --prod
2. ng test
3. change the angular.json ouputPath : "doc"
4. Comment broeser lists in browserslistrc
   ![image](https://user-images.githubusercontent.com/111244306/184574999-7f114570-9d9d-4cc5-ad65-02ecdf48416f.png)

5. After adding to github repository run ng deploy --base-href=repository_name

# snapshot
![image](https://user-images.githubusercontent.com/111244306/184567459-9e5c116a-e7cc-447d-a514-8f7e432131a5.png)
![image](https://user-images.githubusercontent.com/111244306/184567521-1f40f1c2-cdb1-42f0-82de-ccd6807236c4.png)




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
