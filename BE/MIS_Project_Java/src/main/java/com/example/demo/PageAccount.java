package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(value = { "all" })
public class PageAccount {
	public int PageNumber;
	public List<TaiKhoan> Accounts;
	public PageAccount() {
		this.PageNumber = 0;
		this.Accounts = new ArrayList<TaiKhoan>();
	}
	
	public PageAccount(int PageNumber, List<TaiKhoan> Accounts)
	{
		this.PageNumber = PageNumber;
		this.Accounts = Accounts;
	}
	
	public PageAccount get(int AccountPerPage, int PageNumber)
	{
		PageAccount page = new PageAccount();
		page.PageNumber = PageNumber;
		List<TaiKhoan> accounts = (new TaiKhoan()).getAll();
		for (int i = AccountPerPage * PageNumber; i < AccountPerPage * PageNumber + AccountPerPage; i++)
		{
			if (i >= accounts.size())
			{
				System.out.println(accounts.size());
				break;
			}
			page.Accounts.add(accounts.get(i));
		}
		return page;
	}
	
	public List<PageAccount> getAll(int AccountPerPage)
	{
		List<PageAccount> pagings = new ArrayList<PageAccount>();
		int MaxPage = (new TaiKhoan()).getAll().size() / AccountPerPage;
		for (int i = 0; i < MaxPage + 1; i++)
		{
			pagings.add((new PageAccount()).get(AccountPerPage, i));
		}
		return pagings;
	}
}
