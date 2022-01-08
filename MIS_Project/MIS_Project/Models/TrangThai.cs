using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class TrangThai
    {
        public string StatusCode { get; set; }
        public string trangThai { get; set; }


        public List<TrangThai> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<TrangThai> status = new List<TrangThai>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM TrangThai";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    status.Add(new TrangThai()
                    {
                        StatusCode = dr["StatusCode"].ToString(),
                        trangThai = dr["trangThai"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return status;
        }
    }
}
