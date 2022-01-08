using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/lichsugiaohang")]
    [ApiController]
    public class LichSuGiaoHangController : Controller
    {
        [HttpGet("all")]
        public List<LichSuGiaoHang> All()
        {
            LichSuGiaoHang history = new LichSuGiaoHang();
            List<LichSuGiaoHang> histories = new List<LichSuGiaoHang>();
            histories = history.getAll();
            return histories;
        }
    }
}
