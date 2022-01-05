import React, { useEffect, useState } from 'react'
import { actFetchProductsRequest, AddCart } from './actions'
import { connect } from 'react-redux';
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import axios from 'axios';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(4, 1fr);
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
    /* display: none; */
    /* position: absolute; */
    width: 80%;
    height: 40px;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 1.2em;
    top: 220px;
    bottom: -50px;
    left: 20%;
    /* transform: translateX(-50%); */
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid #1f1f1f1f;
    margin-top: 10px;
    margin-bottom: 20px;
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
    font-size: 16px;
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
  width: 1200px;
  height: auto;
  margin-top: 100px;
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


export const Product = (props) => {
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
  const [showFilter, setShowFIlter] = useState(false);
  const [_products, setProducts] = useState([])
  const [products, setproducts] = useState([])
  let API_URL = 'https://localhost:44328/api/Product/all';
  useEffect(() => {
    // props.actFetchProductsRequest();  
    let endpoint = ''
    let method = 'GET'
    let d = axios({
      method,
      url: `${API_URL}/${endpoint}`,
      data: null
    }).catch(err => {
      console.log(err);
    }).then(res => {
      setProducts(res.data)
      setproducts(res.data)
      // console.log(res.data)
    });
  }, [])
  

  // const [searchTerm, setSearchTerm] = useState('')

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     console.log(searchTerm)
  //     let result = products.filter((p) => {
  //       return p.name.toLowerCase().search(searchTerm.toLowerCase()) != -1
  //     })
  //     console.log(result);
  //     if(result.length > 0) {setProducts(result)}
      
  //   }, 100)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [searchTerm])

  if (_products.length > 0) {
    
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ProductWrapper>
          <ProductWrapperTitle>PRODUCT OVERVIEW</ProductWrapperTitle>
          <ProductFilterAndSearch>
            {/* <ListFilterProduct>
              <FilterProduct onClick={() => setProducts(products)}>All products</FilterProduct>
              <FilterProduct onClick={()=>{
                let result = products.filter((p) => {
                  return p.types.includes("women")
                })
                // console.log(result)
                if(result.length > 0) setProducts(result)
              }}>Women</FilterProduct>
              <FilterProduct onClick={()=>{
                let result = products.filter((p) => {
                  return p.types.includes("men")
                })
                // console.log(result)
                setProducts(result)}}
                >Men</FilterProduct>
              <FilterProduct onClick={()=>{
                let result = products.filter((p) => {
                  return p.types.includes("bag")
                })
                // console.log(result)
                setProducts(result)}}
                >Bag</FilterProduct>
              <FilterProduct onClick={()=>{
                let result = products.filter((p) => {
                  return p.types.includes("shoes")
                })
                // console.log(result)
                setProducts(result)}}
                >Shoes</FilterProduct>
              <FilterProduct onClick={()=>{
                let result = products.filter((p) => {
                  return p.types.includes("watches")
                })
                // console.log(result)
                setProducts(result)}}
                >Watches</FilterProduct>
            </ListFilterProduct> */}
            <ProductFilterButton onClick={() => {
              let option = document.getElementById("option-filter");
              if (showFilter === false) {
                option.style.maxHeight = "0";
                // option.style.transitionTimingFunction = "cubic-bezier(0.46, 0.14, 0.93, 0.76)"
              } else {
                option.style.maxHeight = "1000px"
                // option.style.transitionTimingFunction ="cubic-bezier(0.18, 0.28, 0, 0.95)"
              }
              return setShowFIlter(!showFilter)
            }}>
              <FilterListIcon></FilterListIcon>
              Filter
            </ProductFilterButton>
            <ProductSearchButton>
              <SearchIcon></SearchIcon>
              Search
            </ProductSearchButton>
          </ProductFilterAndSearch>
          <SearchBar>
            <i class="fas fa-search"></i>
            <SearchInput type="text" name="search" id="searchbar" placeholder='Search here...' />
          </SearchBar>
          <OptionFilter id="option-filter">
            <SortBy>
              <div>Sort By</div>
              <ul>
                <FilterLink><a href="#">Default</a></FilterLink>
                <FilterLink><a href="#">Popularity</a></FilterLink>
                <FilterLink><a href="#">Average Rating</a></FilterLink>
                <FilterLink><a href="#">Newness</a></FilterLink>
                <FilterLink><a href="#">Price: Low to High</a></FilterLink>
                <FilterLink><a href="#">Price: High to Low</a></FilterLink>
              </ul>
            </SortBy>
            <Price>
              <div>Price</div>
              <ul>
                <FilterLink><a href="#">All</a></FilterLink>
                <FilterLink><a href="#">$0.00 - $50.00</a></FilterLink>
                <FilterLink><a href="#">$50.00 - $100.00</a></FilterLink>
                <FilterLink><a href="#">$100.00 - $150.00</a></FilterLink>
                <FilterLink><a href="#">$150.00 - $200.00</a></FilterLink>
                <FilterLink><a href="#">$200.00+</a></FilterLink>
              </ul>
            </Price>
            <Color>
              <div>Color</div>
              <ul>
                <FilterLink><span><i class="fas fa-circle" style={{ color: "black", marginRight: "10px" }}></i></span><a href="">Black</a></FilterLink>
                <FilterLink><span><i class="fas fa-circle" style={{ color: "blue", marginRight: "10px" }}></i></span><a href="">Blue</a></FilterLink>
                <FilterLink><span><i class="fas fa-circle" style={{ color: "grey", marginRight: "10px" }}></i></span><a href="">Grey</a></FilterLink>
                <FilterLink><span><i class="fas fa-circle" style={{ color: "green", marginRight: "10px" }}></i></span><a href="">Green</a></FilterLink>
                <FilterLink><span><i class="fas fa-circle" style={{ color: "bred", marginRight: "10px" }}></i></span><a href="">Red</a></FilterLink>
                <FilterLink><span><i class="fas fa-circle" style={{ color: "white", marginRight: "10px" }}></i></span><a href="">White</a></FilterLink>
              </ul>
            </Color>
            <Tags>
              <div>Tags</div>
            </Tags>
          </OptionFilter>
          <OptionSearch></OptionSearch>

          <Container>
            {
              _products.map((item, index) => (
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <StyledLink to={"/product/"+ item.iD_Product + "-" + item.name_Product.split(" ").join("-").toLowerCase() }>
                <ProductItem key={index}>
                  <ProductImage src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg" alt="TEE" />
                  <ProductTitle>{item.name_Product}</ProductTitle>
                  <ProductPrice>${item.price_Product}</ProductPrice>
                  
                </ProductItem>
                </StyledLink>

                <StyledLink to={"/store/" + item.iD_Store}>
                  <p>{item.name_Store}</p>
                </StyledLink>

                <ProducAddtocart onClick={() => props.AddCart(item)}>
                    Add To Cart
                  </ProducAddtocart>
                  </div>
              ))
            }

          </Container>
          <ProducAddtocart style={{ alignSelf: "center", maxWidth: "200px" }}>LOAD MORE</ProducAddtocart>

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
export default connect(mapStateToProps, mapDispatchToProps)(Product)
