# Dummy Microservice

This dummy microservice acts to be as a middle person between the Custom Channel and 
third-party chat such as local SMS providers for better market penetration.

## Feature
- Return the mId (message id). 


## List Of APIs

| No. | Method | API Endpoint | Description | Authorization | Request Body (Data Type)
|--- | ---- | ------ | ------------------ |  ---------- | ---------- |
| 1 | GET | / | Checks API health | none | none
| 2 | POST| /message-id | To return mId | Bearer Token | message (array), channelId (integer), contactId (integer)


## API Flow Diagram
<p align='center'> <img src="docs/Dummy_Microservice_API.drawio.png" height="500"/></p> <p align='center'> Figure 1 : API No. 2 </p> 

## Environment Variables
To develop the app, you will need to add the following environment variables to your .env file


`APP_PORT`

`CHANNEL_TOKEN`

`CHANNEL_ID`

Refer env.example file from the repository.

## Run Locally
    1. Copy the .env.sample and paste it to .env file. 
    
    2. Run 'docker-compose up'.
    
    3. When your server is running, expose your server to the public internet by using ngrok. 
    Please refer https://ngrok.com/download to download.

    4. When you have exposed your server, you will get a URL from ngrok.
    For example: https://dsadsa2313.ngrok.io/

    5. Copy the ngrok URL and paste it to the Custom Channel configuration and you will receive a channel token.

    6. Copy the channel token and paste it to CHANNEL_TOKEN variable in .env file.

    7. Download the Postman collection from the repository and open the collection.

    8. Here is the fun part, you may call the API with POST request method to retrieve the mId. 
    For example: https://dsadsa2313.ngrok.io/message-id to retrieve the mId 

    9. And we are done here! Please refer below for the example of the output. 
  

  ## Important Memo

  - Include the bearer token from the CHANNEL_TOKEN variable in the `Authorization` section or `Headers` section. Either way is fine.
  - Include the message, channelId and contactId in the `Request Body` section. 
  - The channelId in the `Request Body` section must be the same as CHANNEL_ID in .env file. Otherwise, error will be thrown.
  - The HTTP request method is POST.

## Output

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## FAQ

#### Is it compulsory to use 3000 as my app port?

It is not compulsory to use `3000` as your app port. You may change it to other port such as `5000`, `8080` etc.

#### Why I could not run the server by using docker command?
If you are using Linux, try to run `sudo docker compose-up` instead.



