package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
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
}
