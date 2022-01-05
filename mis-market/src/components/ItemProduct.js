import React, { useEffect, useState } from 'react'
import { actFetchProductsRequest, AddCart } from './actions'
import { connect } from 'react-redux';
import styled from "styled-components";
import { Link, useLocation} from 'react-router-dom'
import axios from 'axios';

const Contaner = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Product = styled.div`
  display: flex;
  width: 90%;;
  padding: 50px;
`;
// Image side
const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
`;

const ImageMain = styled.img`
  max-height: 80%;
  max-width: 80%;
`;

const ImageSub = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ImageSubItemDiv = styled.div`
  width:100px;
  height:100px;
  margin-right: 20px;
`;

const ImageSubItem = styled.img`
  width:100%;
  max-height:100%;
  cursor: pointer;
  margin-bottom: 10px;
`;

// Info side
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const ProductTitle = styled.p`
  font-size: 40px;
  font-weight: 500;
`;

const ProductPrice = styled.p`
  font-size: 26px;
  font-weight: 400;
`;

const ProductDescription = styled.span`
  margin-bottom: 20px;
`;

const ProductColor = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ProductColorTitle = styled.span`
  text-transform: uppercase;
  font-weight: 600;;
  margin-bottom: 10px;
`;

const ProductChooseColor = styled.div`
  display: flex;
`;

const ProductColorItem = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #000000;
  margin-right: 10px;
  background-color: ${props => props.color};
  cursor: pointer;
`;

ProductColorItem.defaultProps = {
  color: "",
}


const ProductSize = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductSizeTitle = styled.label`
  text-transform: uppercase;
  font-weight: 600;;
`;

const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductQuantityTitle = styled.label`
  text-transform: uppercase;
  font-weight: 600;;
`;
const ProductChooseQuantity = styled.div`
  display: flex;
`;
const UpQuantity = styled.div`
  display: inline-block;
  border: 1px solid #ced4da;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in-out;
  & > i{
    padding: 10px;
  }
  &:hover{
    background-color: salmon;
  }
`;
const DownQuantity = styled.div`
  display: inline-block;
  border: 1px solid #ced4da;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in-out;
  & > i{
    padding: 10px;
  }
  &:hover{
    background-color: salmon;
  }
`;
const Quantity = styled.div`
  width: 50px;
  text-align: center;
  line-height: 38px;
  font-size: 20px;
`;


const AddToCart = styled.div`
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  border: 0;
  background-color: #1f1f1f;
  color: #ffffff;
  font-size: 20px;
  border-radius: 5px;
  padding: 20px;
  width:  auto;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
`;

// Related product
const RelatedProductTitle = styled.h2`
  border-bottom: solid pink 5px;
  font-weight: 500;
  margin-bottom: 30px;
`;
const RelatedListProduct = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center
`;
const RelatedProduct = styled.div`
  display: flex;
    flex-direction: column;
    margin: 10px 30px;
    overflow: hidden;
    position: relative;
    transition: 0.4s  ease-out;
    cursor: pointer;
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

const RelatedProductImage = styled.img`
  width: 100%;
    height: auto;
    
`;
const RelatedProductItemTitle = styled.div`
  color: #000;
    font-size: 16px;
    opacity: 0.7;
    margin-top: 10px;
`;
const RelatedProductPrice = styled.div`
      color: #000;
    font-size: 16px;
    opacity: 0.7;
`;



export const ItemProduct = (props) => {

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


  const location = useLocation();
  // console.log(location.pathname.split(" ").join("-").toLowerCase().split("-")[0]);
  
  const [product, setProduct] = useState({})
  const [listImage, setlistImage] = useState([])
  const [listColor, setlistColor] = useState([])
  const [listSize, setlistSize] = useState([])
  const [size, setsize] = useState("")
  const [quantity, setquantity] = useState(0)
  
  useEffect(() => {
    // props.actFetchProductsRequest();  
    let endpoint = '/product'
    let method = 'GET'
    let API_URL = 'https://6146e2b165467e0017384983.mockapi.io';
    let d = axios({
      method,
      url: `${API_URL}/${endpoint}/${location.pathname.split(" ").join("-").toLowerCase().split("-")[0].split("/")[2]}`,
      data: null
    }).catch(err => {
      console.log(err);
    }).then(res => {
      console.log(res.data)
      setProduct(res.data)
      setlistImage(res.data.images)
      setlistColor(res.data.color)
      setlistSize(res.data.sizes)
    });
    window.scrollTo(0, 0)
  }, [location])

  const [allProduct, setallProduct] = useState([])
  useEffect(() => {
    // props.actFetchProductsRequest();  
    let endpoint = '/product'
    let method = 'GET'
    let API_URL = 'https://6146e2b165467e0017384983.mockapi.io';
    let d = axios({
      method,
      url: `${API_URL}/${endpoint}`,
      data: null
    }).catch(err => {
      console.log(err);
    }).then(res => {
      let x = Math.floor(Math.random() * 4);
      let filtered = res.data.filter(item =>
        parseInt(item.id) % 4 === x
      );
      console.log(filtered)
      setallProduct(filtered)
    });
  }, [])

  return <Contaner>
    <Product>
      <ProductImage>
        <ImageMain src={listImage[0]}></ImageMain>
        <ImageSub>
          {
            listImage.map((item, index) =>
            (
              <ImageSubItemDiv>
                <ImageSubItem src={item}></ImageSubItem>
              </ImageSubItemDiv>    
            )
            )
          }
        </ImageSub>

      </ProductImage>
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>$ {product.price} USD</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <p>S T O R E</p>
        <ProductColor>
          <ProductColorTitle>CLASSICS:</ProductColorTitle>
          <ProductChooseColor>
            {
              listColor.map((item, index) => (
                <ProductColorItem color={item.toLowerCase()}></ProductColorItem>
              ))
            }
          </ProductChooseColor>
        </ProductColor>
        <ProductColor>
          <ProductColorTitle>LIMITED EDITION::</ProductColorTitle>
          <ProductChooseColor>
            {
              listColor.map((item, index) => (
                <ProductColorItem color={item.toLowerCase()}></ProductColorItem>
              ))
            }
          </ProductChooseColor>
        </ProductColor>
        <ProductSize>
          <ProductSizeTitle>SIZE:</ProductSizeTitle>
          <div className="form-group" style={{ maxWidth: "200px" }}>
            <select value={size} onChange={(e) => { setsize(e.target.value) }} className="form-control" style={{ cursor: "pointer" }}>
              {listSize.map(option => {
                return <option value={option} key={option} >{option}</option>
              })}
            </select>
          </div>
        </ProductSize>
        <ProductQuantity>
          <ProductQuantityTitle>QUANTITY:</ProductQuantityTitle>
          <ProductChooseQuantity>
            <DownQuantity onClick={() => { quantity == 0 ? setquantity(0) : setquantity(quantity - 1) }}><i class="fas fa-minus"></i></DownQuantity>
            <Quantity>{quantity}</Quantity>
            <UpQuantity onClick={() => { setquantity(quantity + 1) }}><i class="fas fa-plus"></i></UpQuantity>
          </ProductChooseQuantity>
        </ProductQuantity>
        <AddToCart onClick={() => props.AddCart(product)}>ADD TO CART</AddToCart>
      </ProductInfo>
    </Product>
    <RelatedProductTitle>Related Product</RelatedProductTitle>
    <RelatedListProduct>
      {
        allProduct.map((item, index) => (
          <StyledLink to={"/product/" + item.id + "-" + item.name.split(" ").join("-").toLowerCase()} >
            <RelatedProduct key={index}>
              <RelatedProductImage src={item.images[0]} alt="TEE" />
              <RelatedProductItemTitle>{item.name}</RelatedProductItemTitle>
              <RelatedProductPrice>${item.price}</RelatedProductPrice>

            </RelatedProduct>
          </StyledLink>
        ))
      }

    </RelatedListProduct>
  </Contaner>
}



const mapStateToProps = state => {
  return {
    _products: state._todoProduct,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: item => dispatch(AddCart(item))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemProduct)