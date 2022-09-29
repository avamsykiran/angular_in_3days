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

Angular Archetecture
------------------------------------------------------------------

    An angular application is made up of

        Modules
        Diectives
            Component Directives / Components
            Attribute Directives
            Structural Directives
        Pipes
        Services

    Each Angular resource is a typescript class.
    These classes are marked with decorators to indicate their role.
    These decorators are given a json object called meta-data. This meta-data has config's.

    Modules

        Angular modules are different from javascript modules.

        An angular module is used to pack components,pipes,directives and services that cohesively close into
        one logical unit. Every angular application must have a top-level parent module and is called 'ROOT MODULE'
        generally written in 'app.module.ts'.

        @NgModule({
            declarations:[],   // contain the list of components,pipes and directive that belong to this module
            imports:[],        // contain the list of other (Feature) modules needed in this module
            exports:[],        // contain the lsit of components,pipes and directive that belong to this module 
                               // and are allowed to be accessed out side
            providers:[],      // contains the list of services that belong to this module 
            bootstrap:[]       // section is found only in the top-level module, this contains the top-lvvel
                               // component 
        })
        class SalesModule{

        }

    Component Directives / Components

        A component represent an custom html-element

        Component =     behaviourAndState       +       template                +   styles
                        ComponentClass                  html dom      
                    shoppin-cart.component.ts   shopping-cart.component.html   shopping-cart.component.css 

        @Component({
            selector:'',    //tagName 
            templateUrl:'', //template file url
            styleUrls:[]   //style sheets urls     
        })
        class ShoppingCartComponent{
            shoppingList:Item[];

            addItem(){}
            removeItem(){}
            checkOut(){}
        }

        Data Binding
            is about accessing the fields and method from the component in the component template.

            Interpolation

                {{angular-expression}}

            Two Way Data Binding
                
                is used to load to get the values from a form-control.

                'ngModel' attribute directive from 'FormsModule' from '@angular/forms'.

                <input [(ngModel)]="field" />

            One Way Data Binding

                Attribute Binding           [attribute]="field"
                Style Binding               [style.cssProperty]="field"
                CSS Class Binding           [class.className]="booleanExpression"
                Event Binding               (eventAttributeDirective)="method()"

                                        html event attributes               eventAttributeDirective
                                            onSubmit                                ngSubmit
                                            onClick                                 click
                                            onMosueOver                             mouseover
                                            onBlur                                  blur
                                            onFocus ..etc                           focus ...etc

    Attribute Directives

        @Directive({
            selector:''
        })
        class LazyMovingStockDirective{

        }

    Structural Directives

        *ngIf
        *ngFor

    Pipes

        a pipe is used to transform a value into antoehr just before we render it.

        in-built pipe
            lowercase
            uppercase
            titlecase
            number
            currency 
            date

        @Pipe({
            name:''
        })
        class InWordsPipe {

        }

    Services

        @Injectable({
            providedIn:''
        })
        class StockService{

        }