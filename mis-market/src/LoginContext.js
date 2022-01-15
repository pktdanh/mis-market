import { useState, createContext } from "react";
const LoginContext = createContext()
function LoginProvider({children}){
    const [isLogin, setIsLogin] = useState(localStorage.getItem("MISisLogin"))
    const [user, setUser] = useState(localStorage.getItem("MISuser"))

    const value = {
        isLogin,
        user,
        updateLogin: () => {
            setIsLogin(!isLogin);
            localStorage.setItem("MISisLogin",!isLogin);
        },
        updateUser: (data) =>{
          setUser(data);
          localStorage.setItem("MISuser",data);
        }
    }
    return (
        <LoginContext.Provider value = {value}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }