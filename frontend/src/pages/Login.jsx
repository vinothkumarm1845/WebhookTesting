import { useState } from "react";
import api from '../services/api.js'
import {useAuth} from '../context/AuthContext.jsx';
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const submit = async (e)=>{
        e.preventDefault();
        const res = await api.post('/auth/login', {email, password});
        login(res.data.token);
    }
    
    return (
        <form >
            <h2>Login</h2>
            <input placeholder="Email" onChange = {e=>setEmail(e.target.value)}/>
            <input placeholder="Password" type = "password" onChange = {e => setPassword(e.target.value)}/>
            <button type = "submit">Login</button>
        </form>
    );
}