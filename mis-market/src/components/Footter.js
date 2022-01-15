import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Container = styled.div`
  width: 100%;
  background-color: #222;
  height:  auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  /* margin-top: 100px; */
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const WrapperUp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 300px));
  justify-content: center;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

const FooterColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding-right: 30px;
`;

const ColumnTag = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 15px;
  line-height: 1.6;
  text-transform: uppercase;
`;

const ColumnContent = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ColumnContentItem = styled.li`
  list-style-type: none;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  opacity: 0.5;
  font-size: 14px;
`;

const SocialItem = styled.div`
  display: flex;
  color: #fff;
  opacity: 0.5;
  margin-top: 30px;
  width: 40%;
  justify-content: space-between;
`;

const WrapperDown = styled.div`
  width: 100%;
`;

const Coppyright = styled.div`
  font-family: 'Segoe UI', sans-serif;
  font-weight: 200;
  font-size: 16px;
  opacity: 0.5;
  text-align: center;
  padding: 30px 0;
`;

const CoppyrightName = styled.a`
  color: #007bff !important;
  text-decoration: none;
  background-color: transparent;
`;

const Footer = () => {
  return <Container>
    <WrapperUp>
    <FooterColumn>
      <ColumnTag>CATEGORIES</ColumnTag>
      <ColumnContent>
      <ColumnContentItem>Women</ColumnContentItem>
      <ColumnContentItem>Men</ColumnContentItem>
      <ColumnContentItem>Shoes</ColumnContentItem>
      <ColumnContentItem>Watches</ColumnContentItem>
      </ColumnContent>
    </FooterColumn>
    <FooterColumn>
    <ColumnTag>HELP</ColumnTag>
      <ColumnContent>
      <ColumnContentItem>Track Order</ColumnContentItem>
      <ColumnContentItem>Returns</ColumnContentItem>
      <ColumnContentItem>Shipping</ColumnContentItem>
      <ColumnContentItem>FAQs</ColumnContentItem>
      </ColumnContent>
    </FooterColumn>
    <FooterColumn>
      <ColumnTag>GET IN TOUCH</ColumnTag>
      <ColumnContentItem>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</ColumnContentItem>
      <SocialItem>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <PinterestIcon></PinterestIcon>
      </SocialItem>
    </FooterColumn>
    <FooterColumn>
      <ColumnTag>NEWSLETTER</ColumnTag>
      
    </FooterColumn>
    </WrapperUp>
    <WrapperDown>
      <Coppyright>Copyright ©2021 All rights reserved | This template is made with <i className="far fa-heart"></i> by <CoppyrightName>Shiro</CoppyrightName></Coppyright>
    </WrapperDown>
  </Container>
}

export default Footer;