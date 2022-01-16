import React, { useEffect, useState, useContext } from 'react'
import { actFetchProductsRequest, AddCart } from './actions'
import { connect } from 'react-redux';
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import axios from 'axios';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { FilterProductContext } from '../FilterProductContext'

const ProductFilterAndSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
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
  grid-template-columns: repeat(2, 1fr);
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
  cursor: pointer;
  color: #aaa;
  width: 250px;
  padding: 10px;
  border: 2px solid ${props => props.choosen ? "palevioletred" : "white"};
  border-radius: 10px;
  &:hover{
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

const Filter = ({productList}) => {
    // const context = useContext(FilterContext)
    const filterProductContext = useContext(FilterProductContext)



    let changeproductInFilter = (filterOrderBy, filterPrice) => {
      let _products = productList
      
      if(filterOrderBy === "default"){

      } else if(filterOrderBy === "vote"){
        _products.sort((a, b) => b.avgRating - a.avgRating);
      } else if(filterOrderBy === "newest"){
        _products.sort((a, b) => b.ngayDang - a.ngayDang);
      } else if(filterOrderBy === "lowtohigh"){
        _products.sort((a, b) => a.giaSP - b.giaSP);
      } else if(filterOrderBy === "hightolow"){
        _products.sort((a, b) => b.giaSP - a.giaSP);
      }

      if(filterPrice === "all"){
  
      } else if(filterPrice === "1"){
        // 1000-50000
        const result = _products.filter((item) => item.giaSP > 1000 && item.giaSP < 50000)
        _products = result
        console.log("Result filter: ", _products)
    
      } else if(filterPrice === "2"){
        // 50000-100000
        const result = _products.filter((item) => item.giaSP > 50000 && item.giaSP < 100000)
        _products = result
        console.log("Result filter: ", result)
    
      } else if(filterPrice === "3"){
        // 100000-200000
    
      } else if(filterPrice === "4"){
        // 200000-500000
    
      } else if(filterPrice === "5"){
        //  > 500000
      }
      console.log("Products after filter: ", _products)
      // context.updateproducts(_products)
      filterProductContext.updateCount(_products)
    }

    
  
    



    const [showFilter, setShowFilter] = useState(false);
    const [orderBy, setOrderBy] = useState("default")
    const [price, setPrice] = useState("all")
    return (
        <React.Fragment>
            <ProductFilterAndSearch>
                <ProductFilterButton onClick={() => {
                let option = document.getElementById("option-filter");
                if (showFilter === false) {
                    option.style.maxHeight = "0";
                    // option.style.transitionTimingFunction = "cubic-bezier(0.46, 0.14, 0.93, 0.76)"
                } else {
                    option.style.maxHeight = "1000px";
                    // option.style.transitionTimingFunction ="cubic-bezier(0.18, 0.28, 0, 0.95)"
                }
                return setShowFilter(!showFilter)
                }}>
                <FilterListIcon></FilterListIcon>
                Bộ lọc
                </ProductFilterButton>
                <ProductSearchButton>
                <SearchIcon></SearchIcon>
                Tìm kiếm
                </ProductSearchButton>
            </ProductFilterAndSearch>
            <SearchBar>
            <i className="fas fa-search"></i>
            <SearchInput type="text" name="search" id="searchbar" placeholder='Tìm kiếm...' />
          </SearchBar>
          <OptionFilter id="option-filter">
            <SortBy>
              <div>Sắp xếp theo</div>
              <ul>
                <FilterLink choosen={ orderBy === "default" ? true : false} onClick={() => changeproductInFilter("default")}>Mặc định</FilterLink>
                <FilterLink choosen={ orderBy === "popular" ? true : false} onClick={() => changeproductInFilter("popular")}>Phổ biến</FilterLink>
                <FilterLink choosen={ orderBy === "vote" ? true : false} onClick={() => changeproductInFilter("vote")}>Đánh giá</FilterLink>
                <FilterLink choosen={ orderBy === "newest" ? true : false} onClick={() => changeproductInFilter("newest")}>Mới nhất</FilterLink>
                <FilterLink choosen={ orderBy === "lowtohigh" ? true : false} onClick={() => changeproductInFilter("lowtohigh")}>Giá: Thấp đến Cao</FilterLink>
                <FilterLink choosen={ orderBy === "hightolow" ? true : false} onClick={() => changeproductInFilter("hightolow")}>Giá: Cao đến Thấp</FilterLink>
              </ul>
            </SortBy>
            <Price>
              <div>Giá</div>
              <ul>
                <FilterLink choosen={ price === "all" ? true : false} onClick={() => changeproductInFilter(null,"all")}>Tất cả</FilterLink>
                <FilterLink choosen={ price === "1" ? true : false} onClick={() => changeproductInFilter(null,"1")}>1 000VND - 50 000VND</FilterLink>
                <FilterLink choosen={ price === "2" ? true : false} onClick={() => changeproductInFilter(null,"2")}>50 000VND - 100 000VND</FilterLink>
                <FilterLink choosen={ price === "3" ? true : false} onClick={() => changeproductInFilter(null,"3")}>100 000VND - 200 000VND</FilterLink>
                <FilterLink choosen={ price === "4" ? true : false} onClick={() => changeproductInFilter(null,"4")}>200 000VND - 500 000VND</FilterLink>
                <FilterLink choosen={ price === "5" ? true : false} onClick={() => changeproductInFilter(null,"5")}>500 000VND+</FilterLink>
              </ul>
            </Price>
            {/* <Color>
              <div>Color</div>
              <ul>
                <FilterLink><span><i className="fas fa-circle" style={{ color: "black", marginRight: "10px" }}></i></span><a href="">Black</a></FilterLink>
                <FilterLink><span><i className="fas fa-circle" style={{ color: "blue", marginRight: "10px" }}></i></span><a href="">Blue</a></FilterLink>
                <FilterLink><span><i className="fas fa-circle" style={{ color: "grey", marginRight: "10px" }}></i></span><a href="">Grey</a></FilterLink>
                <FilterLink><span><i className="fas fa-circle" style={{ color: "green", marginRight: "10px" }}></i></span><a href="">Green</a></FilterLink>
                <FilterLink><span><i className="fas fa-circle" style={{ color: "bred", marginRight: "10px" }}></i></span><a href="">Red</a></FilterLink>
                <FilterLink><span><i className="fas fa-circle" style={{ color: "white", marginRight: "10px" }}></i></span><a href="">White</a></FilterLink>
              </ul>
            </Color>
            <Tags>
              <div>Tags</div>
            </Tags> */}
          </OptionFilter>
          <OptionSearch></OptionSearch>

        </React.Fragment>
        
    )
}

export default Filter;