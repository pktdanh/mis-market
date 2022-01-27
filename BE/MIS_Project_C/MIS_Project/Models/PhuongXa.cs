using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class PhuongXa
    {
        public string MaPhuongXa { get; set; }
        public string TenPhuongXa { get; set; }
        public string MaQuanHuyen { get; set; }


        public List<PhuongXa> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<PhuongXa> wards = new List<PhuongXa>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM PhuongXa";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    wards.Add(new PhuongXa()
                    {
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        TenPhuongXa = dr["TenPhuongXa"].ToString(),
                        MaQuanHuyen = dr["MaQuanHuyen"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return wards;
        }

        public List<PhuongXa> getMany(string districtID)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<PhuongXa> wards = new List<PhuongXa>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM PhuongXa WHERE maQuanHuyen = '" + districtID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    wards.Add(new PhuongXa()
                    {
                        MaPhuongXa = dr["MaPhuongXa"].ToString(),
                        TenPhuongXa = dr["TenPhuongXa"].ToString(),
                        MaQuanHuyen = dr["MaQuanHuyen"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return wards;
        }
    }
}
