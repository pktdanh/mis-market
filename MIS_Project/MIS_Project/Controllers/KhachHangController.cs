using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class KhachHangController : Controller
    {
        [HttpGet("all")]
        public List<KhachHang> All()
        {
            KhachHang customer = new KhachHang();
            List<KhachHang> customers = new List<KhachHang>();
            customers = customer.getAll();
            return customers;
        }

        [HttpPost("one")]
        public KhachHang One([FromBody]KhachHang data)
        {
            KhachHang customer = new KhachHang();
            customer = customer.getOne(data.AccountID);
            return customer;
        }
    }
}
