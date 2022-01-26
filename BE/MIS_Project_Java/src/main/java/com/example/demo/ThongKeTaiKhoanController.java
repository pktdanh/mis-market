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
public class ThongKeTaiKhoanController {
	@RequestMapping(value = "/api/statistic/account", method = RequestMethod.GET)
	public ResponseEntity<List<ThongKeTaiKhoan>> Year() 
	{
		 List<ThongKeTaiKhoan> statistics = new ArrayList<ThongKeTaiKhoan>();
		 ThongKeTaiKhoan statistic = new ThongKeTaiKhoan();
		 statistics = statistic.All();
		 return new ResponseEntity<>(statistics, HttpStatus.OK);
	}
}
