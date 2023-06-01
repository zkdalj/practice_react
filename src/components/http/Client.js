import axios from "axios";

const client = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
});

// client.interceptors.request.use((req) =>{
//     console.log(req)
//     console.log(`${req.baseURL} started at ${new Data()}`);
//     return req;
// })
export default client;