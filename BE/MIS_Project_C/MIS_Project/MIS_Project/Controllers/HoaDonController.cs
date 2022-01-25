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

        [HttpPost("one")]
        public List<HoaDon> One([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = new List<HoaDon>();
            invoices = invoice.getOne(data.MaHD);
            return invoices;
        }

        [HttpPost("shipper")]
        public List<HoaDon> Shipper([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = invoice.getManyShipper(data.Account_S);
            return invoices;
        }

        [HttpPost("customer")]
        public List<HoaDon> Customer([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = invoice.getManyCustomer(data.Account_KH);
            return invoices;
        }

        [HttpPost("store")]
        public List<HoaDon> Store([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = invoice.getManyStore(data.Account_CH);
            return invoices;
        }

        [HttpPost("store/handling")]
        public List<HoaDon> StoreHandling([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = invoice.getManyStoreHandling(data.Account_CH);
            return invoices;
        }

        [HttpPost("buy")]
        public HoaDon Buy([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            invoice = invoice.HandleBuy(data);
            return invoice;
        }
    }


}
