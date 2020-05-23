import Axios from "axios";

Axios.get('/react/api/header.json').then( res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})