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

        public TaiKhoan()
        {
            AccountID = "";
            Username = "";
            Password = "";
            Role = "";
            Token = "";
        }

        public TaiKhoan(string accountID)
        {

            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM TaiKhoan WHERE accountID = '" + accountID + "'";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    this.AccountID = dr["AccountID"].ToString();
                    this.Username = dr["Username"].ToString();
                    this.Password = dr["Password"].ToString();
                    this.Role = dr["Role"].ToString();
                    this.Token = dr["Token"].ToString();
                }
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }
        }

        public List<TaiKhoan> getAll()
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<TaiKhoan> Accounts = new List<TaiKhoan>();
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM TaiKhoan";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    Accounts.Add(new TaiKhoan()
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
            return Accounts;
        }

        public TaiKhoan checkLogin(TaiKhoan logAccount)
        {
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            List<TaiKhoan> accounts = new List<TaiKhoan>();
            TaiKhoan Account = new TaiKhoan();
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
                    if (account.Password == "1" && logAccount.Password == "1")
                    {
                        Account = account;
                    }
                    else if (account.Password != "1")
                    {
                        string passWordHashed = (new Password(logAccount.Password)).passwordHashed;
                        if (passWordHashed == account.Password)
                        {
                            Account = account;
                        }
                        else
                        {
                            logAccount.Password = "";
                            return logAccount;
                        }
                    }
                    else
                    {
                        logAccount.Password = "";
                        return logAccount;
                    }
                }
            }

            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "UPDATE Shipper SET status = 1 WHERE accountID = '"+ Account.AccountID +"'";
                com.ExecuteNonQuery();
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            return Account;
        }

        public TaiKhoan registerShipper(Shipper regAccount)
        {

            regAccount.AccountID = "sp" + ((new Shipper()).getAll().Count() + 1).ToString();
            regAccount.TaiKhoan.Password = (new Password(regAccount.TaiKhoan.Password)).passwordHashed;
            SqlCommand com = new SqlCommand();
            SqlDataReader dr;
            SqlConnection con = new SqlConnection();
            con.ConnectionString = MIS_Project.Properties.Resources.ConnectionString;
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT * FROM TaiKhoan";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    if (regAccount.TaiKhoan.Username == dr["username"].ToString())
                    {
                        return null;
                    }
                }
                con.Close();

            }
            catch (Exception exc)
            {
                throw exc;
            }

            //Tạo dòng mới trong bảng Account
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "INSERT INTO TaiKhoan(accountID, username, password, role) VALUES ('" + regAccount.AccountID + "','" + regAccount.TaiKhoan.Username + "','" + regAccount.TaiKhoan.Password + "','sp')";
                dr = com.ExecuteReader();
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            //Tạo dòng mới trong bảng Shipper
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "INSERT INTO SHIPPER(accountID,hoTen,CMND,ngaySinh,bienSo,maBangLai,SDT,email,diaChi,maPhuongXa,status) VALUES('" + regAccount.AccountID + "','" + regAccount.HoTen + "','" + regAccount.CMND + "','" + regAccount.NgaySinh + "','" + regAccount.BienSo + "','" + regAccount.MaBangLai + "','" + regAccount.SDT + "','" + regAccount.Email + "','" + regAccount.DiaChi + "', '" + regAccount.MaPhuongXa + "', 0)";
                dr = com.ExecuteReader();
                con.Close();
            }
            catch (Exception exc)
            {
                throw exc;
            }

            TaiKhoan newShipper = new TaiKhoan(regAccount.AccountID);
            return newShipper;

        }
    }
}
