
//  Asynchronous  Ex26

// function fetchuserDataSync() {
//     alert("fetching User Data ")
//     return{id:1, name: "abdinasir"};
// }

// console.log("start fetch user data")
// fetchuserDataSync();

// const user = fetchuserDataSync();

// console.log("User Data", user);


function getUserData(callback) {
setTimeout(()=>{
    console.log("after 2 seconds");   
},2000)
}

console.log("fetchig user date");

getUserData();
