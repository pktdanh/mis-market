package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class KhachHang {
	public String accountID;
	public String hoTen;
	public String cmnd;
	public String ngaySinh;
	public String gioiTinh;
	public String sdt;
	public String email;
	public DiaChiKhachHang diaChi;
	public TaiKhoan taiKhoan;
	
	public KhachHang()
	{
		accountID = "";
		hoTen = "";
		cmnd = "";
		ngaySinh = "";
		gioiTinh = "";
		sdt = "";
		email = "";
		diaChi = new DiaChiKhachHang();
		taiKhoan = new TaiKhoan();
	}
	
	public KhachHang(String AccountID, String HoTen, String CMND, String NgaySinh, String GioiTinh, String SDT, String Email, DiaChiKhachHang DiaChi, TaiKhoan Account)
	{
		this.accountID = AccountID;
		this.hoTen = HoTen;
		this.cmnd = CMND;
		this.ngaySinh = NgaySinh;
		this.gioiTinh = GioiTinh;
		this.sdt = SDT;
		this.email = Email;
		this.diaChi = DiaChi;
		this.taiKhoan = Account;
	}
	
	public List<KhachHang> getAll()
	{
		List<KhachHang> customers = new ArrayList<KhachHang>();
		try 
		 {
			
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM KhachHang");
	             while (rs.next()) 
	             {
	            	 DiaChiKhachHang temp = (new DiaChiKhachHang()).getOneDefault(rs.getString(1));
	            	 TaiKhoan temp2 = new TaiKhoan();
	            	 KhachHang customer = new KhachHang(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),rs.getString(6), rs.getString(7), temp, temp2);
	            	 customers.add(customer);
	             }
	             conn.close();
	             return customers;
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
	
	public KhachHang EditCustomer(KhachHang editCustomer)
	{
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
		         stmt.executeUpdate("UPDATE KhachHang SET hoTen = N'"+ editCustomer.hoTen +"', sdt = '"+ editCustomer.sdt +"', email = '"+ editCustomer.email +"' WHERE accountID = '"+ editCustomer.accountID +"'");
	             conn.close();
		     }
		 } 
		 catch (SQLException ex)
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return editCustomer;
	}
}
