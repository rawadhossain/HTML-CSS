// // let promise = new Promise((resolve, reject) => {
// //     console.log("I am a Promise");
// //     // resolve("Resolve is achieved");
// //     reject("Error occured");
// // });

// function async() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("function has been called");
//             resolve("Resolve is achieved");
//             // reject("Error occured");
//         }, 4000);
//     });
// }

// console.log("fetching from data1...");
// // let p1 = async();
// async().then((res) => {
//     console.log(res);
// });

// // p1.catch((err) => {
// //     console.log(err);
// // });

function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", dataID);
            resolve("Successfully fetched");
            //reject("Error occured");
        }, 3000);
    });
}

// Aysnc - Await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    console.log("All data has been fetched");
}


//Promise Chain
console.log("getting data 1");
getData(1)
    .then((res) => {
        console.log("getting data 2");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data 3");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });



// callback hell
getData(1, () => {
    console.log("Data 1 is fetched");
    getData(2, () => {
        console.log("Data 2 is fetched");
        getData(3, () => {
            console.log("Data 3 is fetched");
        });
    });
});
