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
    Key: "portfolio.json",
  };

  var s3Response = await s3.getObject(bucketParams).promise();

  // Call S3 to obtain a list of the objects in the bucket
//   await s3.getObject(bucketParams, function (err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data.Body.toString());
//       s3Response = data.Body.toString()
//     }
//   });
const response = JSON.parse(s3Response.Body.toString())
  console.log("Returning response", response)
  return response.portfolio.map(it => it.organization)
  //return s3Response.Body.toString();
};
