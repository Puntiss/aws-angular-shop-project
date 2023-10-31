# Description
The Angular FrontEnd web application interacts seamlessly with AWS services, showcasing a smooth integration between the frontend interface and the serverless backend. Products are retrieved and inserted using AWS Lambda functions, ensuring efficient data management within the DynamoDB database.

Project Components:
- The AWS Lambda project responsible for retrieving products from the associated DynamoDB is available [here](https://github.com/Puntiss/java-retrieveAllProduct-AWSLambdaFunction).
- The AWS Lambda project handling the insertion of products into the DynamoDB can be found [here](https://github.com/Puntiss/java-readAndUploadProduct-AWSLambdaFunction).

TechStack:
- FE: TypeScript (Angular), HTML, Bootstrap.
- BE: Java, AWS.

# Live Test
If you want to try live code, visit the [website](http://angular-aws-shop.s3-website-us-east-1.amazonaws.com/).

# Usage and Modify
**0. Prerequisites:**

- Install [Node.js version 18.18.0+](https://nodejs.org/en/download/current) or check if already installed with `node -v`.
- Install [npm version 9.8.1+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or check if already installed with `npm -v`.
- Install [Angular CLI version 16.2.0+](https://angular.io/cli) or check if already installed with `ng v`.

**1. Configure AWS Lambda Functions:**
   
- Follow the detailed instructions provided in the GitHub projects linked above to configure the two AWS Lambda functions in your AWS account.

**3. Obtain API Gateway Link:**
   
- After downloading the code, obtain the deployed link of your AWS Gateway API.
- Add this link to the apiDeployLink property inside the file *src/service/product.service.ts*.

**3. Install Project Dependencies:**
   
- Install all project dependencies specified in the *angular.json* file using `npm install`, a *node_module* folder will be created.

**5. Launch the Application:**
- Host the website on the server or launch your application using `ng serve`.

**6. See result**
- Navigate to `http://localhost:4200/` in your browser to see the result.
   
Happy coding!

