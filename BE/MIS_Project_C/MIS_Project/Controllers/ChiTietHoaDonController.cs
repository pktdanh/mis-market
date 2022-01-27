using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/detailinvoice")]
    [ApiController]
    public class ChiTietHoaDonController : Controller
    {
        [HttpGet("all")]
        public List<ChiTietHoaDon> All()
        {
            ChiTietHoaDon detail = new ChiTietHoaDon();
            List<ChiTietHoaDon> details = new List<ChiTietHoaDon>();
            details = detail.getAll();
            return details;
        }

        [HttpPost("many")]
        public List<ChiTietHoaDon> Many([FromBody]HoaDon data)
        {
            ChiTietHoaDon detail = new ChiTietHoaDon();
            List<ChiTietHoaDon> details = new List<ChiTietHoaDon>();
            details = detail.getMany(data.MaHD);
            return details;
        }
    }
}
