import React, {useState, useContext} from 'react'
import styled from 'styled-components';
import { Link, useLocation  } from 'react-router-dom';

import {MyContext} from '../../App'

const Nav = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    background-color: #dff9fb;
    color: #535c68;
    opacity: .7;
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
    padding-top: 10px;
`;

const Icon = styled.div`
  i {
      font-size: ${props => props.fs || "12px"};
      
    }
`;

const NavTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.status === "active" ? "orange" : "#535c68"};
`;


const StyledLink = styled(Link)`
    &:hover{
      /* border: 2px solid rgb(99,113,198); */
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #000;
    }
`;

function Navigation() {
    
    let location = useLocation ()
    const [active, setActive] = useState(location.pathname.split("/")[1] === "" ? 2 : (location.pathname.split("/")[1] === "shipping" ? 1 : 3))
    return (
        <Nav>
            {/* <StyledLink to="/shipping">
                <NavItem status={ active === 1 ? "active" : "deactive" } onClick={()=>{setActive(1)}}>
                    <Icon fs="24px"><i className="fas fa-shipping-fast"></i></Icon>
                    <NavTitle>Đơn Hàng</NavTitle>
                </NavItem>
            </StyledLink> */}
            <StyledLink to="/">
                <NavItem status={ active === 2 ? "active" : "deactive" } onClick={()=>{setActive(2)}}>
                    <Icon fs="28px"><i className="fas fa-home"></i></Icon>
                    <NavTitle>Trang Chủ</NavTitle>
                </NavItem>
            </StyledLink>
            <StyledLink to="/me">
                <NavItem status={ active === 3 ? "active" : "deactive" } onClick={()=>{setActive(3)}}>
                    <Icon fs="24px"><i className="far fa-meh-rolling-eyes"></i></Icon>
                    <NavTitle>Tôi</NavTitle>
                </NavItem>
            </StyledLink>
        </Nav>
    )
}

export default Navigation
