# Cloud Resume

This project was built for the Forrest Brazeal's cloud resume challenge. The details of the challenge can be found at https://cloudresumechallenge.dev/. It utilizes a variety of AWS services to host a resume website. It was built with HTML and styled with Bootstrap and custom CSS. 

## Architecture Diagram:
![AWS Architecture diagram](./images/diagram_v2.png)

## AWS 

This project is hosted with AWS S3 buckets, CloudFront distributions, and Route 53. The backend was built with DynamoDB, one Lambda function, and API Gateway. This code is deployed using Serverless Framework (IaC). Serverless S3 Sync plugin was used to sync local directories and S3 prefixes. The backend code is in a separate repository (https://github.com/lpastor75/cloud-resume-challenge-backend).

#### Functionality:
* S3 bucket hosts the website.
* Cloudfront used to meet https requirement and cache control.
* DynamoDB and Lambda function used to implement visitor counter.
* IAM Role to allow the Lambda function to access database table information.
* Javascript used to retreive counter value from API and display on site.
* APIGateway used to implement API endpoint.

## Counter

The visit counter was built using all these backend services. We access the API gateway endpoint in index.html file. The API gateway triggers the Lambda function which is coded in Python 3.9 to add 1 to a visitsCount variable stored in a DynamoDB table. 

![counter](./images/counter.png)

## Blog

In this blog I explain how I built the project in detail (it is written in spanish, my native language):  
[Check out it here](https://blog.luispastor.dev)

## Demo
[View the live site here!](https://luispastor.dev)
