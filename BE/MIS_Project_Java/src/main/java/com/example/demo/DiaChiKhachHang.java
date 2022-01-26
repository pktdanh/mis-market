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
public class DiaChiKhachHang {
	public String maDC;
	public String accountID;
	public String diaChi;
	public String isDefault;
	public String maPhuongXa;
	public DiaChi DiaChiChiTiet;
	
	public DiaChiKhachHang()
	{
		maDC = "";
		accountID = "";
		diaChi = "";
		isDefault = "";
		maPhuongXa = "";
		DiaChiChiTiet = new DiaChi();
	}
	
	public DiaChiKhachHang(String MaDC, String AccountID, String DiaChi, String IsDefault, String MaPhuongXa, DiaChi DiaChiChiTiet)
	{
		this.maDC = MaDC;
		this.accountID = AccountID;
		this.diaChi = DiaChi;
		this.isDefault = IsDefault;
		this.maPhuongXa = MaPhuongXa;
		this.DiaChiChiTiet = DiaChiChiTiet;
	}
	
	public List<DiaChiKhachHang> getAll()
	{
		List<DiaChiKhachHang> addresses = new ArrayList<DiaChiKhachHang>();
		try 
		{
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM DiaChiKhachHang");
	             while (rs.next()) 
	             {
	            	 DiaChi temp = new DiaChi();
	            	 DiaChiKhachHang address = new DiaChiKhachHang(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), temp);
	            	 addresses.add(address);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return addresses;
	}
	
	public DiaChiKhachHang getOneDefault(String CusID)
	{
		try 
		{
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM DiaChiKhachHang WHERE accountID = 'kh001' and isDefault = 1");
	             while (rs.next()) 
	             {
	            	 DiaChi temp = new DiaChi(rs.getString(5), rs.getString(3));
	            	 DiaChiKhachHang address = new DiaChiKhachHang(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), temp);
	            	 return address;
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
}
