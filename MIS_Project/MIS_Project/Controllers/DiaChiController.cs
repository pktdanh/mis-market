using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIS_Project.Controllers
{
    public class DiaChiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
