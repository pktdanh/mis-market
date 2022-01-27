using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class HinhThucThanhToan
    {
        public string MaTT { get; set; }
        public string TenTT { get; set; }
        public string MoTaTT { get; set; }


        public List<HinhThucThanhToan> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HinhThucThanhToan> payments = new List<HinhThucThanhToan>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM HinhThucThanhToan";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    payments.Add(new HinhThucThanhToan()
                    {
                        MaTT = dr["MaTT"].ToString(),
                        TenTT = dr["TenTT"].ToString(),
                        MoTaTT = dr["MoTaTT"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return payments;
        }
    }
}
