using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class SanPhamController : Controller
    {
        [HttpGet("all")]
        public List<SanPham> All()
        {
            SanPham product = new SanPham();
            List<SanPham> products = new List<SanPham>();
            products = product.getAll();
            return products;
        }

        [HttpGet("many/{SubID}")]
        public List<SanPham> Many(string SubID)
        {
            SanPham product = new SanPham();
            List<SanPham> products = new List<SanPham>();
            products = product.getMany(SubID);
            return products;
        }

        [HttpGet("one/{ProID}")]
        public List<SanPham> One(string ProID)
        {
            SanPham product = new SanPham();
            List<SanPham> products = new List<SanPham>();
            products = product.getOne(ProID);
            return products;
        }
    }
}
