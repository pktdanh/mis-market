------------------------------------------------------------------------------------------------------------------------
					SERVER C#

REGISTER BODY
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
  "account_S": "kh001"
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









----------------------------------------------------------------------------------------------------------------------------

				SERVER JAVA



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
  "maSP": "sp121",
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

