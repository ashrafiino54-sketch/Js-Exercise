
//  HTTP Get  Ex31

async function fetchData(){

    try {
        console.log("Start Feching data");
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new error (`HTTP Erro! status:{$status.response}`);
        }

        const data = await response.json();
        console.log("Response data", data);

    } catch (error) {
        console.log(error)
    }
}
fetchData();