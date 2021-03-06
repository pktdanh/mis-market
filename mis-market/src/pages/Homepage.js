import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import ImgSlide1 from '../assets/hp3.jpg'
import ImgSlide2 from '../assets/hp2.jpg'
import ImgSlide3 from '../assets/hp1.jpg'
import Banner1 from '../assets/h1.png'
import Banner2 from '../assets/h2.png'
import Banner3 from '../assets/h3.png'
import Banner4 from '../assets/h4.png'
import Product from '../components/Products';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const ImageSilder = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Slide = styled.div`
  width: 100%;
  height:calc(calc(100vw / 1930) * 1040);
  background-image: url(${props => props.image});
  background-size: cover;
  transition: 0.4s linear;
`;
Slide.defaultProps = {
  image: "",
}

const GroupSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const ImageTag = styled.div`
  position: absolute;
  width: 800px;
  height: 200px;
  margin-left: 100px;
  /* animation: shimmy 3s infinite;
  animation-direction: alternate;
  @keyframes shimmy {
    0% {
      transform: translate(0, 0);    
    }
    100% {
      transform: translate(20px, 50px);
    }
  } */
  @media (max-width: 768px) {
    width: 200px;
    height: 120px;
  }
  @media (max-width: 425px) {
    width: 120px;
    height: 80px;
  }
`;

const ImageTagCollection = styled.div`
  font-size: 28px;
  color: #f1f1f1;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

const ImageTagSeason = styled.div`
  font-size: 60px;
  text-transform: uppercase;
  color: #f1f1f1;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const ImageTagButton = styled.div`
  width: 140px;
  height: 40px;
  display: inline-block;
  text-align: center;
  border: 0;
  transition: 0.4s  ease-out;
  background-color: rgb(99,113,198);
  color: #fff;
  font-size: 16px;
  border-radius: 1em;
  padding-top: 7px;
  cursor: pointer;
  outline: none;
  -webkit-box-shadow: -4px 5px 10px 1px rgba(0,0,0,0.69); 
box-shadow: -4px 5px 10px 1px rgba(0,0,0,0.69);
  &:hover{
    background-color: #000;
    transition:0.4s ease-out;
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 20px;
    font-size: 10px;
    padding-top: 2px;
  }
`;
// End slider
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
  & > a {
    color: white !important;
  }
  & > a:hover {
    text-decoration: none !important;
    color: white !important;
  }
  & > a:focus, & > a:hover, & > a:visited, & > a:link, & > a:active {
    text-decoration: none;
    color: #fff;
  }
`;
const ATag = styled.a`
  color: white !important;
  text-decoration: none !important;
  &:hover {
    text-decoration: none !important;
    color: white !important;
  }
`
const Banner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  margin-top: 30px;
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
const WrapProduct = styled.div`
  width: 1200px;
`
// End banner



const Homepage = (props) => {
  const [idSlide, setIdSlide] = useState(1);
  const [linkImage, setLinkImage] = useState(ImgSlide1);
  
  // const [_products, setProducts] = useState([])   

  //   let API_URL = 'https://6146e2b165467e0017384983.mockapi.io';
  //   useEffect(() =>{
  //       // props.actFetchProductsRequest();  
  //       let endpoint = '/product'
  //       let method = 'GET'
  //       let d = axios({
  //           method,
  //           url: `${API_URL}/${endpoint}`,
  //           data: null
  //       }).catch(err => {
  //           console.log(err);
  //       }).then(res => {
  //           setProducts(res.data)
  //           // console.log(res.data)
  //       });
  //   }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    let header = document.getElementById('header')
    let center = document.getElementById('center')
    let brandNameRight = document.getElementById('brandNameRight')
    let shoppingIcon = document.getElementById('shopping-icon')
    let menuItem = document.querySelectorAll('.menu-item')
    const handleScroll = () =>{
      const y = window.scrollY;
      if (y > 100) {

        header.classList.add('changeHeaderColor');
        center.classList.add('changeColor');
        brandNameRight.classList.add('changeColorToBlack');
        shoppingIcon.classList.add('changeColorToBlack');
        menuItem.forEach(function(item) {
          item.classList.add('changeColorToBlack')
        })
      }
      else {
        header.classList.remove('changeHeaderColor');
        center.classList.remove('changeColor');
        brandNameRight.classList.remove('changeColorToBlack');
        shoppingIcon.classList.remove('changeColorToBlack');
        menuItem.forEach(function(item) {
          item.classList.remove('changeColorToBlack')
        })

      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll)
      
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (idSlide === 1) {
        setIdSlide(2);
        setLinkImage(ImgSlide2)
      } else if (idSlide === 2) {
        setIdSlide(3);
        setLinkImage(ImgSlide3)
      } else if (idSlide === 3) {
        setIdSlide(1);
        setLinkImage(ImgSlide1)
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [idSlide, linkImage]);

  return (
    <Container>
      <ImageSilder>
        <i className="fas fa-chevron-left" onClick={() => {
          let s1 = document.getElementById("slide-img-1");
          if (idSlide === 1) {
            setIdSlide(3);
            setLinkImage(ImgSlide3)
            // s1.style.backgroundImage = url(${ImgSlide3})
          } else if (idSlide === 2) {
            setIdSlide(1);
            setLinkImage(ImgSlide1)
          } else if (idSlide === 3) {
            setIdSlide(2);
            setLinkImage(ImgSlide2)
          }
        }}
          style={{ position: 'absolute', fontSize: '5em', cursor: 'pointer', color: '#999999', opacity: '0.5', zIndex: '10' }}></i>
        <GroupSlide>
          <Slide id="slide-img-1" image={linkImage} >
          </Slide>
        </GroupSlide>
        {/* c?? 1 c??ch kh??c l?? cho 3 ???nh absolute l??n nhau r???i opacity 0 t???ng th???ng s??? c?? hi???u ???ng m??? d???n*/}
        <ImageTag>
          <ImageTagCollection>??I CH??? THU??</ImageTagCollection>
          <ImageTagSeason>CHUNG TAY C??NG CH???NG D???CH COVID-19</ImageTagSeason>
          <ImageTagButton><ATag href="#product">MUA NGAY</ATag></ImageTagButton>
        </ImageTag>
        <i className="fas fa-chevron-right" onClick={() => {
          let s1 = document.getElementById("slide-img-1");
         
          if (idSlide === 1) {
            setIdSlide(2);
            setLinkImage(ImgSlide2)
          } else if (idSlide === 2) {
            setIdSlide(3);
            setLinkImage(ImgSlide3)
          } else if (idSlide === 3) {
            setIdSlide(1);
            setLinkImage(ImgSlide1)
          }
        }}
          style={{ position: 'absolute', fontSize: '5em', cursor: 'pointer', color: '#999999', opacity: '0.5', right: '0' }}></i>
      </ImageSilder>
      <Banner>
        <BannerItem image={Banner1}>
          <BannerWrapper onClick={() => window.location = "/category/nsp001"}>
            <BannerTitle>Th???c ph???m t????i s???ng</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem onClick={() => window.location = "/category/nsp002"} image={Banner2}>
          <BannerWrapper>
            <BannerTitle>C??ng ngh??? ph???m</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem onClick={() => window.location = "/category/nsp003"} image={Banner3}>
          <BannerWrapper>
            <BannerTitle>L????ng th???c</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem onClick={() => window.location = "/category/nsp004"} image={Banner4}>
          <BannerWrapper>
            <BannerTitle>Nhu y???u ph???m c???n thi???t</BannerTitle>
            <BannerTag></BannerTag>
            <BannerButton>MUA NGAY</BannerButton>
          </BannerWrapper>
        </BannerItem>
      </Banner>
      <WrapProduct id="product">
        <Product  typeQuery='all'>
        </Product>
      </WrapProduct>
        
      
    </Container>
  )
}

export default Homepage;