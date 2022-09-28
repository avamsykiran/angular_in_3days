Angular Pre-Requisite
--------------------------------

    HTML
    CSS
    Javascript (ES6)

Lab Setup
---------------------------------

    VSCode      IDE
    NodeJS      Development Platform
    Angular CLI                         npm install -g @angular/cli@13.3.3

Angular  Introduction
------------------------------------------------------------------

    is a typescript SPA framework.

    Single Page Application is a web appliction that has only one html page,
    and a lot of javascript code assosiated with it.
    

    spa-bundle  = index.html + (**.js) + (**.css)

    database    <------->       rest-api        <---.xml/.json--->      spa-bundle

    typescript  =  javascript   +   strongly-typed resources

    greeting.js
        const greet = function(userName) {
            return "Hello " + userName;
        }

        console.log(greet());
        console.log(greet("Vamsy"));
        console.log(greet(1234));
        console.log(greet(true));
        
    greeting.ts

        const greet = function(userName:string):string{
            return "Hello " + userName;
        }

        console.log(greet("Vamsy"));
        
Why NodeJs ?
------------------------------------------------------------------

    NodeJs is a standalone alternate runtime for javascript.

    Compose
    Compile                                 ts into js      babel
    Test                                                    jasmine and karma
    Build                                                   npm
    Host the app in a development server                    Angular Live Development Server

    babel, jasmine, karma, npm are all .js tools
    these tools are needed on development machine
    and to execute thee tools we need NodeJs. (only on the dev machine)

Angular CLI
------------------------------------------------------------------

    Command Line Interface for accessing angular project related tools.

    ng new proj-name                            creating a project strucutre on NodeJs

    proj-name\> ng serve                        executing the project on the dev server @ 4000
    proj-name\> ng serve --port 8888 -o         executing the project on the dev server @ 8888
    proj-name\> ng build                        build you app into 'dist' folder
    proj-name\> ng test                         executing the test cases of our app

    proj-name\> ng generate module ModuleName
    proj-name\> ng g module ModuleName
    proj-name\> ng g directive DirectiveName --skip-tests
    proj-name\> ng g service ServiceName --skip-tests
    proj-name\> ng g pipe PipeName --skip-tests
    proj-name\> ng g class ClassName --skip-tests
    proj-name\> ng g component ComponentName --skip-tests
    proj-name\> ng g c ComponentName --skip-tests
    proj-name\> ng g interface InterfaceName


