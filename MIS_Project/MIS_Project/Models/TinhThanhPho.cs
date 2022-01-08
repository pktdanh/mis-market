using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace MIS_Project.Models
{
    public class TinhThanhPho
    {
        public string MaTinhTP { get; set; }
        public string TenTinhTP { get; set; }

        public List<TinhThanhPho> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<TinhThanhPho> provinces = new List<TinhThanhPho>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM TinhThanhPho";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    provinces.Add(new TinhThanhPho()
                    {
                        MaTinhTP = dr["MaTinhTP"].ToString(),
                        TenTinhTP = dr["TenTinhTP"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return provinces;
        }
    }
}
