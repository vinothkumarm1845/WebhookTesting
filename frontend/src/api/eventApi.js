import api from '../services/api.js';
export const fetchEvents = async ()=>{
    try{
        const res = await api.get('/events/user');
        return res.data.events;
    }catch(error){
        console.log('error fetching events inside fetchevents: ', error);
    }
};
