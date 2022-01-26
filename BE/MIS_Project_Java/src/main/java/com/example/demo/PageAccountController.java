package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@Controller
public class PageAccountController {
	@RequestMapping(value = "/api/account/all/paging2", method = RequestMethod.POST)
	public ResponseEntity<List<PageAccount>> All(@RequestBody PagingAccount data) 
	{
		 PageAccount paging = new PageAccount();
		 List<PageAccount> pagings = new ArrayList<PageAccount>();
		 pagings = paging.getAll(data.AccountPerPage);
		 return new ResponseEntity<>(pagings, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/all/paging2/{per}", method = RequestMethod.GET)
	public ResponseEntity<List<PageAccount>> All(@PathVariable("per") String per) 
	{
	     int temp = Integer.parseInt(per);
		 PageAccount paging = new PageAccount();
		 List<PageAccount> pagings = new ArrayList<PageAccount>();
		 pagings = paging.getAll(temp);
		 return new ResponseEntity<>(pagings, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/account/all/paging3", method = RequestMethod.GET)
	public ResponseEntity<PageAccount> All() 
	{
		 PageAccount paging = new PageAccount();
		 paging = paging.get(9, 1);
		 return new ResponseEntity<>(paging, HttpStatus.OK);
	}
}
