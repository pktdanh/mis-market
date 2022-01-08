using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;

namespace MIS_Project.Controllers
{
    [Route("api/diachikhachhang")]
    [ApiController]
    public class DiaChiKhachHangController : Controller
    {
        [HttpGet("all")]
        public List<DiaChiKhachHang> All()
        {
            DiaChiKhachHang address = new DiaChiKhachHang();
            List<DiaChiKhachHang> addresses = new List<DiaChiKhachHang>();
            addresses = address.getAll();
            return addresses;
        }
    }
}
