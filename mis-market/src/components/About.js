import React, { useEffect, useState, useRef } from 'react'
import styled, { css} from "styled-components";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";
import SlickComment from './SlickComment'
const Container = styled.div`
  
  width: 100%;
`;
const ThisIsMe = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 150px;
  padding-bottom: 20px;
  background-color: rgb(249,249,255);
`;
const TextSide = styled.div`
  padding-right: 30px;
  
  
`;
const ImageSide = styled.div`

`;

const TextSideTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 700;;
`;
const ButtonTextSide = styled.div`
  width: 210px;
  height: 40px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  line-height: 40px;
  background: linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover{
    box-shadow: 0px 15px 47px -8px #8490ff;
  }
`;
const AboutMe = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 40px;
`;

const MyOfferServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(249,249,255); */
  padding-top: 60px;
`;
const MyOfferServicesTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 36px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  line-height: 1.2em !important;
`;
const MyOfferServicesDescription = styled.span`
  margin-bottom: 2rem;
  color: rgb(119, 119, 119);
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.625em;
`;
const ListMyOfferServices = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const OfferServicesItem = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OfferServicesItemIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > i{
    font-size: 40px;
    text-align: center;
  }
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover{
    color: rgb(132, 144, 255);
  }
`;
const OfferServicesItemTitle = styled.h4`
  margin-top: 30px;
  margin-bottom: 20px;
  transition: all 0.3s ease 0s;
  font-size: 18px;
  font-weight: 900;
  color: rgb(34, 34, 34);
  cursor: pointer;
  text-align: center;
  /* margin-top: 60px; */
  &:hover{
    color: rgb(132, 144, 255);
  }
`;
const OfferServicesItemDescription = styled.div`
  margin-bottom: 1rem;
  color: rgb(119, 119, 119);
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.625em;
  text-align: center;
`;









const PostFromBlog = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 100px 200px;
  background: linear-gradient(to right,#8490ff 0%,#62bdfc 100%);
`;
const Post = styled.img`

`;


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

const About = () => {
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


  return <Container>
    <ThisIsMe>
      <TextSide style={{marginTop: "150px", marginLeft: "150px"}}>
        <span style={{display: "block", textTransform: "uppercase", marginBottom: "30px"}}>this is me</span>
        <TextSideTitle>pham hoang viet</TextSideTitle>
        <span style={{display: "block", marginTop: "15px", marginBottom: "20px"}}>You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</span>
        <ButtonTextSide>
          <a href="/about" style={{textDecoration: "none", lineHeight: "42px", paddingLeft: "30px", paddingRight: "30px", border: "none", color: "#fff", display: "inline-block", fontWeight: "500"}}>discover now</a>
        </ButtonTextSide>
      </TextSide>
      <ImageSide>
        <img src="https://preview.colorlib.com/theme/personal/img/xhero-img.png.pagespeed.ic.INRfo5JT2o.webp" alt="THIS IS ME" />
      </ImageSide>
    </ThisIsMe>
    <AboutMe>
      <ImageSide style={{marginTop: "100px", marginLeft: "100px"}}>
      <img src="https://preview.colorlib.com/theme/personal/img/xabout-img.png.pagespeed.ic.1_IGXbMOtM.webp" alt="ABOUT ME" />
      </ImageSide>
      <TextSide style={{marginTop: "150px"}}>
        <span style={{display: "block", textTransform: "uppercase", marginBottom: "30px"}}>about me</span>
        <TextSideTitle>PERSONAL DETAILS</TextSideTitle>
        <span style={{display: "block", marginTop: "15px", marginBottom: "20px"}}>
        Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </span>
        <ButtonTextSide>
          <a href="/about" style={{textDecoration: "none", lineHeight: "42px", paddingLeft: "30px", paddingRight: "30px", border: "none", color: "#fff", display: "inline-block", fontWeight: "500"}}>view full details</a>
        </ButtonTextSide>
      </TextSide>
    </AboutMe>
    <MyOfferServices>
      <MyOfferServicesTitle>My Offered Services</MyOfferServicesTitle>
      <MyOfferServicesDescription>At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.</MyOfferServicesDescription>
      <ListMyOfferServices>
        <OfferServicesItem>
          <OfferServicesItemIcon>
          <i class="fas fa-object-group"></i>
          <OfferServicesItemTitle>Web Design</OfferServicesItemTitle>
          </OfferServicesItemIcon>
          
          <OfferServicesItemDescription>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</OfferServicesItemDescription>
        </OfferServicesItem>
        <OfferServicesItem>
          <OfferServicesItemIcon>
          <i class="far fa-file-code"></i>
          <OfferServicesItemTitle>Web Developement</OfferServicesItemTitle>
          </OfferServicesItemIcon>
          
          <OfferServicesItemDescription>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</OfferServicesItemDescription>
        </OfferServicesItem>
        <OfferServicesItem>
          <OfferServicesItemIcon>
          <i class="fas fa-camera"></i>
          <OfferServicesItemTitle>Photography</OfferServicesItemTitle>
          </OfferServicesItemIcon>
          
          <OfferServicesItemDescription>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</OfferServicesItemDescription>
        </OfferServicesItem>
        <OfferServicesItem>
          <OfferServicesItemIcon>
          <i class="far fa-images"></i>
          <OfferServicesItemTitle>Clipping Path</OfferServicesItemTitle>
          </OfferServicesItemIcon>
          
          <OfferServicesItemDescription>Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.</OfferServicesItemDescription>
        </OfferServicesItem>
        <OfferServicesItem>
          <OfferServicesItemIcon>
          <i class="fas fa-toggle-on"></i>
          <OfferServicesItemTitle>Apps Interface</OfferServicesItemTitle>
          </OfferServicesItemIcon>
          
          <OfferServicesItemDescription>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.</OfferServicesItemDescription>
        </OfferServicesItem>
        <OfferServicesItem>
          <OfferServicesItemIcon>
          <i class="fas fa-magic"></i>
          <OfferServicesItemTitle>Graphic Design</OfferServicesItemTitle>
          </OfferServicesItemIcon>
          
          <OfferServicesItemDescription>You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.</OfferServicesItemDescription>
        </OfferServicesItem>
      </ListMyOfferServices>
    </MyOfferServices>
    <Banner></Banner>
    <FeaturedProjects></FeaturedProjects>
    <Feedback></Feedback>
    <ChooseYourPlan></ChooseYourPlan>
    <PostFromBlog>

    </PostFromBlog>
  </Container>
};

const Banner = () => {
  // Banner
  const GradientBanner = styled.div`
    width: 100%;
    height: 300px;
    background-image: linear-gradient( to right, rgb(131,144,254), rgb(98,188,252));;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px 200px;
    text-align: center;
  `;
  const BannerCounter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const BannerCounterNumber = styled.h1`
    font-weight: 700;
    color: #fff;
    font-size: 36px;
    line-height: 1.2em !important;
    font-family: "Poppins", sans-serif;
  `;
  const BannerCounterText = styled.span`
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.625em;
  `;

  function timer(num, time, selector){
    let e = document.querySelector(selector);
    let counter = 0;
    let distance = 0.01* num / time;

    var i = setInterval(() => {
      counter+=distance;
      e.innerText = Math.round(counter)

      if(counter > num - 1){
        e.innerText = num;
        clearInterval(i)
      }
    }, 10);
  }

  useEffect(() => {
    timer(2536, 3, '#a')
    timer(4569, 3, '#b')
    timer(1111, 3, '#c')
    timer(484, 3, '#d')
  }, )

  return (
    <GradientBanner id="gradientBanner">
      <BannerCounter>
        <BannerCounterNumber id="a"></BannerCounterNumber>
        <BannerCounterText>Projects Completed</BannerCounterText>
      </BannerCounter>
      <BannerCounter>
        <BannerCounterNumber id="b"></BannerCounterNumber>
        <BannerCounterText>Happy Clients</BannerCounterText>
      </BannerCounter>
      <BannerCounter>
        <BannerCounterNumber id="c"></BannerCounterNumber>
        <BannerCounterText>Cups of Coffee</BannerCounterText>
      </BannerCounter>
      <BannerCounter>
        <BannerCounterNumber id="d"></BannerCounterNumber>
        <BannerCounterText>Real Professionals</BannerCounterText>
      </BannerCounter>

    </GradientBanner>
  )
}

const FeaturedProjects = () => {
  const FeaturedProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
  `;
  const FeaturedProjectTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 36px;
    color: rgb(34, 34, 34);
    font-weight: 600;
    line-height: 1.2em !important;
  `;
  const FeaturedProjectDescription = styled.span`
    margin-bottom: 5rem;
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.625em;
  `;
  const FeaturedProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `;
  const FeaturedProjectFilter = styled.ul`
    display: flex;
  `;
  const FeaturedProjectFilterItem = styled.li`
    position: relative;
    list-style-type: none;
    margin: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 3px #fff solid;
    transition: 0.5 ease-in;
    ${props => props.active && css`
      color: #8490ff;
    `};

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 3px;
      background: #8490ff;
      transition: width .3s;
    }   
    &:hover::after {
      width: 100%;
      transition: width .5s;
    }              

  `;

  const FeaturedProjectItemTop = styled.div`
    position: relative;
  `;
  const FeaturedProjectItemImage = styled.img``;
  const FeaturedProjectItemOverlay = styled.div`
    display: none;
    position: absolute;
    width: 58px;
    height: 40px;
    background-image: url(${props => props.overlay});
    background-repeat: no-repeat;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, -50%); /* This is a shorthand of translateX(-50%) and translateY(-50%) */
  `;
  const FeaturedProjectItemOverlayBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: 5px;
    background: linear-gradient(0deg,#8490ff 0%,#62bdfc 100%);
    transition: 0.3s ease-in-out;
  `;
  const FeaturedProjectItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
  `;
  const FeaturedProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: 20px 30px;
    &:hover ${FeaturedProjectItemOverlay}{
      display: block;
    }
    &:hover ${FeaturedProjectItemOverlayBackground}{
      opacity: 0.75;
    }
    
  `;
  const FeaturedProjectItemName = styled.h4`
    font-size: 18px;
    color: #222;
    line-height: 1.2em!important;
    margin-bottom: 0;
    margin-top: 20px;
    font-weight: 600;
  `;
  const FeaturedProjectItemType = styled.span`
    font-weight: 100;
    margin-top: 5px;
    margin-bottom: 10px;
  `;


  const [listImage, setlistImage] = useState([])
  const [listItem, setlistItem] = useState([])

  useEffect(() => {
    // props.actFetchProductsRequest();  
    let endpoint = '/featured-projects'
    let method = 'GET'
    let API_URL = 'https://6146e2b165467e0017384983.mockapi.io';
    let d = axios({
      method,
      url: `${API_URL}/${endpoint}`,
      data: null
    }).catch(err => {
      console.log(err);
    }).then(res => {
      
      setlistImage(res.data)
      setlistItem(res.data)
    });
    // window.scrollTo(0, 0)
  }, [])

  let changeListItem = (type) => {
    if(type == "all") setlistItem(listImage);
    else {
      let result = listImage.filter(item => item.type == type)
      setlistItem(result);
    }
  }

  return <FeaturedProjectsWrapper>
    <FeaturedProjectTitle>Our Latest Featured Projects</FeaturedProjectTitle>
    <FeaturedProjectDescription>Who are in extremely love with eco friendly system.</FeaturedProjectDescription>
    <FeaturedProjectFilter>
      <FeaturedProjectFilterItem active onClick={() => changeListItem("all")}>all</FeaturedProjectFilterItem>
      <FeaturedProjectFilterItem onClick={() => changeListItem("vector")}>vector</FeaturedProjectFilterItem>
      <FeaturedProjectFilterItem onClick={() => changeListItem("raster")}>raster</FeaturedProjectFilterItem>
      <FeaturedProjectFilterItem onClick={() => changeListItem("ui/ux")}>ui/ux</FeaturedProjectFilterItem>
      <FeaturedProjectFilterItem onClick={() => changeListItem("printing")}>printing</FeaturedProjectFilterItem>
    </FeaturedProjectFilter>
    <FeaturedProjectContainer>
    {
      listItem.map(item => 
        <FeaturedProjectItem>
        <FeaturedProjectItemTop>
          <FeaturedProjectItemImage src={item.image}></FeaturedProjectItemImage>
          <FeaturedProjectItemOverlayBackground></FeaturedProjectItemOverlayBackground>
          <FeaturedProjectItemOverlay overlay={item.overlay}></FeaturedProjectItemOverlay>
        </FeaturedProjectItemTop>
        <FeaturedProjectItemInfo>
          <FeaturedProjectItemName>{item.name}</FeaturedProjectItemName>
          <FeaturedProjectItemType>{item.type}</FeaturedProjectItemType>
        </FeaturedProjectItemInfo>
      </FeaturedProjectItem>
      )
    }
    </FeaturedProjectContainer>
  </FeaturedProjectsWrapper>
}

const Feedback = () => {
  const FeedBackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    padding-top: 100px;
    background-color: rgb(249,249,255);
  `;
  const FeedBackTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 36px;
    color: rgb(34, 34, 34);
    font-weight: 600;
    line-height: 1.2em !important;
  `;
  const FeedBackDescription = styled.span`
    margin-bottom: 5rem;
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.625em;
  `;
  return (
    <FeedBackWrapper>
      <FeedBackTitle>Client’s Feedback About Me</FeedBackTitle>
      <FeedBackDescription>It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or even a person.</FeedBackDescription>
      <SlickComment></SlickComment>
    </FeedBackWrapper>
  )
}

const ChooseYourPlan =() => {
  const ChooseYourPlanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 150px;
    
  `;
  const ChooseYourPlanTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 36px;
    color: rgb(34, 34, 34);
    font-weight: 600;
    line-height: 1.2em !important;
  `;
  const ChooseYourPlanDescription = styled.span`
    margin-bottom: 5rem;
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.625em;
  `;
  const ListPlan = styled.div`
    display: flex;
  `;
  return <ChooseYourPlanWrapper>
    <ChooseYourPlanTitle>Choose Your Plan</ChooseYourPlanTitle>
    <ChooseYourPlanDescription>When someone does something that they know that they shouldn’t do, did they.</ChooseYourPlanDescription>
    <ListPlan>
      <Plan 
        id="01" 
        name="Economy" 
        type="For the individuals"
        desc={["Secure Online Transfer", "Unlimited Styles for interface", "Reliable Customer Service"]}
        price="199.00"
        ></Plan>
        <Plan 
        id="02" 
        name="Business" 
        type="For the individuals"
        desc={["Secure Online Transfer", "Unlimited Styles for interface", "Reliable Customer Service"]}
        price="299.00"
        ></Plan>
        <Plan 
        id="03" 
        name="Premium" 
        type="For the individuals"
        desc={["Secure Online Transfer", "Unlimited Styles for interface", "Reliable Customer Service"]}
        price="399.00"
        ></Plan>
        <Plan 
        id="04" 
        name="Exclusive" 
        type="For the individuals"
        desc={["Secure Online Transfer", "Unlimited Styles for interface", "Reliable Customer Service"]}
        price="499.00"
        ></Plan>
    </ListPlan>
  </ChooseYourPlanWrapper>
}

const Plan = ({id, name, type, desc, price}) => {
  const PlanID = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 120px;
    font-size: 50px;
  `;
  const PlanIDBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(132,144,255,.1);
    transition: all .3s ease 0s;
  `;
  const PlanName = styled.h4`
    margin-top: 20px;
    font-size: 18px;
    color: #222;
    line-height: 1.2em!important;
    margin-bottom: 0;
    font-weight: 600;
  `;
  const PlanType = styled.span`
    padding-bottom: 3rem;
    margin-top: 1rem;
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.625em;
    width: 100%;
  `;
  const PlanListDesc = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  const PlanDescItem = styled.span`
    
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 3.625em;
    height: 3.625em;
    width: 100%;
  `;
  const PlanPrice = styled.h1`
    margin-top: 50px;
    font-weight: 700;
  `;
  const PlanBuyNow = styled.div`
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: 700;
    background-color: #fff;
    position: absolute;
    bottom: 70px;
    display: none;
  `;
  const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 40px 20px 60px 20px;
    margin: 10px;
    text-align: center;
    background-color: rgb(249,249,255);
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
      background: linear-gradient(to right,#8490ff 0%,#62bdfc 100%);
    }
    &:hover ${PlanIDBorder}{
      background-color: #d8daeed8;
    }
    &:hover ${PlanID}{
      color: #fff;
      background: linear-gradient(to right,#8490ff 0%,#62bdfc 100%);
    }
    &:hover ${PlanName}{
      color: #fff;
    }
    &:hover ${PlanType}{
      color: #fff;
      border-bottom: 1px solid #fff;
    }
    &:hover ${PlanDescItem}{
      color: #fff;
      border-bottom: 1px solid #fff;
    }
    &:hover ${PlanPrice}{
      visibility: hidden;
    }
    &:hover ${PlanBuyNow}{
      color: #000;
      display: block;
    }
  `;
  return <Container>
    <PlanIDBorder>
      <PlanID>{id}</PlanID>
    </PlanIDBorder>
    <PlanName>{name}</PlanName>
    <PlanType>{type}</PlanType>
    <PlanListDesc>
    {desc.map((item, index) => 
      <PlanDescItem key={index}>{item}</PlanDescItem>
    )}
    </PlanListDesc>
    <PlanPrice>${price}</PlanPrice>
    <PlanBuyNow>Buy Now</PlanBuyNow>
  </Container>
}
export default About;