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
        public string Status { get; set; }
        public string DiaChi { get; set; }
        public string MaPhuongXa { get; set; }
        public DiaChi DiaChiChiTiet { get; set; }
        public TaiKhoan TaiKhoan { get; set; }


        public List<Shipper> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<Shipper> Shippers = new List<Shipper>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM Shipper";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    Shippers.Add(new Shipper()
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
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        DiaChiChiTiet = new DiaChi(dr["MaPhuongXa"].ToString(), dr["DiaChi"].ToString()),
                        TaiKhoan = new TaiKhoan(dr["AccountID"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return Shippers;
        }

        public List<Shipper> getOne(string accountID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<Shipper> Shippers = new List<Shipper>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM Shipper WHERE AccountID = '" + accountID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    Shippers.Add(new Shipper()
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
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        DiaChiChiTiet = new DiaChi(dr["MaPhuongXa"].ToString(), dr["DiaChi"].ToString()),
                        TaiKhoan = new TaiKhoan(dr["AccountID"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return Shippers;
        }

        public List<Shipper> getShipperNear(string wardID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<Shipper> Shippers = new List<Shipper>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM Shipper WHERE maPhuongXa = '" + wardID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    Shippers.Add(new Shipper()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        HoTen = dr["HoTen"].ToString(),
                        CMND = dr["CMND"].ToString(),
                        NgaySinh = dr["NgaySinh"].ToString(),
                        BienSo = dr["BienSo"].ToString(),
                        MaBangLai = dr["MaBangLai"].ToString(),
                        SDT = dr["SDT"].ToString(),
                        Email = dr["Email"].ToString(),
                        Status = dr["Status"].ToString(),
                        DiaChi = dr["DiaChi"].ToString(),
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        DiaChiChiTiet = new DiaChi(dr["MaPhuongXa"].ToString(), dr["DiaChi"].ToString()),
                        TaiKhoan = new TaiKhoan(dr["AccountID"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return Shippers;
        }
    }
}
