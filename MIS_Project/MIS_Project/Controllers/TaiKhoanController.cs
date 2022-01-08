using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;
using Newtonsoft.Json.Linq;

namespace MIS_Project.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class TaiKhoanController : Controller
    {
        [HttpGet("all")]
        public List<TaiKhoan> All()
        {
            TaiKhoan account = new TaiKhoan();
            List<TaiKhoan> accounts = new List<TaiKhoan>();
            accounts = account.getAll();
            return accounts;
        }

        [HttpPost("login")]
        public TaiKhoan Login([FromBody]TaiKhoan data)
        {
            TaiKhoan account = new TaiKhoan()
            {
                Username = data.Username,
                Password = data.Password
            };
            account = account.checkLogin(account);
            return account;
        }
    }
}
