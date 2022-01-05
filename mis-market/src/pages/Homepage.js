import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import ImgSlide1 from '../assets/xslide-01.jpg.pagespeed.ic.XotvXKn0Mi.webp'
import ImgSlide2 from '../assets/xslide-02.jpg.pagespeed.ic.__MQeyG5T4.webp'
import ImgSlide3 from '../assets/xslide-03.jpg.pagespeed.ic.tP-L47NU9M.webp'
import Banner1 from '../assets/banner1.webp'
import Banner2 from '../assets/banner2.webp'
import Banner3 from '../assets/banner3.webp'
import Product from '../components/Product';
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
  width: 400px;
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
  color: #333;
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
  width: fit-content;
  height: 20px;
  font-size: 1em;
  border-bottom: 2px solid #fff;
  margin-left: 28px;
  margin-top: 100px;
  margin-bottom: 5px;
  line-height: 20px;
  text-transform: uppercase;
  display: none;;
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  align-items: center;
  justify-content: center;
  width: 80%;
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
  margin: 20px;
  background-image: url(${props => props.image});
  background-size: cover;
  position: relative;;
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
    document.onscroll = () => {
      const y = window.scrollY;
      if (y > 100) {
        header.classList.add('changeHeaderColor');
      }
      else {
        header.classList.remove('changeHeaderColor');
      }
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
        {/* có 1 cách khác là cho 3 ảnh absolute lên nhau rồi opacity 0 từng thằng sẽ có hiệu ứng mờ dần*/}
        <ImageTag>
          <ImageTagCollection>Collection 2021</ImageTagCollection>
          <ImageTagSeason>NEW SEASON</ImageTagSeason>
          <ImageTagButton>SHOP NOW</ImageTagButton>
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
          <BannerWrapper>
            <BannerTitle>Women</BannerTitle>
            <BannerTag>Spring 2021</BannerTag>
            <BannerButton>SHOP NOW</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem image={Banner2}>
          <BannerWrapper>
            <BannerTitle>Men</BannerTitle>
            <BannerTag>Spring 2021</BannerTag>
            <BannerButton>SHOP NOW</BannerButton>
          </BannerWrapper>
        </BannerItem>
        <BannerItem image={Banner3}>
          <BannerWrapper>
            <BannerTitle>Accesories</BannerTitle>
            <BannerTag>New Trend</BannerTag>
            <BannerButton>SHOP NOW</BannerButton>
          </BannerWrapper>
        </BannerItem>
      </Banner>
      
        <Product>
        </Product>
      
    </Container>
  )
}

export default Homepage;