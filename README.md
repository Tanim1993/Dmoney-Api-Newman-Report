# Dmoney-Api-Newman-Report

##How to run this project**
-clone the project
-give this command '''' npm i '''' and  ''''node .\report'''


## Technology used:
-Postman 

-Newman


## Documentation:
- https://shorturl.at/pFS36


## Test Cases:

Test Case 1: Verify Successful Login
- Verify that the status code is 200
- Verify that the response contains a message and a token
- Verify that the token exists and is not empty
- Verify that the token format is JWT
- Verify that the user role is Customer

Test Case 2: Verify User Retrieval
- Verify that the status code is 200
- Verify that the response contains a message, count, and users
- Verify that the count is greater than zero
- Verify that each user has a valid ID

Test Case 3: Verify User Details
- Verify that the status code is 200
- Verify that the response contains a message and a user
- Verify that the user has a valid ID
- Verify that the user has the correct role

Test Case 4: Verify Role-Based Access
- Verify that the status code is 200
- Verify that the response contains a message and a user
- Verify that the user has the correct role


Image : 

![API-Automation-Newman-Reports-html](https://github.com/Tanim1993/Dmoney-Api-Newman-Report/assets/40738198/79399001-086c-44b4-8483-24957fdfff04)
