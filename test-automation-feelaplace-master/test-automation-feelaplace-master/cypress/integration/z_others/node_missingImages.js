console.log("This is to find list of missing images using s3 bucket of cdn")

let AWS = require('aws-sdk');
let parser = require('simple-excel-to-json')
let _ = require('lodash');

let altIds = []
let imgIds = []
let missingImageList =[]

let doc = parser.parseXls2Json('./Data_Dump_28th_Feb_2020.xlsx')

doc[1].forEach((d)=>{
    altIds.push(d.AltId)
})
altIds.sort()
// console.log(altIds)

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIA5NZ2SM4245HMUV3H";
AWS.config.secretAccessKey = "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";
// AWS.config.region = "US East (Ohio)";

s3 = new AWS.S3({apiVersion: '2006-03-01'});

let bucketParams = {
    Bucket : 'feel-cdn',
    Delimiter: '/',
    Prefix: 'images/places/tiles/'
  };

  s3.listObjects(bucketParams).eachPage((err, data)=> {
    if (err) {
      console.log("Error", err);
    } else {
      // console.log("Success")

    if (data !== null){
      data.Contents.forEach((img)=>{
        imgIds.push(img.Key.split('-ht')[0].split('tiles/')[1])
    })
    }
    else{
      console.log("Total number of missing images is "+missingImageList.length)
      let fs = require('fs');

      let file = fs.createWriteStream('./cypress/logs/missingImageList.csv')
      file.on('error', function(err) { /* error handling */ })
      missingImageList.forEach((v)=>{ file.write(v+'\n'); })
      file.end()
      console.log('The missing images list is at \cypress\logs\missingImageList.csv')
    }
        imgIds.sort()
        // console.log("Total images compared so far "+imgIds.length)
        missingImageList = _.difference(altIds,imgIds)
        // console.log("Total number of missing images is "+missingImageList.length)
    
    }
  })

