import axios from 'axios';
const API_BASE = 'http://localhost:5000/api';
export const fetchEvents = async ()=>{
    const res = await axios.get(`${API_BASE}/events`);
    console.log('fetched events inside fetchEvents method : ', res.data);
    return res.data;
};
