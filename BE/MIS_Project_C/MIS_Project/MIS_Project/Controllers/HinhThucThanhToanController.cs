using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;

namespace MIS_Project.Controllers
{
    [Route("api/payment")]
    [ApiController]
    public class HinhThucThanhToanController : Controller
    {
        [HttpGet("all")]
        public List<HinhThucThanhToan> All()
        {
            HinhThucThanhToan payment = new HinhThucThanhToan();
            List<HinhThucThanhToan> payments = new List<HinhThucThanhToan>();
            payments = payment.getAll();
            return payments;
        }
    }
}
