using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;

namespace MIS_Project.Controllers
{
    [Route("api/sanpham")]
    [ApiController]
    public class NhomSanPhamController : Controller
    {

        [HttpGet("all")]
        public List<NhomSanPham> All()
        {
            NhomSanPham groupProduct = new NhomSanPham();
            List<NhomSanPham> groupProducts = new List<NhomSanPham>();
            groupProducts = groupProduct.getAll();
            return groupProducts;
        }
    }
}
