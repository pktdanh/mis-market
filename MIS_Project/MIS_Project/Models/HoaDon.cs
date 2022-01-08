using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class HoaDon
    {
        public string MaHD { get; set; }
        public string NgayLap { get; set; }
        public string PhiShip { get; set; }
        public string TongTien { get; set; }
        public string MaDCKH { get; set; }
        public string Account_S { get; set; }
        public string Account_CH { get; set; }
        public string Account_KH { get; set; }
        public string HinhThucTT { get; set; }


        public List<HoaDon> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM HoaDon";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }


        public List<HoaDon> getManyShipper(string AccountShipper)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<HoaDon> invoices = new List<HoaDon>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM HoaDon WHERE Account_S = '" + AccountShipper + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    invoices.Add(new HoaDon()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        NgayLap = dr["NgayLap"].ToString(),
                        PhiShip = dr["PhiShip"].ToString(),
                        TongTien = dr["TongTien"].ToString(),
                        MaDCKH = dr["MaDCKH"].ToString(),
                        Account_S = dr["Account_S"].ToString(),
                        Account_CH = dr["Account_CH"].ToString(),
                        Account_KH = dr["Account_KH"].ToString(),
                        HinhThucTT = dr["HinhThucTT"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return invoices;
        }
    }
}
