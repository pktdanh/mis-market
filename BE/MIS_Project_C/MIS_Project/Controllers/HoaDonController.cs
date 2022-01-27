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

        [HttpGet("noshipper")]
        public List<HoaDon> NoShipper()
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = new List<HoaDon>();
            invoices = invoice.getNoShipper();
            return invoices;
        }

        [HttpPost("noshipper/near")]
        public List<HoaDon> NoShipperNear([FromBody]Shipper data)
        {
            HoaDon invoice = new HoaDon();
            Shipper shipper = (new Shipper()).getOne(data.AccountID)[0];
            List<HoaDon> invoices = new List<HoaDon>();
            invoices = invoice.getNoShipperNear(shipper.MaPhuongXa);
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

        [HttpPost("shipper/handling")]
        public List<HoaDon> ShipperHandling([FromBody] HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            List<HoaDon> invoices = invoice.getManyShipperHandling(data.Account_S);
            return invoices;
        }

        [HttpPost("buy")]
        public HoaDon Buy([FromBody]HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            invoice = invoice.HandleBuy(data);
            return invoice;
        }

        [HttpPost("cancel")]
        public HoaDon Cancel([FromBody] HoaDon data)
        {
            HoaDon invoice = new HoaDon();
            invoice = invoice.CancelInvoice(data.MaHD);
            return invoice;
        }
    }


}
