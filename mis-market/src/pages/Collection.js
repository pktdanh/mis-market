import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Banner1 from '../assets/h1.png'
import Banner2 from '../assets/h2.png'
import Banner3 from '../assets/h3.png'
import Banner4 from '../assets/h4.png'
import Product from "../components/Products";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const BannerButton = styled.div`
  position: absolute;
  width: fit-content;
  height: 20px;
  font-size: 1em;
  border-bottom: 2px solid #fff;
  bottom: 40px;
  left: 28px;
  line-height: 20px;
  text-transform: uppercase;
  display: none;
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  margin-top: 70px;
  @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
        grid-template-columns: repeat(1, 500px);
  }
`;

const BannerItem = styled.div`
  height: 250px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  margin: 20px;
  background-image: url(${props => props.image});
  background-size: cover;
  position: relative;
`;
BannerItem.defaultProps = {
  image: "",
}
const BannerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease-out;
  &:hover {
    opacity: 0.7;
    color: #fff;
		background-color: rgb(99,113,198);
	}
  &:hover ${BannerButton}{
    animation: fadeIn 0.8s;
    display: block;
    @keyframes fadeIn {
      0% {
        opacity:0;
        transform: translateY(20px);
      }
      100% {
        opacity:1;
        transform: translateY(0px);
      }
    }
  }
`;
const BannerTitle = styled.div`
  font-weight: 700;
  font-size: 2em;
  margin-left: 30px;
  margin-top: 30px;
`;
const BannerTag = styled.div`
  font-weight: 300;
  font-size: 0.8em;
  margin-left: 30px;
`;

// End banner
const Wrap = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const SubCategory = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    & > h5 {
        font-weight: bold;
    }
`;

const CateItem = styled.li`
    margin-left: 28px;
    padding: 4px 2px;
    cursor: pointer;
    transition: 0.3s all linear ;
    &:hover {
        opacity: .7;
        color: blue;
        transform: translateX(2px);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    border-bottom: 2px solid transparent;
    &:hover{
      /* border: 2px solid rgb(99,113,198); */
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #000;
    }
`;

const Collection = (props) => {
    const location = useLocation();
    let cateID = location.pathname.split("/").pop();
    const [subCate, setSubCate] = useState()
    const [categories, setCategories] = useState([])
   console.log('re-render', subCate) 

   let lsp = ''
    switch (cateID){
      case '1':
        lsp = 'lsp001'
        break;
      case '2':
        lsp ='lsp006'
        break;
      case '3':
        lsp ='lsp011'
        break;
      case '4':
        lsp ='lsp014'
        break;
      default:
    }

    useEffect(() => {
      setSubCate(lsp)
    },[cateID])

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

    
    let API_URL = `https://localhost:44352/api/subcategory/many/nsp00${cateID}`;
    useEffect(() => {
        let endpoint = ''
        let method = 'GET'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: null
        }).catch(err => {
        console.log(err);
        }).then(res => {
            setCategories(res.data)
        });
    }, [])


    return (
        <Container>
        <Banner>
        <BannerItem image={Banner1}>
          <BannerWrapper onClick={() => window.location = "/collections/1"}>
            <BannerTitle>Thực phẩm tươi sống</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem onClick={() => window.location = "/collections/2"} image={Banner2}>
          <BannerWrapper>
            <BannerTitle>Công nghệ phẩm</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem onClick={() => window.location = "/collections/3"} image={Banner3}>
          <BannerWrapper>
            <BannerTitle>Lương thực</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem onClick={() => window.location = "/collections/4"} image={Banner4}>
          <BannerWrapper>
            <BannerTitle>Nhu yếu phẩm cần thiết</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
      </Banner>
            <Wrap>
                <SubCategory>
                    <h5>Danh mục phụ</h5>
                    <ul>
                        {
                            categories.map((item, index) => {
                                if (item.maLoaiSP === subCate)
                                    return <CateItem style={{color:"blue"}} onClick={() => setSubCate(item.maLoaiSP)} key={item.maLoaiSP}>{item.tenLoaiSP}</CateItem>
                                else 
                                    return <CateItem onClick={() => setSubCate(item.maLoaiSP)} key={item.maLoaiSP}>{item.tenLoaiSP}</CateItem>
                                        
                            })
                        }
                    </ul>
                </SubCategory>
                <Product key={subCate} query={subCate} typeQuery='many' ></Product>
            </Wrap>
        </Container>
    );
};

export default Collection;
