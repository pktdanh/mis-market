using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class DiaChi
    {
        public string MaPhuongXa { get; set; }
        public string DiaChiChiTiet { get; set; }
        public DiaChi()
        {
            MaPhuongXa = "";
            DiaChiChiTiet = "";
        }
        
        public DiaChi(string MaPhuongXa, string DiaChiThem)
        {
            string DiaChiChiTiet = "";
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM PhuongXa P, QuanHuyen Q, TinhThanhPho T WHERE P.maQuanHuyen = Q.maQuanHuyen and Q.maTinhTP = T.maTinhTP";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    if (dr["MaPhuongXa"].ToString() == MaPhuongXa)
                    {
                        DiaChiChiTiet = dr["TenPhuongXa"].ToString() + ", " + dr["TenQuanHuyen"].ToString() + ", " + dr["TenTinhTP"].ToString();
                    }
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            this.MaPhuongXa = MaPhuongXa;
            this.DiaChiChiTiet = DiaChiThem + ", " + DiaChiChiTiet;
        }
    }
}
