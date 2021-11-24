import axios from "axios";
const FIREBASE_URL = 'https://banking-dashboard-default-rtdb.firebaseio.com/';

export const bills = async() => {
    try{
        const response = await axios.get(`${FIREBASE_URL}bills.json`)
        return response;
    }
    catch(error){
        console.log(error);
    }
}