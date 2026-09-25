
//  promises  Ex27

function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success = true;
            if (success) {
                resolve({id:1, name: "abdinasir"})
            } else{
                reject("failed to fetch user data")  
            }
        },2000);
    }
)}
fetchData()
.then((data)=>console.log("user data", data))
.catch((error)=>console.log(error));