using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;

namespace MIS_Project.Controllers
{
    [Route("api/customeraddress")]
    [ApiController]
    public class DiaChiKhachHangController : Controller
    {
        [HttpGet("all")]
        public List<DiaChiKhachHang> All()
        {
            DiaChiKhachHang address = new DiaChiKhachHang();
            List<DiaChiKhachHang> addresses = new List<DiaChiKhachHang>();
            addresses = address.getAll();
            return addresses;
        }

        [HttpPost("customer")]
        public List<DiaChiKhachHang> Many([FromBody]KhachHang data)
        {
            DiaChiKhachHang address = new DiaChiKhachHang();
            List<DiaChiKhachHang> addresses = new List<DiaChiKhachHang>();
            addresses = address.getMany(data.AccountID);
            return addresses;
        }

        [HttpPost("updatedefault")]
        public DiaChiKhachHang UpdateDefault([FromBody]DiaChiKhachHang data)
        {
            DiaChiKhachHang address = new DiaChiKhachHang();
            address = address.updateDefault(data);
            return address;
        }

        [HttpPost("add")]
        public DiaChiKhachHang AddNew([FromBody] DiaChiKhachHang data)
        {
            DiaChiKhachHang address = new DiaChiKhachHang();
            address = address.AddNew(data);
            return address;
        }
    }
}
