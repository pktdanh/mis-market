using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/cuahang")]
    [ApiController]
    public class CuaHangController : Controller
    {
        [HttpGet("all")]
        public List<CuaHang> All()
        {
            CuaHang store = new CuaHang();
            List<CuaHang> stores = new List<CuaHang>();
            stores = store.getAll();
            return stores;
        }
    }
}
