# NYTimesNews

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Steps
1. Download the code
2. npm install
3. ng serve
4. Open the app http://localhost:4200/

To support this app we need another server-app to be run parallelly to generate the jwt tokens
1. Download https://github.com/techiediaries/fake-api-jwt-json-server
2. npm install
3. npm run start-auth


To check the test cases and code coverage;
1. ng test --code-coverage
2. This will generate code coverage report and test case status

##Features
1. News Home page
2. News by category
3. Search news
4. Pagination
5. Open individual news in a separte view.
6. Login/Registration
7. Jwt token authentication in each API call

##Highlights:
Reusable components
Unit tests with 75% code coverage

##Note:
It is obeserved that server API calls are failing if sending with a valid auth token. It is working fine without Authorizatio header. 
Though Jwt authentication mechanisam is implemented, the respective code to add authorization header in HttpInterceptor is commented out as server is failing to authorize it.
Observe the network calls and response to verify the above comments.

