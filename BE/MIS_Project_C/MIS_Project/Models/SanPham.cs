using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class SanPham
    {
        public string MaSP { get; set; }
        public string TenSP { get; set; }
        public string AnhSP { get; set; }
        public string MoTaSP { get; set; }
        public string NgayDang { get; set; }
        public string GiaSP { get; set; }
        public string SoLuongTon { get; set; }
        public string SoSPDaBan { get; set; }
        public string AvgRating { get; set; }
        public string SoRating { get; set; }
        public string LoaiSP { get; set; }
        public string Account_CH { get; set; }
        public string TenLoaiSP { get; set; }
        public string MaNhomSP { get; set; }
        public string TenNhomSP { get; set; }
        public string TenCH { get; set; }


        public List<SanPham> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<SanPham> products = new List<SanPham>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM SanPham SP, LoaiSanPham LSP, NhomSanPham NSP, CuaHang CH WHERE SP.loaiSP = LSP.maLoaiSP and LSP.maNhomSP = NSP.maNhomSP and CH.AccountID = SP.Account_CH";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    products.Add(new SanPham()
                    {
                        MaSP = dr["MaSP"].ToString(),
                        TenSP = dr["TenSP"].ToString(),
                        AnhSP = dr["AnhSP"].ToString(),
                        MoTaSP = dr["MoTaSP"].ToString(),
                        NgayDang = dr["NgayDang"].ToString(),
                        GiaSP = dr["GiaSP"].ToString(),
                        SoLuongTon = dr["SoLuongTon"].ToString(),
                        SoSPDaBan = dr["SoSPDaBan"].ToString(),
                        AvgRating = dr["AvgRating"].ToString(),
                        SoRating = dr["SoRating"].ToString(),
                        LoaiSP = dr["LoaiSP"].ToString(),
                        TenLoaiSP = dr["TenLoaiSP"].ToString(),
                        MaNhomSP = dr["MaNhomSP"].ToString(),
                        TenNhomSP = dr["TenNhomSP"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        TenCH = dr["TenCH"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return products;
        }


        public List<SanPham> getOne(string productID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<SanPham> products = new List<SanPham>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM SanPham SP, LoaiSanPham LSP, NhomSanPham NSP, CuaHang CH WHERE CH.AccountID = SP.Account_CH and SP.loaiSP = LSP.maLoaiSP and LSP.maNhomSP = NSP.maNhomSP and SP.maSP = '" + productID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    products.Add(new SanPham()
                    {
                        MaSP = dr["MaSP"].ToString(),
                        TenSP = dr["TenSP"].ToString(),
                        AnhSP = dr["AnhSP"].ToString(),
                        MoTaSP = dr["MoTaSP"].ToString(),
                        NgayDang = dr["NgayDang"].ToString(),
                        GiaSP = dr["GiaSP"].ToString(),
                        SoLuongTon = dr["SoLuongTon"].ToString(),
                        SoSPDaBan = dr["SoSPDaBan"].ToString(),
                        AvgRating = dr["AvgRating"].ToString(),
                        SoRating = dr["SoRating"].ToString(),
                        LoaiSP = dr["LoaiSP"].ToString(),
                        TenLoaiSP = dr["TenLoaiSP"].ToString(),
                        MaNhomSP = dr["MaNhomSP"].ToString(),
                        TenNhomSP = dr["TenNhomSP"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        TenCH = dr["TenCH"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return products;
        }

        public List<SanPham> getMany(string subID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<SanPham> products = new List<SanPham>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM SanPham SP, LoaiSanPham LSP, NhomSanPham NSP, CuaHang CH WHERE CH.AccountID = SP.Account_CH and SP.loaiSP = LSP.maLoaiSP and LSP.maNhomSP = NSP.maNhomSP and SP.loaiSP = '" + subID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    products.Add(new SanPham()
                    {
                        MaSP = dr["MaSP"].ToString(),
                        TenSP = dr["TenSP"].ToString(),
                        AnhSP = dr["AnhSP"].ToString(),
                        MoTaSP = dr["MoTaSP"].ToString(),
                        NgayDang = dr["NgayDang"].ToString(),
                        GiaSP = dr["GiaSP"].ToString(),
                        SoLuongTon = dr["SoLuongTon"].ToString(),
                        SoSPDaBan = dr["SoSPDaBan"].ToString(),
                        AvgRating = dr["AvgRating"].ToString(),
                        SoRating = dr["SoRating"].ToString(),
                        LoaiSP = dr["LoaiSP"].ToString(),
                        TenLoaiSP = dr["TenLoaiSP"].ToString(),
                        MaNhomSP = dr["MaNhomSP"].ToString(),
                        TenNhomSP = dr["TenNhomSP"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        TenCH = dr["TenCH"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return products;
        }

        public SanPham Rating(SanPham Product)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "UPDATE SanPham SET avgRating = ROUND(((avgRating * soRating) + " + Product.AvgRating + ")/(soRating + 1),2), soRating = soRating + 1 WHERE maSP = '" + Product.MaSP + "'";
                com.ExecuteNonQuery();
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return getOne(Product.MaSP)[0];
        }

    }
}
