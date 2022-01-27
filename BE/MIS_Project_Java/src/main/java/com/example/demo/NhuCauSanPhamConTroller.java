package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@Controller
public class NhuCauSanPhamConTroller {
	@RequestMapping(value = "/api/statistic/demand/year", method = RequestMethod.POST)
	public ResponseEntity<List<NhuCauSanPham>> Year(@RequestBody DuLieuThongKe data) 
	{
		 List<NhuCauSanPham> demands = new ArrayList<NhuCauSanPham>();
		 NhuCauSanPham demand = new NhuCauSanPham();
		 demands = demand.InYear(data);
		 return new ResponseEntity<>(demands, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/statistic/demand/month", method = RequestMethod.POST)
	public ResponseEntity<List<NhuCauSanPham>> Month(@RequestBody DuLieuThongKe data) 
	{
		 List<NhuCauSanPham> demands = new ArrayList<NhuCauSanPham>();
		 NhuCauSanPham demand = new NhuCauSanPham();
		 demands = demand.MonthInYear(data);
		 return new ResponseEntity<>(demands, HttpStatus.OK);
	}
}
