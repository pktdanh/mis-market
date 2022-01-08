using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace MIS_Project.Models
{
    public class Shipper
    {
        public string AccountID { get; set; }
        public string HoTen { get; set; }
        public string CMND { get; set; }
        public string NgaySinh { get; set; }
        public string BienSo { get; set; }
        public string MaBangLai { get; set; }
        public string SDT { get; set; }
        public string Email { get; set; }
        public string DiaChi { get; set; }
        public string MaPhuongXa { get; set; }


        public List<Shipper> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<Shipper> Stores = new List<Shipper>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM Shipper";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    Stores.Add(new Shipper()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        HoTen = dr["HoTen"].ToString(),
                        CMND = dr["CMND"].ToString(),
                        NgaySinh = dr["NgaySinh"].ToString(),
                        BienSo = dr["BienSo"].ToString(),
                        MaBangLai = dr["MaBangLai"].ToString(),
                        SDT = dr["SDT"].ToString(),
                        Email = dr["Email"].ToString(),
                        DiaChi = dr["DiaChi"].ToString(),
                        MaPhuongXa = dr["MaPhuongXa"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return Stores;
        }
    }
}
