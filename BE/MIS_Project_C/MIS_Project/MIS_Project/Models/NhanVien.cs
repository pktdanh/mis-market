using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace MIS_Project.Models
{
    public class NhanVien
    {
        public string AccountID { get; set; }
        public string HoTen { get; set; }
        public string CMND { get; set; }
        public string NgaySinh { get; set; }
        public string RoleNV { get; set; }
        public string Luong { get; set; }


        public List<NhanVien> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<NhanVien> employees = new List<NhanVien>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM NhanVien";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    employees.Add(new NhanVien()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        HoTen = dr["HoTen"].ToString(),
                        CMND = dr["CMND"].ToString(),
                        NgaySinh = dr["NgaySinh"].ToString(),
                        RoleNV = dr["RoleNV"].ToString(),
                        Luong = dr["Luong"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return employees;
        }
    }
}
