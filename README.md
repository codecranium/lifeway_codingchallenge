## LifeWay Coding Challenge

  

Development / Programming Language stack used:

 - NodeJS and Express
 - Mocha for Unit Testing
  

### Instructions to run project

> **npm install**
> 
> **npm run start**

  

Now you can make a POST request to [http://localhost:8080/increment] with PostMan or Fiddler with the following JSON payload in the body:

    {
	    "id": "123",
	    "message": "hello world"
	}

  

Next, to cause an increment to increase, you will want to change the 'id' in the payload to something not previously used.

Note: Previous [id] values are stored in-memory as an array, to ensure no duplicate values cause increment count to increase.

  

So, submit another POST request to [http://localhost:8080/increment], but change the payload body to:

    {
	    "id": "1874",
        "message": "Hello LifeWay team, I would really enjoy working with your team."
    }

  
  

Now, optinally as an additional feature, I have added a GET endpoint for [http://localhost:8080/increment], so you can hit it and see the current status of the counter state that is used.

  
  

## [Docs]

### Configured endpoints

  

Description: Will retrieve the current status of the counter that is used for the incremenation process. So you can see the count number (instead of just the count of the words passed in as you will in the required POST endpoint listed below)

    [GET] http://localhost:8080/increment
    [Response-Type] application/json

  

Description: The main method required in the coding challenge request - used to increment the count and respond with the count of the passed in words.

    [POST] http://localhost:8080/increment
    [Body] { "id": "123", "message": "hello world" }
    [Content-Type] application/json
    [Response-Type] application/json



### Running Unit Tests
To execute the unit tests associated with the project, from the project folder run the following command:
(Note:  Make sure the API project is running when executing the unit tests)
> **npm run test**


### Troubleshooting
Ensure that you are not currently running any other current applications on the system using the same port. The current configuration is set to use port 8080 in the [config.json] and passed into the [webserver.js] for simplicity.

If you recieve an error related to:

>  [Error: listen EADDRINUSE :::8080]

, then you will either need to terminate the other running application or change the configured port in this application.

