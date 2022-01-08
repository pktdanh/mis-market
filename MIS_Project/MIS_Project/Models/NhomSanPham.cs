using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class NhomSanPham
    {
        public string MaNhomSP { get; set; }
        public string TenNhomSP { get; set; }


        public List<NhomSanPham> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<NhomSanPham> groupProducts = new List<NhomSanPham>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM NhomSanPham";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    groupProducts.Add(new NhomSanPham()
                    {
                        MaNhomSP = dr["MaSP"].ToString(),
                        TenNhomSP = dr["Account_CH"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return groupProducts;
        }
    }
}
