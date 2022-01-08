using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/giohang")]
    [ApiController]
    public class GioHangController : Controller
    {
        [HttpGet("all")]
        public List<GioHang> All()
        {
            GioHang cart = new GioHang();
            List<GioHang> carts = new List<GioHang>();
            carts = cart.getAll();
            return carts;
        }
    }
}
