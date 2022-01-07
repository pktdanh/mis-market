import React, { useEffect, useState } from 'react'
import { actFetchProductsRequest, AddCart } from './actions'
import { connect } from 'react-redux';
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import axios from 'axios';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'
import Filter from './Filter'

const Container = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, minmax(300px, 1fr));
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
  }

  
`

const ProducAddtocart = styled.div`
    width: 80%;
    height: 40px;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 1.2em;
    
    
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid #1f1f1f1f;
    margin-bottom: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
    &:hover{
        color: #fff;
        background-color: #000;
    }
`;

const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 30px;
    overflow: hidden;
    position: relative;
    transition: 0.4s  ease-out;
    cursor: pointer;
    
    
`



const ProductImage = styled.img`
    width: 100%;
    height: auto;
    &:hover{
        #addToCart {
            background-color: red;
        }
    }
`


const ProductTitle = styled.h5`
    color: #000;
    font-size: 18px;
    font-weight: 600;
    opacity: 0.7;
    margin-top: 10px;
`;

const ProductPrice = styled.span`
    color: #000;
    font-size: 16px;
    opacity: 0.7;
`;


// 

const ProductWrapper = styled.div`
  // width: 1200px;
  height: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    max-width: 80%;
    /* font-size: 12px; */
  }
  @media (max-width: 768px) {
    max-width: 80%;
    font-size: 12px;
  }
`;
const ProductWrapperTitle = styled.h2`
  text-transform: uppercase;
`;
const ProductFilterAndSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const ListFilterProduct = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  
`;
const FilterProduct = styled.div`
border-bottom: 2px solid #fff;
  &:hover{
    border-bottom: 2px solid rgb(99,113,198);
  }
`;
const ProductFilterButton = styled.div`
  margin-left: 350px;
  cursor: pointer;
  border: 1px solid #717fe0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  border-radius: 10px;
  &:hover{
    background-color: #717fe0;
    color: #fff;
  }
  @media (max-width: 1024px) {
    margin-left: 100px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    max-height: 35px;
  }
`;
const ProductSearchButton = styled.div`
  cursor: pointer;
  border: 1px solid #717fe0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  &:hover{
    background-color: #717fe0;
    color: #fff;
  }
  @media (max-width: 1024px) {
    max-width: 80%;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    max-width: 80%;
    font-size: 12px;
    max-height: 35px;
    padding-top: 5px;
    padding-bottom: 10px;
  }
`;

// OPTION FILTER
const OptionFilter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 0px 50px;
  margin-top: 5px;
  height: auto;
  background-color: #f2f2f2;
  overflow: hidden;
  transition: 1.5s linear;
  & li {
    list-style-type: none;
  }
  & div{
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const FilterLink = styled.li`
  color: #aaa;
  margin-top: 10px;
  font-size: 0.9rem;
  & > a{
    color: #aaa;
  }
  & a:hover{
    color: #717fe0;
  }
`;

const SortBy = styled.div``;

const Price = styled.div``;

const Color = styled.div``;

const Tags = styled.div``;

const OptionSearch = styled.div``;

// SEARCH
const SearchBar = styled.div`
  width: 100%auto;
  height: 60px;
  /* background-color: #f2f2f2; */
  margin-top: 10px;
  display: flex;
  border: 1px solid #e6e6e6;
  & i {
    align-items: center;
    font-size: 16px;
    margin-top: 22px;
    margin-left: 22px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  align-items: center;
  border: none;
  outline: none;
  text-indent: 22px;
  /* background-color: #f2f2f2; */
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

const WrapItem = styled.div`
  display:flex;
  flex-direction: column; 
  alignItems: center;
  border: 2px solid #efefef;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: 0.2s all linear ;
  -webkit-box-shadow: -7px 8px 13px 5px rgba(0,0,0,0.35); 
box-shadow: -7px 8px 13px 5px rgba(0,0,0,0.35);
    &:hover {
        opacity: .9;
        color: blue;
        transform: translateY(-10px);
    }
`;

const Highlight = styled.span`
  font-weight: 600;
  padding-left: 8px;
`;


export const Products = (props) => {
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
  // eslint-disable-next-line no-useless-constructor
  const [_products, setProducts] = useState([])
  const [products, setproducts] = useState([])
  let API_URL 
  useEffect(() => {
    // props.actFetchProductsRequest();  
    let method = 'GET'
    if (props.typeQuery === 'all'){
      API_URL = 'https://localhost:44352/api/product/all';
    }
    else if (props.typeQuery === 'many'){
      console.log("many")
      API_URL = `https://localhost:44352/api/product/many/${props.query}`;
      console.log(API_URL)
    }
    else if (props.typeQuery === 'one'){
      API_URL = `https://localhost:44352/api/product/one/${props.query}`;
    }
    let d = axios({
      method,
      url: API_URL,
      data: null
    }).catch(err => {
      console.log(err);
    }).then(res => {
      console.log('res.data: ',res.data)
      setProducts(res.data)
      setproducts(res.data)
    });
  }, [])
  

  

  if (_products.length > 0) {
    
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ProductWrapper>
          <ProductWrapperTitle>PRODUCT OVERVIEW</ProductWrapperTitle>
          <Filter></Filter>
          <Container>
            {
              _products.map((item, index) => (
                <WrapItem>
                  <StyledLink to={"/product/"+ item.maSP}>
                  <ProductItem key={index}>
                    <ProductImage src={item.anhSP} alt="TEE" />
                    <ProductTitle>{item.tenSP}</ProductTitle>
                    <ProductPrice>Giá: <Highlight>{item.giaSP} VNĐ</Highlight></ProductPrice>
                    <ProductPrice>Đã bán: <Highlight>{item.soSPDaBan}</Highlight></ProductPrice>
                    <ProductPrice>Rating: <Highlight>{item.avgRating}</Highlight><StarIcon style={{fontSize: "18px",transform:"translateY(-1px)",color:"#dd9d0d",marginLeft:"2px"}}></StarIcon></ProductPrice>
                  </ProductItem>
                  </StyledLink>

                  <StyledLink style={{marginLeft: "30px"}} to={"/store/" + item.iD_Store}>
                    <p>Cửa hàng: <Highlight>{item.account_CH}</Highlight></p>
                  </StyledLink>

                  <ProducAddtocart onClick={() => props.AddCart(item)}>
                      Add To Cart
                    </ProducAddtocart>
                </WrapItem>
              ))
            }

          </Container>

        </ProductWrapper>
      </div>
    )
  }
  return (
    <div className="row" style={{"marginTop": "500px", "marginBottom": "500px"}}>
      <h2>Loading...!</h2>
    </div>
  )


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
export default connect(mapStateToProps, mapDispatchToProps)(Products)
