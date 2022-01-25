using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/district")]
    [ApiController]
    public class QuanHuyenController : Controller
    {
        [HttpGet("all")]
        public List<QuanHuyen> All()
        {
            QuanHuyen district = new QuanHuyen();
            List<QuanHuyen> districts = new List<QuanHuyen>();
            districts = district.getAll();
            return districts;
        }
    }
}
