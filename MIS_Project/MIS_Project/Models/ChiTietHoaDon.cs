using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class ChiTietHoaDon
    {
        public string MaSP { get; set; }
        public string MaHD { get; set; }
        public string SoLuong { get; set; }


        public List<ChiTietHoaDon> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<ChiTietHoaDon> details = new List<ChiTietHoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM ChiTietHoaDon";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    details.Add(new ChiTietHoaDon()
                    {
                        MaSP = dr["MaSP"].ToString(),
                        MaHD = dr["MaHD"].ToString(),
                        SoLuong = dr["SoLuong"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return details;
        }
    }
}
