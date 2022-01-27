using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class HoaDon
    {
        public string MaHD { get; set; }
        public string NgayLap { get; set; }
        public string PhiShip { get; set; }
        public string TongTien { get; set; }
        public string MaDCKH { get; set; }
        public string Account_S { get; set; }
        public string Account_CH { get; set; }
        public string Account_KH { get; set; }
        public string HinhThucTT { get; set; }
        public string TenTT { get; set; }
        public string TenCH { get; set; }
        public string HoTenK { get; set; }
        public string HoTenS { get; set; }
        public DiaChi DiaChiKhachHang { get; set; }
        public DiaChi DiaChiCuaHang { get; set; }
        public string TrangThai { get; set; }
        public List<ChiTietHoaDon> DanhSachSanPham { get; set; }


        public int getCount()
        {
            int count = 0;
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM HoaDon";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    count++;
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return count;
        }
        public List<HoaDon> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.hinhThucTT = HT.maTT and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD)";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        HoTenS = dr["HoTenS"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.account_KH = K.accountID and D.maDC = H.maDCKH and H.hinhThucTT = HT.maTT and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD) and H.account_S = ''";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            return invoices;
        }


        public List<HoaDon> getNoShipper()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.account_KH = K.accountID and D.maDC = H.maDCKH and H.hinhThucTT = HT.maTT and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD) and H.account_S = ''";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }


        public List<HoaDon> getNoShipperNear(string maPhuongXa)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.account_KH = K.accountID and D.maDC = H.maDCKH and H.hinhThucTT = HT.maTT and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD) and H.account_S = '' and D.maPhuongXa = '"+ maPhuongXa +"'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }


        public List<HoaDon> getOne(string InvoiceID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE HT.MaTT = H.HinhThucTT and H.account_CH = C.accountID and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.MaHD = '" + InvoiceID + "' and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD)";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        HoTenS = dr["HoTenS"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString(),
                        DanhSachSanPham = (new ChiTietHoaDon()).getMany(dr["MaHD"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE HT.MaTT = H.HinhThucTT and H.account_CH = C.accountID and H.account_KH = K.accountID and D.maDC = H.maDCKH and H.MaHD = '"+ InvoiceID +"' and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD)";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString(),
                        DanhSachSanPham = (new ChiTietHoaDon()).getMany(dr["MaHD"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            return invoices;
        }


        public List<HoaDon> getManyShipper(string AccountShipper)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.hinhThucTT = HT.maTT and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.Account_S = '" + AccountShipper + "' and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD)";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        HoTenS = dr["HoTenS"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString(),
                        DanhSachSanPham = (new ChiTietHoaDon()).getMany(dr["MaHD"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }

        public List<HoaDon> getManyShipperHandling(string AccountShipper)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.hinhThucTT = HT.maTT and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.Account_S = '" + AccountShipper + "' and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD) and (L.statusCode = 's3' or L.statusCode = 's2')";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        HoTenS = dr["HoTenS"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString(),
                        DanhSachSanPham = (new ChiTietHoaDon()).getMany(dr["MaHD"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }


        public List<HoaDon> getManyCustomer(string AccountCustomer)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.hinhThucTT = HT.maTT and H.account_KH = K.accountID and (H.account_S = S.accountID) and D.maDC = H.maDCKH and H.Account_KH = '" + AccountCustomer + "' and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD)";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        HoTenS = dr["HoTenS"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.hinhThucTT = HT.maTT and H.account_KH = K.accountID and D.maDC = H.maDCKH and H.Account_KH = '"+ AccountCustomer + "' and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD) and H.account_S = ''";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }


        public List<HoaDon> getManyStore(string AccountStore)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.hinhThucTT = HT.maTT and L.maHD = H.maHD and T.statusCode = L.statusCode and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = L.maHD) and account_CH = '" + AccountStore + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        HoTenS = dr["HoTenS"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }

        public List<HoaDon> getManyStoreHandling(string AccountStore)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT, LichSuGiaoHang L, TrangThai T WHERE H.account_CH = C.accountID and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.hinhThucTT = HT.maTT and L.maHD = H.maHD and T.statusCode = L.statusCode and H.account_CH = '" + AccountStore + "' and L.statusCode = 's2' and L.thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang L2 WHERE L2.maHD = H.maHD)";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        HoTenK = dr["HoTenK"].ToString(),
                        HoTenS = dr["HoTenS"].ToString(),
                        DiaChiCuaHang = new DiaChi(dr["MaPhuongXaC"].ToString(), dr["DiaChiC"].ToString()),
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString()),
                        TrangThai = dr["TrangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }

        public HoaDon HandleBuy(HoaDon BuyInvoice)
        {
            HoaDon NewInvoice = new HoaDon();
            NewInvoice.MaHD = "hd" + BuyInvoice.Account_CH + ((new HoaDon()).getCount() + 1).ToString();
            NewInvoice.NgayLap = DateTime.Now.ToString("yyyy'-'MM'-'dd");
            NewInvoice.PhiShip = BuyInvoice.PhiShip;
            NewInvoice.TongTien = BuyInvoice.TongTien;
            NewInvoice.Account_CH = BuyInvoice.Account_CH;
            NewInvoice.Account_KH = BuyInvoice.Account_KH;
            NewInvoice.MaDCKH = (new DiaChiKhachHang()).getOne(NewInvoice.Account_KH).MaDC;
            NewInvoice.DanhSachSanPham = BuyInvoice.DanhSachSanPham;
            SqlCommand com = new SqlCommand();
            SqlCommand com2 = new SqlCommand();
            SqlCommand com3 = new SqlCommand();
            SqlCommand com4 = new SqlCommand();
            SqlCommand com5 = new SqlCommand();
            SqlCommand com6 = new SqlCommand();

            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            HoaDon invoice = new HoaDon();
            try
            {
                con.Open();
                com3.Connection = con;
                com5.Connection = con;
                com6.Connection = con;
                foreach (ChiTietHoaDon item in NewInvoice.DanhSachSanPham)
                {
                    com3.CommandText = "INSERT INTO ChiTietHoaDon VALUES('"+ NewInvoice.MaHD +"', '"+ item.MaSP +"', "+ item.SoLuong +")";
                    com3.ExecuteNonQuery();
                    com5.CommandText = "UPDATE SanPham SET soLuongTon = soLuongTon - " + item.SoLuong + " WHERE maSP = '" + item.MaSP + "'";
                    com5.ExecuteNonQuery();
                    com6.CommandText = "UPDATE SanPham SET soSPDaBan = soSPDaBan + " + item.SoLuong + " WHERE maSP = '" + item.MaSP + "'";
                    com6.ExecuteNonQuery();
                }
                com.Connection = con;
                com.CommandText = "INSERT INTO HoaDon VALUES('" + NewInvoice.MaHD + "','"+ NewInvoice.NgayLap +"', '"+ NewInvoice.PhiShip + "', '" + NewInvoice.TongTien + "', '"+ NewInvoice.MaDCKH +"', '"+ NewInvoice.Account_S + "', '" + NewInvoice.Account_CH + "', '" + NewInvoice.Account_KH + "', 'hb005')";
                com.ExecuteNonQuery();
                com2.Connection = con;
                com2.CommandText = "INSERT INTO LichSuGiaoHang(maHD, thoiGian, statusCode) VALUES('" + NewInvoice.MaHD + "', '"+ DateTime.Now.ToString("yyyy'-'MM'-'dd' 'HH':'mm':'ss") + "', 's1')";
                com2.ExecuteNonQuery();
                com4.Connection = con;
                com4.CommandText = "UPDATE Shipper SET status = 0 WHERE accountID = '"+ NewInvoice.Account_S +"'";
                com4.ExecuteNonQuery();
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return NewInvoice;
        }

        public HoaDon CancelInvoice(string maHD)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<ChiTietHoaDon> details = (new ChiTietHoaDon()).getMany(maHD);
            foreach(ChiTietHoaDon item in details)
            {
                try
                {
                    con.Open();
                    com.Connection = con;
                    com.CommandText = "UPDATE SanPham SET soLuongTon = soLuongTon + " + item.SoLuong + ", soSPDaBan = soSPDaBan - " + item.SoLuong + " WHERE maSP = '" + item.MaSP + "'";
                    com.ExecuteNonQuery();
                    con.Close();
                }
                catch (Exception exc)
                {
                    throw exc;
                }
            }
            return getOne(maHD)[0];
        }



    }
}
