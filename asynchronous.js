//asynchronous programming in JS
// console.log("one");
console.log("two");

function hello() {
    console.log("hello");
}

setTimeout(hello , 4000); //after 4sec hello print
console.log("three");

// //CALLBACKS //passed function as an argument
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);

//CALLBACK HELL
function getData(dataid, getNextData) {
    setTimeout( () => {
        console.log("data", dataid);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

// //this callback hell //problem for understand code
getData(1, () => {
    console.log("get data 1");
    getData(2, () => {
        console.log("get data 2");
        getData(3, () => {
            console.log("get data 3");
            getData(4, () => {
                console.log("get data 4");
                getData(5);
            });
        });
    });
});

//PROMISES //better than callbacks
//to solve callback hells
let promise = new Promise( (resolve, reject) => {
    console.log("i am a promise");
    reject("some error occured");
});

function getData(dataid, getNextData) {
  return new Promise ( (resolve, reject) => {
    setTimeout( () => {
        console.log("data", dataid);
        resolve("success");
        if(getNextData) {
            getNextData();
        }
    }, 2000);
});
 }

//promise.then AND promise.catch
const getPromise = () => {
   return new Promise ( (resolve, reject) => {
    console.log("i am a promise");
    resolve("success");
   });
};

let promise = getPromise();
promise.then((res) => {
    console.log("fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});

//PROMISE CHAIN //one then in another then
function getData(dataid, getNextData) {
    return new Promise ( (resolve, reject) => {
      setTimeout( () => {
          console.log("data", dataid);
          resolve("success");
      }, 3000);
  });
   }

getData(1)
 .then ( (res) => {
   return getData(2);
 })
 .then( (res) => {
    return getData(3);
})
.then( (res) => {
    console.log(res);
});

//ASYNC-AWAIT //better than promises
//await always used in async function
function getData(dataid, getNextData) {
    return new Promise ( (resolve, reject) => {
      setTimeout( () => {
          console.log("data", dataid);
          resolve("success");
      }, 3000);
  });
   }

   //async-await
   async function getAllData() {
    await getData(1);
    console.log("getting data 1");
    await getData(2);
    console.log("getting data 2");
    await getData(3);
    console.log("getting data 3");
    await getData(4);
    console.log("getting data 4");
   }

// IIFE //immediately invoked function expression
//without caling function //used onle one time
(async function getAllData() {
    await getData(1);
    console.log("getting data 1");
    await getData(2);
    console.log("getting data 2");
    await getData(3);
    console.log("getting data 3");
    await getData(4);
    console.log("getting data 4");
   }) ();