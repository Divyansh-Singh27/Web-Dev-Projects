let request = require("request");
let cheerio = require("cheerio");
//console.log("Before");
request("https://www.google.com/", cb);
// response is superset -> body
function cb(err, response, html) {
   //console.log("response");
   //console.log("html");
   let cheerioSelector = cheerio.load(html);
   let element = cheerioSelector("#SIvCob");
  // console.log(element.html());
   console.log(element.text());
}

// console.log("after")