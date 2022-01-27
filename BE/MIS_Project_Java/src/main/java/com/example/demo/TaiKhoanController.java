package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin
@Controller
public class TaiKhoanController {
	@RequestMapping(value = "/api/account/all", method = RequestMethod.GET)
	public ResponseEntity<List<TaiKhoan>> All() 
	{
		 List<TaiKhoan> accounts = new ArrayList<TaiKhoan>();
		 TaiKhoan account = new TaiKhoan();
		 accounts = account.getAll();
		 return new ResponseEntity<>(accounts, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/register/store", method = RequestMethod.POST)
	public ResponseEntity<TaiKhoan> RegisterStore(@RequestBody CuaHang data) 
	{
		 TaiKhoan account = new TaiKhoan();
		 account = account.registerStore(data);
		 return new ResponseEntity<>(account, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/register/customer", method = RequestMethod.POST)
	public ResponseEntity<TaiKhoan> RegisterStore(@RequestBody KhachHang data) 
	{
		 TaiKhoan account = new TaiKhoan();
		 account = account.registerCustomer(data);
		 return new ResponseEntity<>(account, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/login/customer", method = RequestMethod.POST)
	public ResponseEntity<TaiKhoan> LoginCustomer(@RequestBody TaiKhoan data) 
	{
		 TaiKhoan account = new TaiKhoan();
		 account = account.CheckLogin(data);
		 return new ResponseEntity<>(account, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/login/store", method = RequestMethod.POST)
	public ResponseEntity<TaiKhoan> LoginStore(@RequestBody TaiKhoan data) 
	{
		 TaiKhoan account = new TaiKhoan();
		 account = account.CheckLogin(data);
		 return new ResponseEntity<>(account, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/active", method = RequestMethod.POST)
	public ResponseEntity<TaiKhoan> Active(@RequestBody TaiKhoan data) 
	{
		 TaiKhoan account = new TaiKhoan();
		 account = account.Active(data.accountID);
		 return new ResponseEntity<>(account, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/deactive", method = RequestMethod.POST)
	public ResponseEntity<TaiKhoan> DeActive(@RequestBody TaiKhoan data) 
	{
		 TaiKhoan account = new TaiKhoan();
		 account = account.DeActive(data.accountID);
		 return new ResponseEntity<>(account, HttpStatus.OK);
	}
}
