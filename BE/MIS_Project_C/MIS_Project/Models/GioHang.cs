using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class GioHang
    {
        public string MaSP { get; set; }
        public string AccountID { get; set; }
        public string SoLuong { get; set; }


        public List<GioHang> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<GioHang> carts = new List<GioHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM GioHang";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    carts.Add(new GioHang()
                    {
                        MaSP = dr["MaSP"].ToString(),
                        AccountID = dr["AccountID"].ToString(),
                        SoLuong = dr["SoLuong"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return carts;
        }
    }
}
