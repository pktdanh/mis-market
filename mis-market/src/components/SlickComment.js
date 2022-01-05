import React, { Component } from "react";
import Slider from "react-slick";
import styled, { css} from "styled-components";

const Coment = ({image, content, name, pos}) => {
  const UserName = styled.span`
    transition: all 0.3s ease 0s;
    margin-bottom: 5px;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    color: #222222;
    line-height: 1.2em !important;
    margin-top: 0;
    font-weight: 600;
    
    &:hover{
      color: #8490ff;
    }
  `;
  const CommentWrapper = styled.div`
    display: flex;
    width: 600px;
    background-color: #fff;
    padding: 20px;
    margin: 50px;
    cursor: pointer;
    &:hover ${UserName}{
      color: #8490ff;
    }
  `;
  const CommentAvatar = styled.img`
    max-width: 40px;
    max-height: 40px;
  `;
  const CommentContainer = styled.div`
    width: 90%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
  `;
  const CommentContent = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
    color: #777777;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.625em;
    position: relative;
  `;

  const Desc = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
  `;

  const UserPosition = styled.span`
    margin-top: 0;
    margin-bottom: 1rem;
    color: #777777;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.625em;
    position: relative;
  `;
  return <>
    <CommentWrapper>
      <CommentAvatar src={image}></CommentAvatar>
      <CommentContainer>
        <CommentContent>{content}</CommentContent>
        <Desc>
        <UserName>{name}</UserName>
        <UserPosition>{pos}</UserPosition>
        </Desc>
      </CommentContainer>
    </CommentWrapper>
  </>
}

const SlickComment = () => {
  const SlickCommentWrapper = styled.div`
    display: flex;
  `;
  return <SlickCommentWrapper>
    <Coment 
      image="https://preview.colorlib.com/theme/personal/img/elements/xuser2.png.pagespeed.ic.m4YLg0_Boe.webp"
      content="A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However."
      name="Carolyn Craig"
      pos="CEO at Meta"
      ></Coment>
      <Coment 
      image="https://preview.colorlib.com/theme/personal/img/elements/xuser1.png.pagespeed.ic.pxMIgWxqVB.webp"
      content="Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you."
      name="Harriet Maxwell"
      pos="CEO at Google"
      ></Coment>
  </SlickCommentWrapper>
}

export default SlickComment;