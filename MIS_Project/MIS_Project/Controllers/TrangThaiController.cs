using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/status")]
    public class TrangThaiController : Controller
    {
        [HttpGet("all")]
        public List<TrangThai> All()
        {
            TrangThai status = new TrangThai();
            List<TrangThai> statuss = new List<TrangThai>();
            statuss = status.getAll();
            return statuss;
        }
    }
}
