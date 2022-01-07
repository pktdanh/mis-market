import React, { useEffect, useState } from 'react'
import { actFetchProductsRequest, AddCart } from './actions'
import { connect } from 'react-redux';
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import axios from 'axios';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

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

const Filter = (props) => {
    const [showFilter, setShowFilter] = useState(false);
    return (
        <React.Fragment>
            <ProductFilterAndSearch>
                <ProductFilterButton onClick={() => {
                let option = document.getElementById("option-filter");
                if (showFilter === false) {
                    option.style.maxHeight = "0";
                    // option.style.transitionTimingFunction = "cubic-bezier(0.46, 0.14, 0.93, 0.76)"
                } else {
                    option.style.maxHeight = "1000px"
                    // option.style.transitionTimingFunction ="cubic-bezier(0.18, 0.28, 0, 0.95)"
                }
                return setShowFilter(!showFilter)
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

        </React.Fragment>
        
    )
}

export default Filter;