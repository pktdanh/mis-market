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
public class DoanhThuController {
	@RequestMapping(value = "/api/statistic/revenue/store/year", method = RequestMethod.POST)
	public ResponseEntity<List<DoanhThu>> Year(@RequestBody DuLieuThongKe data) 
	{
		 List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		 DoanhThu revenue = new DoanhThu();
		 revenues = revenue.InYear(data);
		 return new ResponseEntity<>(revenues, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/statistic/revenue/store/month", method = RequestMethod.POST)
	public ResponseEntity<List<DoanhThu>> Month(@RequestBody DuLieuThongKe data) 
	{
		 List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		 DoanhThu revenue = new DoanhThu();
		 revenues = revenue.MonthInYear(data);
		 return new ResponseEntity<>(revenues, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/statistic/revenue/store/season", method = RequestMethod.POST)
	public ResponseEntity<List<DoanhThu>> Season(@RequestBody DuLieuThongKe data) 
	{
		 List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		 DoanhThu revenue = new DoanhThu();
		 revenues = revenue.SeasonInYear(data);
		 return new ResponseEntity<>(revenues, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/statistic/revenue/app/year", method = RequestMethod.GET)
	public ResponseEntity<List<DoanhThu>> AppYear() 
	{
		 List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		 DoanhThu revenue = new DoanhThu();
		 revenues = revenue.AppInYear();
		 return new ResponseEntity<>(revenues, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/statistic/revenue/app/season", method = RequestMethod.POST)
	public ResponseEntity<List<DoanhThu>> AppSeason(@RequestBody DuLieuThongKe data) 
	{
		 List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		 DoanhThu revenue = new DoanhThu();
		 revenues = revenue.AppSeasonInYear(data);
		 return new ResponseEntity<>(revenues, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/statistic/revenue/app/month", method = RequestMethod.POST)
	public ResponseEntity<List<DoanhThu>> AppMonth(@RequestBody DuLieuThongKe data) 
	{
		 List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		 DoanhThu revenue = new DoanhThu();
		 revenues = revenue.AppMonthInYear(data);
		 return new ResponseEntity<>(revenues, HttpStatus.OK);
	}
}
