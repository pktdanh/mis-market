import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

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
`;
const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 30px;
    overflow: hidden;
    position: relative;
    transition: 0.4s ease-out;
    cursor: pointer;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    &:hover {
        #addToCart {
            background-color: red;
        }
    }
`;
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

const ProductWrapper = styled.div`
    // width: 1200px;
    height: auto;
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    border-bottom: 2px solid transparent;
    &:hover {
        /* border: 2px solid rgb(99,113,198); */
    }
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #000;
    }
`;

const WrapItem = styled.div`
    display: flex;
    flex-direction: column;
    alignitems: center;
    border: 2px solid #efefef;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: 0.2s all linear;
    -webkit-box-shadow: -7px 8px 13px 5px rgba(0, 0, 0, 0.35);
    box-shadow: -7px 8px 13px 5px rgba(0, 0, 0, 0.35);
    &:hover {
        opacity: 0.9;
        color: blue;
        transform: translateY(-10px);
    }
`;

const Highlight = styled.span`
    font-weight: 600;
    padding-left: 8px;
`;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


const RelatedProduct = (props) => {
    const productKey = props.productKey
    // eslint-disable-next-line no-useless-constructor
    const [_products, setProducts] = useState([]);
    let API_URL;

    useEffect(() => {
        // props.actFetchProductsRequest();
        let method = "GET";
        API_URL = `https://localhost:44352/api/product/many/${props.query}`;

        let fetchAPI = axios({
            method,
            url: API_URL,
            data: null,
        })
            .catch((err) => {
                // console.log(err);
            })
            .then((res) => {
                let check = false
                for (const item of res.data){
                    if (item.maSP === productKey) check = true
                }
                if (check){
                    setProducts(shuffle(res.data.filter(product => product.maSP != productKey)))
                }
                else {
                    setProducts(shuffle(res.data))
                }
            });
        
        
    }, [productKey]);

    

    if (_products.length > 0) {
        return (
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "80%",margin:"-40px 0 40px 0"}}>
                <ProductWrapper>
                    <Container>
                        {_products.map((item, index) => {
                            if (index < 4) {
                                return (
                                    <WrapItem key={index}>
                                        <StyledLink
                                            to={"/product/" + item.maSP}
                                        >
                                            <ProductItem>
                                                <ProductImage
                                                    src={item.anhSP}
                                                    alt="TEE"
                                                />
                                                <ProductTitle>
                                                    {item.tenSP}
                                                </ProductTitle>
                                                <ProductPrice>
                                                    Giá:{" "}
                                                    <Highlight>
                                                        {item.giaSP} VNĐ
                                                    </Highlight>
                                                </ProductPrice>
                                                <ProductPrice>
                                                    Đã bán:{" "}
                                                    <Highlight>
                                                        {item.soSPDaBan}
                                                    </Highlight>
                                                </ProductPrice>
                                                <ProductPrice>
                                                    Rating:{" "}
                                                    <Highlight>
                                                        {item.avgRating}
                                                    </Highlight>
                                                    <StarIcon
                                                        style={{
                                                            fontSize: "18px",
                                                            transform:
                                                                "translateY(-1px)",
                                                            color: "#dd9d0d",
                                                            marginLeft: "2px",
                                                        }}
                                                    ></StarIcon>
                                                </ProductPrice>
                                            </ProductItem>
                                        </StyledLink>

                                        <StyledLink
                                            style={{ marginLeft: "30px" }}
                                            to={"/store/" + item.iD_Store}
                                        >
                                            <p>
                                                Cửa hàng:{" "}
                                                <Highlight>
                                                    {item.tenCH}
                                                </Highlight>
                                            </p>
                                        </StyledLink>
                                    </WrapItem>
                                );
                            }
                        })}
                    </Container>
                </ProductWrapper>
            </div>
        );
    }

    return (
        <div
            className="row"
            style={{ marginTop: "500px", marginBottom: "500px" }}
        >
            <h2>Loading...!</h2>
        </div>
    );
};
export default RelatedProduct;
