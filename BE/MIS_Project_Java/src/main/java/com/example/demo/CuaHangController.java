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
public class CuaHangController {
	@RequestMapping(value = "/api/store/all", method = RequestMethod.GET)
	public ResponseEntity<List<CuaHang>> All() 
	{
		 List<CuaHang> stores = new ArrayList<CuaHang>();
		 CuaHang store = new CuaHang();
		 stores = store.getAll();
		 return new ResponseEntity<>(stores, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/store/one", method = RequestMethod.POST)
	public ResponseEntity<CuaHang> One(@RequestBody CuaHang data)
	{
		 CuaHang store = new CuaHang();
		 store = store.getOne(data.accountID);
		 return new ResponseEntity<>(store, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/store/delete", method = RequestMethod.POST)
	public ResponseEntity<String> Delete(@RequestBody CuaHang data)
	{
		 CuaHang store = new CuaHang();
		 String message = store.delete(data.accountID);
		 return new ResponseEntity<>(message, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/store/upproduct", method = RequestMethod.POST)
	public ResponseEntity<String> UpProduct(@RequestBody SanPham data)
	{
		 CuaHang store = new CuaHang();
		 String message = store.upProduct(data);
		 return new ResponseEntity<>(message, HttpStatus.OK);
	}
}
