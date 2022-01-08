using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class DiaChiKhachHang
    {
        public string MaDC { get; set; }
        public string AccountID { get; set; }
        public string DiaChi { get; set; }
        public string IsDefault { get; set; }
        public string MaPhuongXa { get; set; }


        public List<DiaChiKhachHang> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<DiaChiKhachHang> addresses = new List<DiaChiKhachHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM DiaChiKhachHang";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    addresses.Add(new DiaChiKhachHang()
                    {
                        MaDC = dr["MaDC"].ToString(),
                        AccountID = dr["AccountID"].ToString(),
                        DiaChi = dr["DiaChi"].ToString(),
                        IsDefault = dr["IsDefault"].ToString(),
                        MaPhuongXa = dr["MaPhuongXa"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return addresses;
        }
    }
}
