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

GET ONE SHIPPER BODY:
{
  "accountID": "string"
}

------------------------------------------------------------

GET HISTORY SHIPPER BODY:
{
  "accountID": "string"
}

------------------------------------------------------------

GET INVOICE SHIPPER BODY:
{
  "account_S": "string"
}