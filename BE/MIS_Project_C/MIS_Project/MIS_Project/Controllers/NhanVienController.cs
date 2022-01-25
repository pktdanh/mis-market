using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MIS_Project.Models;

namespace MIS_Project.Controllers
{
    [Route("api/employee")]
    [ApiController]
    public class NhanVienController : Controller
    {
        [HttpGet("all")]
        public List<NhanVien> All()
        {
            NhanVien employee = new NhanVien();
            List<NhanVien> employees = new List<NhanVien>();
            employees = employee.getAll();
            return employees;
        }
    }
}
