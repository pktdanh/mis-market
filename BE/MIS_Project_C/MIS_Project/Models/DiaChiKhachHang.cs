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
        public DiaChi DiaChiChiTiet { get; set; }


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
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        DiaChiChiTiet = new DiaChi(dr["MaPhuongXa"].ToString(), dr["DiaChi"].ToString())
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

        public List<DiaChiKhachHang> getMany(string CusID)
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
                com.CommandText = "SELECT * FROM DiaChiKhachHang WHERE accountID = '" + CusID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    addresses.Add(new DiaChiKhachHang()
                    {
                        MaDC = dr["MaDC"].ToString(),
                        AccountID = dr["AccountID"].ToString(),
                        DiaChi = dr["DiaChi"].ToString(),
                        IsDefault = dr["IsDefault"].ToString(),
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        DiaChiChiTiet = new DiaChi(dr["MaPhuongXa"].ToString(), dr["DiaChi"].ToString())
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

        public DiaChiKhachHang getOne(string CusID)
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
                com.CommandText = "SELECT * FROM DiaChiKhachHang WHERE isDefault = 1 and accountID = '" + CusID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    addresses.Add(new DiaChiKhachHang()
                    {
                        MaDC = dr["MaDC"].ToString(),
                        AccountID = dr["AccountID"].ToString(),
                        DiaChi = dr["DiaChi"].ToString(),
                        IsDefault = dr["IsDefault"].ToString(),
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        DiaChiChiTiet = new DiaChi(dr["MaPhuongXa"].ToString(), dr["DiaChi"].ToString())
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return addresses[0];
        }

        public DiaChiKhachHang updateDefault(DiaChiKhachHang diaChi)
        {
            SqlCommand com = new SqlCommand();
            SqlCommand com2 = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "UPDATE DiaChiKhachHang SET isDefault = 0 WHERE accountID = '"+ diaChi.AccountID +"'";
                com.ExecuteNonQuery();
                com2.Connection = con;
                com2.CommandText = "UPDATE DiaChiKhachHang SET isDefault = 1 WHERE maDC = '" + diaChi.MaDC + "'";
                com2.ExecuteNonQuery();
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return diaChi;
        }

        public DiaChiKhachHang AddNew(DiaChiKhachHang diaChi)
        {
            diaChi.MaDC = "dc" + ((new DiaChiKhachHang()).getAll().Count() + 1).ToString();
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "INSERT INTO DiaChiKhachHang VALUES('"+ diaChi.MaDC +"', '"+ diaChi.AccountID +"', N'"+ diaChi.DiaChi +"', 0, '"+ diaChi.MaPhuongXa +"')";
                com.ExecuteNonQuery();
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return diaChi;
        }
    }
}
