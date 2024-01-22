# Login Scenario
- whenever we are creating one login App,user has to authenticated and authorized with correct credentials
- create react app with components,Cart,Header,Home,LoginForm,NotFOund, and Products 
- All these components goes into app.js file
- We enclose all components using BrowserRouter ,it wraps all components
- Link component creates hyperlink to the run around the applications
- Route component renders specific UI component when path matches current url
- exact ,it renders the route if path matches exactly the current url
- Switch, In React, Switch is a component provided by the react-router-dom     package that helps you to render the first child <Route> or <Redirect> that matches the current location. Switch is useful when you have multiple routes with different paths, and you want to ensure that only one route is matched at a time

# Login Component Scenario
- Create Login component related to all devices
- Develop input fields as username and password
- if crednetials entered by user is correct we need to change route to home page by using history.push() or history.replace() based on requirement.

# Login is a Clinet and Server Communcation
-Post/Login with username
-Returns JWT Token(stores JWT TOken)
-Send JWT Token in request
-Send response to the client

# Authentication Flow in Frontend Devlopment
- Login request and response
- On login success we get JWT token and store it in Cookies and navigate to Home ROuter
- On login failure we need to show Error Message

# Authentication Flow
- Make an Authentication Request to Login API
- Handle Login API Response
 - On Login Success
 - On Login Failure
- Store JWT TOken

# Step-1
- we enter the credentials username and password and we trigger submitevent by form submit function
- so we need to pass username and password in body of HTTP POST method and then fetch the results by using async and await to avoid asynchrounous errors, if response is OK we get JWT Token, so we need to store JWT TOken and navigate to Home route, we should store JWT Token only in Cookies instead of LocalStorage Method.
- Then we use History Object that react router provides to control naviagation to home route by history.push() , history.replace() methods. It also maintains the history of route we navigated.
- history.push("PATH")  with this user can go forward and backward in the browser and the url will change.