using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class CuaHang
    {
        public string AccountID { get; set; }
        public string TenCH { get; set; }
        public string CMND { get; set; }
        public string NgayThamGia { get; set; }
        public string SDT { get; set; }
        public string Email { get; set; }
        public string DiaChi { get; set; }
        public string MaPhuongXa { get; set; }
        public string MaGPKD { get; set; }
        public string MaCNATTP { get; set; }


        public List<CuaHang> getAll()
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
                com.CommandText = "SELECT * FROM CuaHang";
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
            return stores;
        }
    }
}
