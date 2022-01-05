import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from "styled-components";
import { Badge } from "@material-ui/core";
// import { Search } from "@material-ui/icons";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  width: 100vw;
  height: 60px;
  padding: 20px;
  background-color: transparent;
  @media (max-width: 768px) {
      height: 60px;
      font-size: 12px;
  }
  @media (max-width: 425px) {
      height: 60px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
        
  }
  @media (max-width: 425px) {
            
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const BrandNameLeft = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  &:hover{
      border-bottom: 2px solid transparent !important;
    }
  
`;

const BrandNameRight = styled.div`
  text-align: center;
  font-size: 20px;
  margin-left: 10px;
  border-bottom: 2px solid transparent;
  &:hover{
      border-bottom: 2px solid transparent !important;
    }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: space-evenly;
  margin-left: 40px;
  @media (max-width: 768px) {
      display: none;
  }
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
      
  }
  @media (max-width: 425px) {
        
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 768px) {
      
  }
  @media (max-width: 425px) {
      display: none;
  }
`;

// change style Link
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    border-bottom: 2px solid transparent;
    &:hover{
      border-bottom: 2px solid rgb(99,113,198);
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #000;
    }
`;

const StyledMenuIcon = styled(MenuIcon)`
  display: none !important;
  margin-right: 10px;
  margin-bottom: 4px;
  @media (max-width: 768px) {
    display: block !important;
  }
`;

export class Header extends Component {

  render() {
    return (
      <Container id="header">
        
        <Wrapper>
        <StyledMenuIcon></StyledMenuIcon>
          <StyledLink to="/">
            <Left>
              <BrandNameLeft>MIS</BrandNameLeft>
              <BrandNameRight>STORE</BrandNameRight>
            </Left>
          </StyledLink>
          <Center>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/collections">Shop</StyledLink>
            <StyledLink to="/myorder">My Order</StyledLink>
            {/* <StyledLink to="/">Blog</StyledLink> */}
            {/* <StyledLink to="/about">About</StyledLink> */}
            <StyledLink to="/aboutme">{localStorage.getItem('user') ? localStorage.getItem('user') : "ME"}</StyledLink>
          </Center>
          <Right>
            {/* <MenuIcon></MenuIcon> */}
            <StyledLink to="/signin"><MenuItem>{localStorage.getItem('user') ? "" : "SIGN UP"}</MenuItem></StyledLink>
            <StyledLink to="/signin"><MenuItem>{localStorage.getItem('user') ? "" : "SIGN IN"}</MenuItem></StyledLink>
            <MenuItem>
              <Link to="/carts">
                <Badge badgeContent={this.props.numberCart} color="primary">
                  <ShoppingCartIcon style={{color: "#000"}}></ShoppingCartIcon>
                </Badge>
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    numberCart: state._todoProduct.numberCart
  }
}
export default connect(mapStateToProps, null)(Header)
