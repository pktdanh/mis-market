using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class LichSuGiaoHang
    {
        public string MaHD { get; set; }
        public string ThoiGian { get; set; }
        public string StatusCode { get; set; }
        public string GhiChu { get; set; }


        public List<LichSuGiaoHang> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<LichSuGiaoHang> histories = new List<LichSuGiaoHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM LichSuGiaoHang";
                dr = com.ExecuteReader();
                while (dr.Read())
                { 
                    histories.Add(new LichSuGiaoHang()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        ThoiGian = dr["ThoiGian"].ToString(),
                        StatusCode = dr["StatusCode"].ToString(),
                        GhiChu = dr["GhiChu"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return histories;
        }
    }
}
