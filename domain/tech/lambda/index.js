// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });

// Create S3 service object
//s3 = new AWS.S3({ apiVersion: "2006-03-01" });

s3 = new AWS.S3();

exports.handler = async (event) => {
  var bucketParams = {
    Bucket: "portfolio-data-bucket",
    Key: "build-stack.json",
  };

  var s3Response = await s3.getObject(bucketParams).promise();

  const portfolios = JSON.parse(s3Response.Body.toString());
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: s3Response.Body.toString(),
  };
  console.log("Returning response", response);
  return response;
};
