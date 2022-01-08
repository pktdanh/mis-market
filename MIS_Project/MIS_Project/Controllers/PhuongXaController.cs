using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/ward")]
    [ApiController]
    public class PhuongXaController : Controller
    {
        [HttpGet("all")]
        public List<PhuongXa> All()
        {
            PhuongXa ward = new PhuongXa();
            List<PhuongXa> wards = new List<PhuongXa>();
            wards = ward.getAll();
            return wards;
        }
    }
}
