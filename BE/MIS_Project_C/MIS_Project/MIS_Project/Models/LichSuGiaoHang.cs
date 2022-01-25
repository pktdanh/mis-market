using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class LichSuGiaoHang
    {
        public string MaHD { get; set; }
        public string ThoiGian { get; set; }
        public TrangThai Status { get; set; }
        public string GhiChu { get; set; }
        public HoaDon hoaDon { get; set; }


        public List<LichSuGiaoHang> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<LichSuGiaoHang> histories = new List<LichSuGiaoHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM LichSuGiaoHang";
                dr = com.ExecuteReader();
                while (dr.Read())
                { 
                    histories.Add(new LichSuGiaoHang()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        ThoiGian = dr["ThoiGian"].ToString(),
                        Status = new TrangThai(dr["StatusCode"].ToString()),
                        GhiChu = dr["GhiChu"].ToString(),
                        hoaDon = (new HoaDon()).getOne(dr["MaHD"].ToString())[0]
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return histories;
        }


        public List<LichSuGiaoHang> getManyShipper(string ShipperID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<LichSuGiaoHang> histories = new List<LichSuGiaoHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM LichSuGiaoHang L, HoaDon H WHERE L.maHD = H.maHD and H.account_S = '" + ShipperID + "' and statusCode = 's4'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    histories.Add(new LichSuGiaoHang()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        ThoiGian = dr["ThoiGian"].ToString(),
                        Status = new TrangThai(dr["StatusCode"].ToString()),
                        GhiChu = dr["GhiChu"].ToString(),
                        hoaDon = (new HoaDon()).getOne(dr["MaHD"].ToString())[0]
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return histories;
        }

        public LichSuGiaoHang getOne(string invoiceID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<LichSuGiaoHang> histories = new List<LichSuGiaoHang>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM LichSuGiaoHang WHERE thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang) AND maHD = '" + invoiceID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    histories.Add(new LichSuGiaoHang()
                    {
                        MaHD = dr["MaHD"].ToString(),
                        ThoiGian = dr["ThoiGian"].ToString(),
                        Status = new TrangThai(dr["StatusCode"].ToString()),
                        GhiChu = dr["GhiChu"].ToString(),
                        hoaDon = (new HoaDon()).getOne(dr["MaHD"].ToString())[0]
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return histories[0];
        }

    }
}
