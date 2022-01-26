package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class PagingAccount {
	public int AccountPerPage;
	public List<PageAccount> Pages;
	public PagingAccount()
	{
		this.AccountPerPage = 0;
		Pages = new ArrayList<PageAccount>();
	}
	
	public PagingAccount(int AccountPerPage, List<PageAccount> Pages)
	{
		this.AccountPerPage = AccountPerPage;
		this.Pages = Pages;
	}
	
	public PagingAccount get(int AccountPerPage) 
	{
		PagingAccount paging = new PagingAccount();
		paging.AccountPerPage = AccountPerPage;
		int MaxPage = (new TaiKhoan()).getAll().size() / AccountPerPage;
		for (int i = 0; i < MaxPage + 1; i++)
		{
			paging.Pages.add((new PageAccount()).get(AccountPerPage, i));
		}
		
		return paging;
	}
}
