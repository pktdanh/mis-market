import React, { useEffect, useState, useLayoutEffect } from "react";
import { actFetchProductsRequest, AddCart } from "./actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import RemoveIcon from '@mui/icons-material/Remove';
import RelatedProduct from "./RelatedProduct";
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Product = styled.div`
    display: flex;
    width: 90%;
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
    width: 500px;
`;

const ImageSub = styled.div`
    display: flex;
    margin-top: 20px;
`;

const ImageSubItemDiv = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 20px;
`;

const ImageSubItem = styled.img`
    width: 100%;
    max-height: 100%;
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
    line-height: 1.2;
`;

const ProductPrice = styled.p`
    font-size: 26px;
    font-weight: 400;
`;

const ProductDescription = styled.span`
    margin-bottom: 20px;
`;

const ProductWrapSpan = styled.div`
    margin-bottom: 20px;
`;

const ProductSpan = styled.span`
    margin-bottom: 20px;
    font-size: 26px;
    margin-right: 38px;
`;

const Highlight = styled.span`
    font-weight: 700;
`;

const ProductColor = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const ProductColorTitle = styled.span`
    text-transform: uppercase;
    font-weight: 600;
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
    background-color: ${(props) => props.color};
    cursor: pointer;
`;

ProductColorItem.defaultProps = {
    color: "",
};

const ProductSize = styled.div`
    display: flex;
    flex-direction: column;
`;
const ProductSizeTitle = styled.label`
    text-transform: uppercase;
    font-weight: 600; ;
`;

const ProductQuantity = styled.div`
    display: flex;
    flex-direction: column;
`;
const ProductQuantityTitle = styled.label`
    text-transform: uppercase;
    font-weight: 600; 
`;
const ProductChooseQuantity = styled.div`
    display: flex;
`;
const UpQuantity = styled.div`
    display: inline-block;
    border: 1px solid #ced4da;
    border-radius: 5px;
    cursor: pointer;
    padding: 0 4px;
    background-color: #ffffff;
    transition: background-color 0.2s ease-in-out;
    & > i {
        padding: 10px;
    }
    &:hover {
        background-color: salmon;
    }
`;
const DownQuantity = styled.div`
    display: inline-block;
    border: 1px solid #ced4da;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ffffff;
    padding: 0 4px;
    transition: background-color 0.2s ease-in-out;
    & > i {
        padding: 10px;
    }
    &:hover {
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
    background-color: #1f1f1f;
    color: #ffffff;
    font-size: 20px;
    border-radius: 5px;
    padding: 20px;
    width: auto;
    cursor: pointer;
    outline: none;
    margin-top: 30px;
    transition: all 0.2s linear;
    border: solid 1px #000;
    &:hover {
        background-color: #e7a39b;
        color: #000;
    }
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
    justify-items: center;
`;
const RelatedProductWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 30px;
    overflow: hidden;
    position: relative;
    transition: 0.4s ease-out;
    cursor: pointer;
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
    // useEffect(() => {
    //     let header = document.getElementById('header')
    //     let center = document.getElementById('center')
    //     let brandNameRight = document.getElementById('brandNameRight')
    //     let shoppingIcon = document.getElementById('shopping-icon')
    //     let menuItem = document.querySelectorAll('.menu-item')
    //     const handleScroll = () =>{
    //       const y = window.scrollY;
    //       if (y > 100) {
    
    //         header.classList.add('changeHeaderColor');
    //         center.classList.add('changeColor');
    //         brandNameRight.classList.add('changeColorToBlack');
    //         shoppingIcon.classList.add('changeColorToBlack');
    //         menuItem.forEach(function(item) {
    //           item.classList.add('changeColorToBlack')
    //         })
    //       }
    //       else {
    //         header.classList.remove('changeHeaderColor');
    //         center.classList.remove('changeColor');
    //         brandNameRight.classList.remove('changeColorToBlack');
    //         shoppingIcon.classList.remove('changeColorToBlack');
    //         menuItem.forEach(function(item) {
    //           item.classList.remove('changeColorToBlack')
    //         })
    
    //       }
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll',handleScroll)
          
    //     }
    //   }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("header").classList.add("changeHeaderColor");
        document.getElementById("center").classList.add("changeColor");
        document.getElementById("brandNameRight").classList.add("changeColorToBlack");
        document.getElementById("shopping-icon").classList.add("changeColorToBlack");
        let menuItem = document.querySelectorAll('.menu-item')
        menuItem.forEach(function(item) {
          item.classList.add('changeColorToBlack')
        })

    }, []);

    const location = useLocation();
    let productID = location.pathname.split("/").pop();
    const [product, setProduct] = useState({});
    const [listImage, setlistImage] = useState([]);
    const [listColor, setlistColor] = useState([]);
    const [listSize, setlistSize] = useState([]);
    const [size, setsize] = useState("");
    const [quantity, setquantity] = useState(1);

    useEffect(() => {
        let method = "GET";
        let API_URL = `https://localhost:44352/api/product/one/${productID}`;
        let d = axios({
            method,
            url: API_URL,
            data: null,
        })
            .catch((err) => {
                console.log(err);
            })
            .then((res) => {
                setProduct(res.data[0]);
            });
        window.scrollTo(0, 0);
    }, [location]);

    const [allProduct, setAllProduct] = useState([]);

    return (
        <Container>
            <Product>
                <ProductImage>
                    <ImageMain src={product.anhSP}></ImageMain>
                </ProductImage>
                <ProductInfo>
                    <ProductTitle>{product.tenSP}</ProductTitle>
                    <ProductPrice><Highlight>{product.giaSP}</Highlight> VNĐ</ProductPrice>
                    <ProductWrapSpan>
                        <ProductSpan>
                            <Highlight>{product.avgRating}</Highlight>{" "}
                            <StarIcon
                                style={{
                                    fontSize: "30px",
                                    transform: "translateY(-3.5px)",
                                    color: "#dd9d0d",
                                    marginLeft: "-4px",
                                }}
                            ></StarIcon>
                             ({product.soRating})
                        </ProductSpan>
                        <ProductSpan>
                            Đã bán: <Highlight>{product.soSPDaBan}</Highlight>
                        </ProductSpan>
                        <ProductSpan>
                            Còn lại: <Highlight>{product.soLuongTon}</Highlight>
                        </ProductSpan>
                    </ProductWrapSpan>
                    <ProductDescription>{product.moTaSP}</ProductDescription>
                    <ProductQuantity>
                        <ProductQuantityTitle>Số lượng:</ProductQuantityTitle>
                        <ProductChooseQuantity>
                            <DownQuantity
                                onClick={() => {
                                    quantity == 1
                                        ? setquantity(1)
                                        : setquantity(quantity - 1);
                                }}
                            >
                                <RemoveIcon style={{height:"100%"}}></RemoveIcon>
                            </DownQuantity>
                            <Quantity>{quantity}</Quantity>
                            <UpQuantity
                                onClick={() => {
                                    if (quantity < product.soLuongTon)
                                      setquantity(quantity + 1);
                                }}
                            >
                                <AddIcon style={{height:"100%"}}></AddIcon>
                            </UpQuantity>
                        </ProductChooseQuantity>
                    </ProductQuantity>
                    <AddToCart onClick={() => {console.log("product ne:",product);product['soLuong'] = quantity; return props.AddCart(product)}}>
                        THÊM VÀO GIỎ HÀNG
                    </AddToCart>
                </ProductInfo>
            </Product>
            <RelatedProductTitle>Sản phẩm liên quan</RelatedProductTitle>
            <RelatedProduct key={product.loaiSP} query={product.loaiSP} productKey={product.maSP} />
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        _products: state._todoProduct,
    };
};
function mapDispatchToProps(dispatch) {
    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
        AddCart: (item) => dispatch(AddCart(item)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemProduct);
