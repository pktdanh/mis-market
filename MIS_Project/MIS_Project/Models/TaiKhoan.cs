using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace MIS_Project.Models
{
    public class TaiKhoan
    {
        public string AccountID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }

      
        public List<TaiKhoan> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<TaiKhoan> Stores = new List<TaiKhoan>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM TaiKhoan";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    Stores.Add(new TaiKhoan()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        Username = dr["Username"].ToString(),
                        Password = dr["Password"].ToString(),
                        Role = dr["Role"].ToString(),
                        Token = dr["Token"].ToString()
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

        public TaiKhoan checkLogin(TaiKhoan logAccount)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<TaiKhoan> accounts = new List<TaiKhoan>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM TaiKhoan";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    accounts.Add(new TaiKhoan()
                    {
                        AccountID = dr["AccountID"].ToString(),
                        Username = dr["Username"].ToString(),
                        Password = dr["Password"].ToString(),
                        Role = dr["Role"].ToString(),
                        Token = dr["Token"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
            foreach(TaiKhoan account in accounts)
            {
                if (account.Username == logAccount.Username)
                {
                    if (account.Password == logAccount.Password)
                    {
                        return account;
                    }
                    else
                    {
                        logAccount.Password = "";
                        return logAccount;
                    }
                }
            }
            return null;
        }
    }
}
