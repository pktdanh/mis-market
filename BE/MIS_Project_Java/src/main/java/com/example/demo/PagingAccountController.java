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
public class PagingAccountController {
	@RequestMapping(value = "/api/account/all/paging", method = RequestMethod.POST)
	public ResponseEntity<PagingAccount> All(@RequestBody PagingAccount data) 
	{
		 PagingAccount paging = new PagingAccount();
		 paging = paging.get(data.AccountPerPage);
		 System.out.println(paging.Pages.get(0).Accounts.get(0).AccountID);
		 return new ResponseEntity<>(paging, HttpStatus.OK);
	}
}
