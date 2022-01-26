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
    padding: 80px 100px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #b2e5e5;
    -webkit-box-shadow: -7px 8px 15px 2px rgba(0,0,0,0.68); 
    box-shadow: -7px 8px 15px 2px rgba(0,0,0,0.68);

    & > h2 {
        margin-bottom: 30px;
    }
    /* width: 100%; */

    
`;

const Button = styled.button`
    margin-bottom: 20px;
    margin-left: 42px;
    padding: 4px 10px;
    &:hover {
        background-color: #4c4c4b;
        color: white;
    }
`

const Row = styled.div`
    
    & > div > label {
        display: block;
        margin-bottom: 2px;
    }
    & > div > input {
        margin-bottom: 16px;
        padding: 6px 0;
        padding-left: 12px;
        border-radius: 6px;
    }
`;


const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("header").classList.add("changeHeaderColor");
        document.getElementById("center").classList.add("changeColor");
        document.getElementById("brandNameRight").classList.add("changeColorToBlack");
        document.getElementById("shopping-icon").classList.add("changeColorToBlack");
        let menuItem = document.querySelectorAll('.menu-item')
        menuItem.forEach(function(item) {
          item.classList.add('changeColorToBlack')
        })

    }, []);


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
          url: 'http://localhost:8080/api/account/login/customer',
          data: values
        }).then(function (res) {
          console.log("res.data: ",res.data)
          if(res.data == ""){
            return;
          } else {
            console.log("hello: ",res.data)
            loginContext.updateLogin(loginContext.isLogin)
            loginContext.updateUser(JSON.stringify(res.data))
            window.location = "/"

          }
          
        })
        .catch(function (err) {
            console.log(err)
        }
        )
        // context.updateLogin(context.isLogin)
      };

    return (<Container>
        <h2>Đăng nhập</h2>
        <h1>{message}</h1>
        <div>
            <Row>
                <div>
                    <label htmlFor="username">
                        Tên đăng nhập:
                    </label>
                    <input onChange={e => setData({username: e.target.value, password: data.password})} id="username" placeholder="tên đăng nhập..."></input>
                </div>
            </Row>
           
            <Row>
                <div>
                    <label htmlFor="password">
                        Mật khẩu:
                    </label>
                    <input onChange={e => setData({username: data.username, password: e.target.value})} type="password" id="password" placeholder="mật khẩu..."></input>
                </div>
           </Row>
           <Button onClick={handleSubmit} style={{marginTop: "12px", padding: "6px 20px", borderRadius:"6px", cursor:"pointer"}}>Đăng nhập</Button>
        </div>
    </Container>)
}

export default Login;