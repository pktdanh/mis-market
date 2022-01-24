package com.example.demo;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class TaiKhoan {
	public String AccountID;
	public String Username;
	public String Password;
	public String Role;
	public String Token;
	
	public TaiKhoan()
	{
		AccountID = "";
		Username = "";
		Password = "";
		Role = "";
		Token = "";
	}
	
	public TaiKhoan(String accountID, String username, String password, String role, String token)
	{
		AccountID = accountID;
		Username = username;
		Password = password;
		Role = role;
		Token = token;
	}
	
	public List<TaiKhoan> getAll()
	{
		List<TaiKhoan> accounts = new ArrayList<TaiKhoan>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM TaiKhoan");
	             while (rs.next()) 
	             {
	            	 TaiKhoan account = new TaiKhoan(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5));
	            	 accounts.add(account);
	             }
	             conn.close();
	             return accounts;
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
	
}
