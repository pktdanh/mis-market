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
	public String accountID;
	public String username;
	public String password;
	public String role;
	public String kichHoat;
	
	public TaiKhoan()
	{
		accountID = "";
		username = "";
		password = "";
		role = "";
		kichHoat = "";
	}
	
	public TaiKhoan(String accountID, String username, String password, String role, String kichHoat)
	{
		this.accountID = accountID;
		this.username = username;
		this.password = password;
		this.role = role;
		this.kichHoat = kichHoat;
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
	
	public TaiKhoan getOne(String AccountID)
	{
		List<TaiKhoan> accounts = new ArrayList<TaiKhoan>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM TaiKhoan WHERE accountID = '"+ AccountID +"'");
	             while (rs.next()) 
	             {
	            	 TaiKhoan account = new TaiKhoan(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5));
	            	 accounts.add(account);
	             }
	             conn.close();
	             return accounts.get(0);
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
	
	public TaiKhoan registerStore(CuaHang newStore)
	{
		TaiKhoan account = new TaiKhoan();
		account.password = (new Password(newStore.taiKhoan.password)).passwordHashed;
		account.role = "ch";
		account.username = newStore.taiKhoan.username;
		account.accountID = "ch" + ((new CuaHang()).getAll().size()+1);
		System.err.println(account.accountID);
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
	            	 if (account.username.equals(rs.getString(2)))
	            	 {
	            		 return null;
	            	 }
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
		         stmt.executeUpdate("INSERT INTO TaiKhoan(accountID, username, password, role, kichHoat) VALUES ('" + account.accountID + "', '"+ account.username +"', '"+ account.password +"', 'ch', 0)");
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		
		
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
		         stmt.executeUpdate("INSERT INTO CuaHang VALUES('"+ account.accountID +"', N'"+ newStore.tenCH +"', '"+ newStore.cmnd +"', '"+ newStore.ngayThamGia +"', '"+ newStore.sdt +"', '"+ newStore.email +"', N'"+ newStore.diaChi +"', '"+ newStore.maPhuongXa +"' ,'"+ newStore.maGPKD +"' ,'"+ newStore.maCNATTP +"')");
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return account;
	}
	
	
	public TaiKhoan registerCustomer(KhachHang regCustomer)
	{
		TaiKhoan account = new TaiKhoan();
		account.password = (new Password(regCustomer.taiKhoan.password)).passwordHashed;
		account.role = "kh";
		account.username = regCustomer.taiKhoan.username;
		account.accountID = "kh" + ((new KhachHang()).getAll().size()+1);
		regCustomer.diaChi.maDC = "dc" + ((new DiaChiKhachHang()).getAll().size() + 1);
		System.err.println(account.accountID);
		System.err.println(account.password);
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
	            	 if (account.username.equals(rs.getString(2)))
	            	 {
	            		 return null;
	            	 }
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
		         Statement stmt2 = conn.createStatement();
		         Statement stmt3 = conn.createStatement();
		         stmt.executeUpdate("INSERT INTO TaiKhoan(accountID, username, password, role, kichHoat) VALUES ('" + account.accountID + "', '"+ account.username +"', '"+ account.password +"', 'kh', 1)");
	             stmt2.executeUpdate("INSERT INTO DiaChiKhachHang VALUES('"+ regCustomer.diaChi.maDC +"', '"+ account.accountID +"', N'"+ regCustomer.diaChi.diaChi +"', 1, '"+ regCustomer.diaChi.maPhuongXa +"')");
	             stmt3.executeUpdate("INSERT INTO KhachHang VALUES('"+ account.accountID +"', '"+ regCustomer.hoTen +"', '"+ regCustomer.cmnd +"', '"+ regCustomer.ngaySinh +"', N'"+ regCustomer.gioiTinh +"', '"+ regCustomer.sdt +"', '"+ regCustomer.email +"')");
		         conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return account;
	}
	
	
	
	
	public TaiKhoan CheckLogin(TaiKhoan LogAccount)
	{
		TaiKhoan Account = new TaiKhoan();
		Account.role = LogAccount.role;
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
	            	 if (LogAccount.username.equals(rs.getString(2)))
	            	 {
	            		 Account.accountID = rs.getString(1);
	            		 Account.username = LogAccount.username;
	            		 System.out.println(rs.getString(5));
	            		 if (rs.getString(5).equals("0"))
	            		 {
	            			 Account.kichHoat = rs.getString(5);
	            			 return Account;
	            		 }
	            		 if (rs.getString(3).equals("1"))
	            		 {
	            			 if (LogAccount.password.equals("1"))
	            			 {
	            				 Account.password = LogAccount.password;
	            				 return Account;
	            			 }
	            			 else
	            			 {
	            				 Account.password = "";
	            				 return Account;
	            			 }
	            		 }
	            		 else 
	            		 {
	            			 Account.password = (new Password(LogAccount.password)).passwordHashed;
	            			 if (Account.password.equals(rs.getString(3)))
	            			 {
	            				 return Account;
	            			 }
	            			 else
	            			 {
	            				 Account.password = "";
	            				 return Account;
	            			 }
	            		 }
	            	 }
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return null;
	}
	
	public TaiKhoan Active(String AccountID)
	{
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
		         stmt.executeUpdate("UPDATE TaiKhoan SET kichHoat = 1 WHERE accountID = '"+ AccountID +"'");
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return getOne(AccountID);
	}
	
	public TaiKhoan DeActive(String AccountID)
	{
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
		         stmt.executeUpdate("UPDATE TaiKhoan SET kichHoat = 0 WHERE accountID = '"+ AccountID +"'");
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return getOne(AccountID);
	}
	
	
	
}
