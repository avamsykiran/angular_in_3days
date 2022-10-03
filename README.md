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

Bootstrap Integration Angular
--------------------------------------------------------------------

    bootstrap is a css library.

    npm install bootstrap --save

    angular.json
        |
        |- styles       include node_modules/bootstrap/dist/css/bootstrap.min.css
        |- scripts      include node_modules/bootstrap/dist/js/bootstrap.min.js

Routing 
--------------------------------------------------------------------

    routing enables displaying components based on the url-path.

    RouterModule   from @angular/router

        Route               class       path,pathMatch:'startsWith|full',redirect,component,children
        Routes              Route[]
        Router              Service     to navigate progamatically using a method 'navigateByUrl()'
        ActivatedRoute      Service     to read path variables and query params from a url.
        router-outlet       Component   is sued to reserve place for the output component of routing
        routerLink          Attribute Directive     is used on 'a' eleemnt isntead of 'href'.
        routerLinkActive    Attribute Directive     is used on 'a' eleemnt to apply a css class 
                                                    on active links'

Observables - RxJS
-------------------------------------------------------------------------

    RxJs        Reactive Javascript

        Observable support managing background jobs from a foreground job in a UI/UX app.

        const bgJob = observer => {
             /* asynchronous code..... */
             /* that executes any time - cosnuming job */

            observer.next(data)     //used to emit values while the job in progress.
            observer.error(error)   //used to raise an error indicating the abortion of the job
            observer.complete()     //used to indicate the job completion.
        }

        let ob = new Observable(bgJob); //only observable is created, 
                                        //but the job will not start executing...

        ob.subscribe({              //this is here the job execution starts.
            next: data => {/* we can eceive the data emiteed */ },
            error: err => {/* we receive he error */},
            complete : () => {/*we will do whateever we have to on the background job compelteion*/ }
        });

        //any other code at this point will not wait for the job completion....

json-server
--------------------------------------------------

    used to create a fake rest api based on a .json file.

    create an empty node project
        md folder-name
        cd folder-name
        npm init -y

    install json-server
        npm install json-server --save

    to execute 'in package.sjon' we create a start script as 'json-server --watch data.json --port 9999'.

    data.json shall contain the hypothetical data and each record must have an 'id'.

HttpClient  from  'HttpClientModule'  from '@angular/common/http'
-------------------------------------------------------------------------

    HttpClient
        get(url) : Observable
        post(url,reqBody) : Observable
        put(url,reqBody) : Observable
        delete(url) : Observable

