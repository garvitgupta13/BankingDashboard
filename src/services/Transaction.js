import axios from "axios";
const FIREBASE_URL = "https://banking-dashboard-default-rtdb.firebaseio.com/";

export const getTransaction = async () => {
    const response = await axios
        .get(`${FIREBASE_URL}trasactions.json`)
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

const addTransaction = async (transaction) => {
    const response = await axios
        .post(`${FIREBASE_URL}trasactions.json`, transaction)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const updateTransaction = async (transaction) => {
    const response = await axios
        .put(`${FIREBASE_URL}trasactions/${transaction.id}.json`, transaction)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
