import React, { useState, Component, useContext } from 'react'
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
  color: #44bbbb;
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
  padding: 0 10px;
  @media (max-width: 768px) {
      
  }
  @media (max-width: 425px) {
      display: none;
  }
`;



// change style Link
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    border-bottom: 2px solid transparent;
    &:hover{
      border-bottom: 2px solid #44bbbb;
      color: #44bbbb;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const LogoutItem = styled(Link)`
    margin-left: 25px;
    padding: 0 10px;
    text-decoration: none;
    color: #fff;
    border-bottom: 2px solid transparent;
    &:hover{
      border-bottom: 2px solid #44bbbb;
      color: #44bbbb;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
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
  constructor(props) {
    super(props);
    this.state = {
      linkToMyUser: localStorage.getItem('MISuser') ? `/aboutme/${JSON.parse(localStorage.getItem('MISuser')).username}` : ``,
      linkToMyOrder: localStorage.getItem('MISuser') ? `/myorder/${JSON.parse(localStorage.getItem('MISuser')).username}` : ``,
    };
  }
  render() {
    return (
      <Container id="header">
        
        <Wrapper>
        <StyledMenuIcon></StyledMenuIcon>
          <StyledLink to="/">
            <Left>
              <BrandNameLeft>MIS</BrandNameLeft>
              <BrandNameRight id="brandNameRight">STORE</BrandNameRight>
            </Left>
          </StyledLink>
          <Center id="center">
            <StyledLink to="/">Trang chủ</StyledLink>
            <StyledLink to="/collections/1">Sản phẩm</StyledLink>
            {localStorage.getItem('MISisLogin') && <StyledLink to={this.state.linkToMyOrder}>Đơn hàng</StyledLink>}
            {/* <StyledLink to="/">Blog</StyledLink> */}
            {/* <StyledLink to="/about">About</StyledLink> */}
          </Center>
          <Right>
            {localStorage.getItem('MISisLogin') &&<StyledLink to={this.state.linkToMyUser}><MenuItem className="menu-item">Xin chào, {JSON.parse(localStorage.getItem('MISuser')).username}</MenuItem></StyledLink>}
            {/* <MenuIcon></MenuIcon> */}
            {!localStorage.getItem('MISisLogin') && <><StyledLink to="/signin"><MenuItem className="menu-item">Đăng nhập</MenuItem></StyledLink><StyledLink to="/signin"><MenuItem className="menu-item">Đăng ký</MenuItem></StyledLink></>}
            {localStorage.getItem('MISisLogin') && <LogoutItem className="menu-item" onClick={() => {localStorage.clear(); window.location.reload();}}>Đăng xuất</LogoutItem>}
            
            <MenuItem>
              <Link to="/carts">
                <Badge badgeContent={this.props.numberCart} color="primary">
                  <ShoppingCartIcon id="shopping-icon" style={{color: "#fff"}}></ShoppingCartIcon>
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
