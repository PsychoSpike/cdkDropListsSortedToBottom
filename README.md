# CdkDroplistsSortedToBottom
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.
Trying to mimic playing card behavior from Solitaire/Patience game, with standard angular cdkDrag and cdkDrop components.

3 cdkDropLists that are connected should only receive items if the dragged card was the last item in the droplist.
They have sortPredicates to alwaus put items at the end of the list, the list itself is unsortable and every item in the list is dragDisabled except the last one.

Unexpected behavior:
-Dragging but not dropping from one container to another (reverting back to original container after draghovering over another) only works from left to right.

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
