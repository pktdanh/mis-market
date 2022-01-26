package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@Controller
public class KhachHangController {
	@RequestMapping(value = "/api/customer/edit", method = RequestMethod.POST)
	public ResponseEntity<KhachHang> One(@RequestBody KhachHang data)
	{
		KhachHang customer = new KhachHang();
		 customer = customer.EditCustomer(data);
		 return new ResponseEntity<>(customer, HttpStatus.OK);
	}
}
