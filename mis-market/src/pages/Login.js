import styled from "styled-components";
import axios from 'axios';
import React, { useEffect, useState, useRef, useContext } from 'react'
import { LoginContext } from '../LoginContext'

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

    const [data, setData] = useState({
        username: "",
        password: "",
    })
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [message, setmessage] = useState("")

    const loginContext = useContext(LoginContext)

    const handleSubmit = () => {
        setData({username, password});
        setUsername(""); 
        setPassword("");
        login(data)
    }
    const login = (values) => {
        console.log('Success:', values);
    
        axios({
          method: 'post',
          url: 'https://localhost:44352/api/account/login',
          data: values
        }).then(function (res) {
          console.log("res.data: ",res.data)
          if(res.data == ""){
            return;
          } else {
            console.log("hello: ",res.data)
            loginContext.updateLogin(loginContext.isLogin)
            loginContext.updateUser(JSON.stringify(res.data))
            window.location = "http://localhost:3000/"

          }
          
        })
        .catch(function (err) {
            console.log(err)
        }
        )
        // context.updateLogin(context.isLogin)
      };

    return (<Container>
        <h2>Login</h2>
        <h1>{message}</h1>
        <div>
            <Row>
                <div>
                    <label for="username">
                        Username:
                    </label>
                    <input onChange={e => setData({username: e.target.value, password: data.password})} id="username" placeholder="username..."></input>
                </div>
            </Row>
           
            <Row>
                <div>
                    <label for="password">
                        Password:
                    </label>
                    <input onChange={e => setData({username: data.username, password: e.target.value})} type="password" id="password" placeholder="username..."></input>
                </div>
           </Row>
           <button onClick={handleSubmit} style={{marginTop: "12px", padding: "6px 20px", borderRadius:"6px", cursor:"pointer"}}>Sign in</button>
        </div>
    </Container>)
}

export default Login;