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
        public DiaChiKhachHang DiaChi { get; set; }
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
                        DiaChi = (new DiaChiKhachHang()).getOne(dr["AccountID"].ToString())
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
                        DiaChi = (new DiaChiKhachHang()).getOne(dr["AccountID"].ToString())
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

        public CuaHang getStoreNear(String CusID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<CuaHang> stores = new List<CuaHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM CuaHang C, KhachHang K, PhuongXa P, PhuongXa P2, DiaChiKhachHang D WHERE C.maPhuongXa = P.maPhuongXa and D.accountID = K.accountID and D.maPhuongXa = P2.maPhuongXa and P.maQuanHuyen = P2.maQuanHuyen and K.accountID = '"+ CusID +"'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    stores.Add(new CuaHang()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        TenCH = dr["TenCH"].ToString(),
                        CMND = dr["CMND"].ToString(),
                        NgayThamGia = dr["NgayThamGia"].ToString(),
                        SDT = dr["SDT"].ToString(),
                        Email = dr["Email"].ToString(),
                        DiaChi = dr["DiaChi"].ToString(),
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        MaGPKD = dr["MaGPKD"].ToString(),
                        MaCNATTP = dr["MaCNATTP"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return stores[0];
        }
    }
}
