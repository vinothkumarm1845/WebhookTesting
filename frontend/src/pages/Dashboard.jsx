import {useEffect, useState} from 'react';
import socket from '../../src/socketClient.js';
import {fetchEvents} from '../api/eventApi.js';

export default function Dashboard(){
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        // load existing events
        fetchEvents().then(data=>{
            setEvents(data);      
        });

        socket.on('new-event', event=>{
            setEvents((prev) => [event, ...prev]);
        });
        return ()=>{
            socket.off('new-event');
        };
    },[])
    return (
        <div style = {{padding:'20px'}}>
            <h2>Live Events</h2>
            {events.length === 0 && <p>No events yet</p>}
            <ul>
                {events.map(event => (
                    <li key = {event._id || event.id}>
                        <strong>{event.eventType}</strong>
                        <br/>
                        <small>{JSON.stringify(event.payload)}</small>
                        <br/>
                        <small>{new Date(event.createdAt).toLocaleString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};