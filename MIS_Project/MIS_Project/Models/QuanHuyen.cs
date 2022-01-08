using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class QuanHuyen
    {
        public string MaQuanHuyen { get; set; }
        public string TenQuanHuyen { get; set; }
        public string MaTinhTP { get; set; }


        public List<QuanHuyen> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<QuanHuyen> districts = new List<QuanHuyen>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM QuanHuyen";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    districts.Add(new QuanHuyen()
                    {
                        MaQuanHuyen = dr["MaQuanHuyen"].ToString(),
                        TenQuanHuyen = dr["TenQuanHuyen"].ToString(),
                        MaTinhTP = dr["MaTinhTP"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return districts;
        }
    }
}
