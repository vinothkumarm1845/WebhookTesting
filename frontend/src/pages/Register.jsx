import { useState } from "react";
import api from '../services/api.js';
export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = async (e)=>{
        e.preventDefault();
        await api.post('/auth/register', {email, password});
        alert('registered successfully. login now');
    }
    return (
        <form onSubmit = {submit}>
            <h2>Register</h2>
            <input placeholder="Email" onChange = {e => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange = {e => setPassword(e.target.value)}/>
            <button type = "submit">Register</button>
        </form>
    );

}