using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/subcategory")]
    [ApiController]
    public class LoaiSanPhamController : Controller
    {
        [HttpGet("all")]
        public List<LoaiSanPham> All()
        {
            LoaiSanPham typeProduct = new LoaiSanPham();
            List<LoaiSanPham> typeProducts = new List<LoaiSanPham>();
            typeProducts = typeProduct.getAll();
            return typeProducts;
        }

        [HttpGet("many/{CateID}")]
        public List<LoaiSanPham> All(string CateID)
        {
            LoaiSanPham typeProduct = new LoaiSanPham();
            List<LoaiSanPham> typeProducts = new List<LoaiSanPham>();
            typeProducts = typeProduct.getMany(CateID);
            return typeProducts;
        }
    }
}
