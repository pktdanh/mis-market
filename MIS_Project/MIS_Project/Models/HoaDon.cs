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
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT WHERE H.account_CH = C.accountID and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.hinhThucTT = HT.maTT";
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
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString())

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
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT WHERE HT.MaTT = H.HinhThucTT and H.account_CH = C.accountID and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and MaHD = '" + InvoiceID + "'";
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
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString())

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
                com.CommandText = "SELECT *, C.maPhuongXa as MaPhuongXaC, D.maPhuongXa as MaPhuongXaK, S.hoTen as HoTenS, K.hoTen as HoTenK, C.diaChi as DiaChiC, D.diaChi as DiaChiK FROM HoaDon H, CuaHang C, KhachHang K, Shipper S, DiaChiKhachHang D, HinhThucThanhToan HT WHERE H.account_CH = C.accountID and H.hinhThucTT = HT.maTT and H.account_KH = K.accountID and H.account_S = S.accountID and D.maDC = H.maDCKH and H.Account_S = '" + AccountShipper + "'";
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
                        DiaChiKhachHang = new DiaChi(dr["MaPhuongXaK"].ToString(), dr["DiaChiK"].ToString())
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
    }
}
