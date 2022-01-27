using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class LoaiSanPham
    {
        public string MaLoaiSP { get; set; }
        public string TenLoaiSP { get; set; }
        public string MaNhomSP { get; set; }
        public string TenNhomSP { get; set; }


        public List<LoaiSanPham> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<LoaiSanPham> typeProducts = new List<LoaiSanPham>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM LoaiSanPham LSP, NhomSanPham NSP WHERE LSP.MaNhomSP = NSP.MaNhomSP";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    typeProducts.Add(new LoaiSanPham()
                    {
                        MaLoaiSP = dr["MaLoaiSP"].ToString(),
                        TenLoaiSP = dr["TenLoaiSP"].ToString(),
                        MaNhomSP = dr["MaNhomSP"].ToString(),
                        TenNhomSP = dr["TenNhomSP"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return typeProducts;
        }

        public List<LoaiSanPham> getMany(string CateID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<LoaiSanPham> typeProducts = new List<LoaiSanPham>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM LoaiSanPham LSP, NhomSanPham NSP WHERE LSP.maNhomSP = NSP.maNhomSP and NSP.maNhomSP = '" + CateID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    typeProducts.Add(new LoaiSanPham()
                    {
                        MaLoaiSP = dr["MaLoaiSP"].ToString(),
                        TenLoaiSP = dr["TenLoaiSP"].ToString(),
                        MaNhomSP = dr["MaNhomSP"].ToString(),
                        TenNhomSP = dr["TenNhomSP"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return typeProducts;
        }
    }
}
