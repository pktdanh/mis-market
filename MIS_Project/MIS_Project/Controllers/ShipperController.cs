using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;

namespace MIS_Project.Controllers
{
    [Route("api/shipper")]
    [ApiController]
    public class ShipperController : Controller
    {
        [HttpGet("all")]
        public List<Shipper> All()
        {
            Shipper shipper = new Shipper();
            List<Shipper> shippers = new List<Shipper>();
            shippers = shipper.getAll();
            return shippers;
        }

        [HttpPost("one")]
        public List<Shipper> One([FromBody]Shipper data)
        {
            Shipper shipper = new Shipper();
            List<Shipper> shippers = new List<Shipper>();
            shippers = shipper.getOne(data.AccountID);
            return shippers;
        }
    }
}
