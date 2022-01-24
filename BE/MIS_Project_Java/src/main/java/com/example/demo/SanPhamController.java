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
public class SanPhamController {
	@RequestMapping(value = "/api/product/all", method = RequestMethod.GET)
	public ResponseEntity<List<SanPham>> All() 
	{
		 List<SanPham> products = new ArrayList<SanPham>();
		 SanPham product = new SanPham();
		 products = product.getAll();
		 return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/product/many", method = RequestMethod.POST)
	public ResponseEntity<List<SanPham>> All(@RequestBody CuaHang data) 
	{
		 List<SanPham> products = new ArrayList<SanPham>();
		 SanPham product = new SanPham();
		 products = product.getMany(data.AccountID);
		 return new ResponseEntity<>(products, HttpStatus.OK);
	}
}
