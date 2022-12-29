// To make multiple POST requests at the same time in JavaScript and resolve them all at the same time,
//  we can use the Promise.all() method, which takes an array of promises as
//  an argument and returns a single promise that is fulfilled when all of the promises in the array are fulfilled.

const url1 = "http://example.com/endpoint1";
const url2 = "http://example.com/endpoint2";
const url3 = "http://example.com/endpoint3";

const data1 = { key1: "value1" };
const data2 = { key2: "value2" };
const data3 = { key3: "value3" };

const options = {
  method: "POST",
  body: JSON.stringify(data1),
  headers: {
    "Content-Type": "application/json"
  }
};

const makeRequest = url => {
  return fetch(url, options).then(response => response.json());
};

Promise.all([makeRequest(url1), makeRequest(url2), makeRequest(url3)])
  .then(responses => {
    console.log(responses);
  })
  .catch(error => {
    console.error(error);
  });
