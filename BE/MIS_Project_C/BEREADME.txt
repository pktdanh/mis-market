------------------------------------------------------------------------------------------------------------------------
					SERVER C#

REGISTER SHIPPER BODY
{
  "hoTen": "Tran Van B",
  "cmnd": "123456789",
  "ngaySinh": "11-06-2000",
  "bienSo": "60H30101",
  "maBangLai": "123123123",
  "sdt": "0123432151",
  "email": "bcdef@gmail.com",
  "diaChi": "mot noi xa",
  "maPhuongXa": "hcmpn01",
  "taiKhoan": {
    "username": "sp12301",
    "password": "abcdef"
  }
}

------------------------------------------------------------

LOGIN BODY:
{
  "username": "sp12301",
  "password": "abcdef"
}

------------------------------------------------------------

POST ONE SHIPPER BODY:
{
  "accountID": "sp0201"
}

------------------------------------------------------------

POST HISTORY SHIPPER BODY:
{
  "accountID": "sp0201"
}

------------------------------------------------------------

POST INVOICE SHIPPER BODY:
{
  "account_S": "sp0201"
}

------------------------------------------------------------

POST INVOICE CUSTOMER:
{
  "account_KH": "kh001"
}

------------------------------------------------------------

POST INVOICE DETAIL:
{
  "maHD": "kh00101"
}

------------------------------------------------------------
POST INVOICE STORE HANDLING:
{
  "account_CH": "ch001"
}




POST BUY:
{
  "phiShip": "20000",
  "tongTien": "500000",
  "account_CH": "ch001",
  "account_KH": "kh001",
  "danhSachSanPham": [
    {
      "maSP": "sp117",
      "soLuong": "3"
    },
    {
      "maSP": "sp61",
      "soLuong": "2"
    },
    {
      "maSP": "sp12",
      "soLuong": "2"
    }
  ]
}


POST UPDATE DEFAULT ADDRESS
{
   "maDC": "string",
   "accountID": "string"
}


POST ADD NEW ADDRESS
{
   "accountID": "string",
   "diaChi": "string",
   "maPhuongXa": "string"
}


POST GET INVOICE NO SHIPPER NEAR:
{
  "maPhuongXa": "hcm0901"
}


POST RATING PRODUCT:
{
   "maSP": "string",
   "avgRating": "string"
}



POST CANCEL INVOICE:
{
   "maHD": "string"
}






----------------------------------------------------------------------------------------------------------------------------

				SERVER JAVA

GET ALL ACCOUNT:
http://localhost:8080/api/account/all

------------------------------------------------------------


GET ALL STORE: 
http://localhost:8080/api/store/all

------------------------------------------------------------

POST ONE STORE:
http://localhost:8080/api/store/one
{
  "accountID": "ch001"
}

POST ACCOUNT PAGING:
http://localhost:8080/api/account/all/paging
{
  "AccountPerPage": 8
}

POST DELETE STORE:
http://localhost:8080/api/store/delete
{
  "accountID": "ch008"
}

POST ADD PRODUCT:
http://localhost:8080/api/store/upproduct
{
  "tenSP": "Test",
  "anhSP": "",
  "moTaSP": "",
  "ngayDang": "2022-01-23",
  "giaSP": "10000",
  "soLuongTon": "10",
  "soSPDaBan": "0",
  "avgRating": "0",
  "soRating": "0",
  "loaiSP": "lsp001",
  "account_CH": "ch001" 
}



POST ADD STORE:
http://localhost:8080/api/account/register/store
{
    "tenCH": "?????i Nam BHX",
    "cmnd": "123456789",
    "ngayThamGia": "2022-01-24",
    "sdt": "0123456789",
    "email": "mail1123@gmail.com",
    "diaChi": "Ch??? n??y n??",
    "maPhuongXa": "hcm0201",
    "maGPKD": "ajsd3213213",
    "maCNATTP": "a5sd465a2sd",
    "taiKhoan": {
        "username": "ch123",
        "password": "nam"
    }
}


POST CHANGE STATUS:
http://localhost:8080/api/history/change
{
    "maHD": "kh00203",
    "thoiGian": "2022-01-24 21:00:00"
}	


POST REGISTER CUSTOMER:
http://localhost:8080/api/account/register/customer
{
    "hoTen": "???????ng Huy???n Trang",
    "cmnd": "01234567890",
    "ngaySinh": "1/4/2000 12:00:00 AM",
    "gioiTinh": "Nam",
    "sdt": "01234567890",
    "email": "thphat@gmail.com",
    "diaChi": {
      "diaChi": "T??y Thi??n",
      "maPhuongXa": "hcm0901"
    },
    "taiKhoan": {
      "username": "customer123",
      "password": "ngoc"
    }
}

LOGIN CUSTOMER
http://localhost:8080/api/account/login/customer
{
  "username": "kh001",
  "password": "2",
  "role": "kh"
}



LOGIN STORE
http://localhost:8080/api/account/login/store
{
  "username": "ch12345",
  "password": "1",
  "role": "ch"
}


POST SHIPPER TAKE ORDER:
http://localhost:8080/api/history/change
{
   "maHD": "String",
   "account_S": "String",
   "thoiGian": "2022-01-26 16:00:00"
}



POST EDIT CUSTOMER INFO:
http://localhost:8080/api/customer/edit
{
   "accountID": "kh015",
   "hoTen": "Tr???n Qu???c Th???nh",
   "sdt": "0845644566",
   "email": "tranquocthinh.t2.15cla@gmail.com"
}



POST STATISTIC DEMAND YEAR:
http://localhost:8080/api/statistic/demand/year
{
   "nam": "2021"
}



POST STATISTIC DEMAND MONTH IN YEAR:
http://localhost:8080/api/statistic/demand/month
{
   "nam": "2022",
   "thang": "3"
}



POST REVENUE STORE YEAR:
http://localhost:8080/api/statistic/revenue/store/year
{
   "account_CH": "ch001"
}


POST REVENUE STORE MONTH IN YEAR:
http://localhost:8080/api/statistic/revenue/store/month
{
   "account_CH": "ch001",
   "nam": "2022"
}


POST REVENUE STORE SEASON IN YEAR:
http://localhost:8080/api/statistic/revenue/store/season
{
   "account_CH": "ch001",
   "nam": "2021"
}


GET REVENUE APP YEAR:
http://localhost:8080/api/statistic/revenue/app/year



POST REVENUE APP SEASON:
http://localhost:8080/api/statistic/revenue/app/season
{
   "nam": "2021"
}


POST REVENUE APP MONTH:
http://localhost:8080/api/statistic/revenue/app/month
{
   "nam": "2021"
}



GET STATISTIC ACCOUNT:
http://localhost:8080/api/statistic/account



CANCEL INVOICE:
http://localhost:8080/api/history/cancel
{
  "maHD": "kh0116",
  "thoiGian": "2022-01-24 12:00:00"
}





