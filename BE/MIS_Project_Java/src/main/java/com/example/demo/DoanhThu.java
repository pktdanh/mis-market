package com.example.demo;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class DoanhThu {
	public String thang;
	public String quy;
	public String nam;
	public String doanhThu;
	
	public DoanhThu()
	{
		thang = "";
		quy = "";
		nam = "";
		doanhThu = "";
	}
	
	public DoanhThu(String Thang, String Quy, String Nam, String DoanhThu)
	{
		this.thang = Thang;
		this.quy = Quy;
		this.nam = Nam;
		this.doanhThu = DoanhThu;
	}
	
	public List<DoanhThu> MonthInYear(DuLieuThongKe data) //Truyền vào năm, mã cửa hàng
	{
		List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select month(h.ngayLap) as thang, sum(c.soLuong * s.giaSP) as doanhThu from [dbo].[HoaDon] h, [dbo].[ChiTietHoaDon] c, [dbo].[SanPham] s, [dbo].[CuaHang] where h.maHD = c.maHD and s.maSP = c.maSP and year(h.ngayLap) = '"+ data.nam +"' and h.account_CH = '"+ data.account_CH +"' group by month(h.ngayLap)");
	             while (rs.next()) 
	             {
	            	 DoanhThu revenue = new DoanhThu(rs.getString(1), "", "", rs.getString(2));
	            	 revenues.add(revenue);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return revenues;
	}
	
	
	public List<DoanhThu> SeasonInYear(DuLieuThongKe data) //Truyền vào năm, mã cửa hàng
	{
		List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select DATEPART(QUARTER, h.ngayLap) as quy, sum(c.soLuong * s.giaSP) as doanhThu from [dbo].[HoaDon] h, [dbo].[ChiTietHoaDon] c, [dbo].[SanPham] s, [dbo].[CuaHang] where h.maHD = c.maHD and s.maSP = c.maSP and year(h.ngayLap) = '"+ data.nam +"' and h.account_CH = '"+ data.account_CH +"' group by DATEPART(QUARTER, h.ngayLap)");
	             while (rs.next()) 
	             {
	            	 DoanhThu revenue = new DoanhThu("", rs.getString(1), "", rs.getString(2));
	            	 revenues.add(revenue);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return revenues;
	}
	
	public List<DoanhThu> InYear(DuLieuThongKe data) //Truyền vào mã cửa hàng
	{
		List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select year(h.ngayLap) nam, sum(c.soLuong * s.giaSP) as doanhThu from [dbo].[HoaDon] h, [dbo].[ChiTietHoaDon] c, [dbo].[SanPham] s, [dbo].[CuaHang] where h.maHD = c.maHD and s.maSP = c.maSP and h.account_CH = '"+ data.account_CH +"' group by year(h.ngayLap)");
	             while (rs.next()) 
	             {
	            	 DoanhThu revenue = new DoanhThu("", "", rs.getString(1), rs.getString(2));
	            	 revenues.add(revenue);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return revenues;
	}
	
	
	public List<DoanhThu> AppInYear() // không truyền
	{
		List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select year(h.ngayLap) nam, (sum(c.soLuong * 0.3 * s.giaSP * 0.3) + sum(h.phiShip) * 0.1) as doanhThu from [dbo].[HoaDon] h, [dbo].[ChiTietHoaDon] c, [dbo].[SanPham] s, [dbo].[CuaHang] where h.maHD = c.maHD and s.maSP = c.maSP group by year(h.ngayLap)");
	             while (rs.next()) 
	             {
	            	 DoanhThu revenue = new DoanhThu("", "", rs.getString(1), rs.getString(2));
	            	 revenues.add(revenue);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return revenues;
	}
	
	public List<DoanhThu> AppMonthInYear(DuLieuThongKe data) //Truyền vào năm
	{
		List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select month(h.ngayLap) as thang, (sum(c.soLuong * 0.3 * s.giaSP * 0.3) + sum(h.phiShip) * 0.1) as doanhThu from [dbo].[HoaDon] h, [dbo].[ChiTietHoaDon] c, [dbo].[SanPham] s, [dbo].[CuaHang] where h.maHD = c.maHD and s.maSP = c.maSP and year(h.ngayLap) = '"+ data.nam +"' group by month(h.ngayLap)");
	             while (rs.next()) 
	             {
	            	 DoanhThu revenue = new DoanhThu(rs.getString(1), "", "", rs.getString(2));
	            	 revenues.add(revenue);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return revenues;
	}
	
	public List<DoanhThu> AppSeasonInYear(DuLieuThongKe data) //Truyền vào năm
	{
		List<DoanhThu> revenues = new ArrayList<DoanhThu>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select DATEPART(QUARTER, h.ngayLap) as quy, (sum(c.soLuong * 0.3 * s.giaSP * 0.3) + sum(h.phiShip) * 0.1) as doanhThu from [dbo].[HoaDon] h, [dbo].[ChiTietHoaDon] c, [dbo].[SanPham] s, [dbo].[CuaHang] where h.maHD = c.maHD and s.maSP = c.maSP and year(h.ngayLap) = '"+ data.nam +"' group by DATEPART(QUARTER, h.ngayLap)");
	             while (rs.next()) 
	             {
	            	 DoanhThu revenue = new DoanhThu("", rs.getString(1), "", rs.getString(2));
	            	 revenues.add(revenue);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return revenues;
	}

}
