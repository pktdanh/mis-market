using Microsoft.AspNetCore.Mvc;
using MIS_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    [Route("api/invoice")]
    public class HoaDonController : Controller
    {
        [HttpGet("all")]
        public List<HoaDon> All()
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = new List<HoaDon>();
            invoices = invoice.getAll();
            return invoices;
        }

        [HttpPost("shipper")]
        public List<HoaDon> Shipper([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon()
            {
                Account_S = data.Account_S
            };
            List<HoaDon> invoices = invoice.getManyShipper(invoice.Account_S);
            return invoices;
        }
    }


}
