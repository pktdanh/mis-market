import styled from "styled-components";
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
    padding: 50px 80px;
    border: 1px solid #ccc;
    border-radius: 20px;

    & > h2 {
        margin-bottom: 30px;
    }
    /* width: 100%; */
`;

const Row = styled.div`
    
    & > div > label {
        display: block;
        margin-bottom: 2px;
    }
    & > div > input {
        margin-bottom: 16px;
        padding: 6px 0;
        padding-left: 12px;
        border-radius: 10px;
    }
`;


const Login = () => {
    const API_URL = 'https://localhost:44328/api/Account/login';

    const [data, setData] = useState({})
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [message, setmessage] = useState("")

    const handleSubmit = () => {
        console.log(username, password); 
        setData({username, password});
        setUsername(""); 
        setPassword("");
        login()
    }

    
    let login = () => {
        // let endpoint = '/signin'
        let method = 'GET'
        console.log(`${API_URL}/${username}/${password}`)
        let d = axios({
        method,
        url: `${API_URL}/${username}/${password}`
        }).then(res => {
            console.log(res.data);
            setmessage(res.data.message)
            localStorage.clear();
            localStorage.setItem('user', username);
            setTimeout(() => {
                window.location = "http://localhost:3000"
            }, 2000);
        }).catch(err => {
            alert(err);
        });
    }

    return (<Container>
        <h2>Login</h2>
        <h1>{message}</h1>
        <div>
            <Row>
                <div>
                    <label for="username">
                        Username:
                    </label>
                    <input onChange={e => setUsername(e.target.value)} id="username" placeholder="username..."></input>
                </div>
            </Row>
           
            <Row>
                <div>
                    <label for="password">
                        Password:
                    </label>
                    <input onChange={e => setPassword(e.target.value)} type="password" id="password" placeholder="username..."></input>
                </div>
           </Row>
           <button onClick={handleSubmit} style={{marginTop: "12px", padding: "6px 20px", borderRadius:"6px", cursor:"pointer"}}>Sign in</button>
        </div>
    </Container>)
}

export default Login;