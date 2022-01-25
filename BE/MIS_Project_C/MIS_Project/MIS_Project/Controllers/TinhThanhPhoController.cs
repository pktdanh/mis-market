using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;

namespace MIS_Project.Controllers
{
    [Route("api/province")]
    public class TinhThanhPhoController : Controller
    {
        [HttpGet("all")]
        public List<TinhThanhPho> All()
        {
            TinhThanhPho province = new TinhThanhPho();
            List<TinhThanhPho> provinces = new List<TinhThanhPho>();
            provinces = province.getAll();
            return provinces;
        }
    }
}
