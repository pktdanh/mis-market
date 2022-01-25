using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class KhachHang
    {
        public string AccountID { get; set; }
        public string HoTen { get; set; }
        public string CMND { get; set; }
        public string NgaySinh { get; set; }
        public string GioiTinh { get; set; }
        public string SDT { get; set; }
        public string Email { get; set; }
        public DiaChiKhachHang DiaChiHienTai { get; set; }
        public TaiKhoan taiKhoan { get; set; }
        
        public List<KhachHang> getAll()
        {
            string DiaChiChiTiet = "";
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<KhachHang> customers = new List<KhachHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM KhachHang";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    customers.Add(new KhachHang()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        HoTen = dr["HoTen"].ToString(),
                        CMND = dr["CMND"].ToString(),
                        NgaySinh = dr["NgaySinh"].ToString(),
                        GioiTinh = dr["GioiTinh"].ToString(),
                        SDT = dr["SDT"].ToString(),
                        Email = dr["Email"].ToString(),
                        DiaChiHienTai = (new DiaChiKhachHang()).getOne(dr["AccountID"].ToString())
                    }); ;
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return customers;
        }


        public KhachHang getOne(string CusID)
        {
            string DiaChiChiTiet = "";
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<KhachHang> customers = new List<KhachHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM KhachHang WHERE accountID = '" + CusID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    customers.Add(new KhachHang()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        HoTen = dr["HoTen"].ToString(),
                        CMND = dr["CMND"].ToString(),
                        NgaySinh = dr["NgaySinh"].ToString(),
                        GioiTinh = dr["GioiTinh"].ToString(),
                        SDT = dr["SDT"].ToString(),
                        Email = dr["Email"].ToString(),
                        DiaChiHienTai = (new DiaChiKhachHang()).getOne(dr["AccountID"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return customers[0];
        }
    }
}
