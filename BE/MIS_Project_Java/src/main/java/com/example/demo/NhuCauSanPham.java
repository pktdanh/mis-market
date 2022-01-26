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
public class NhuCauSanPham {
	public String tenSP;
	public String nhuCau;
	
	public NhuCauSanPham()
	{
		tenSP = "";
		nhuCau = "";
	}
	
	public NhuCauSanPham(String TenSP, String NhuCau)
	{
		this.tenSP = TenSP;
		this.nhuCau = NhuCau;
	}
	
	
	public List<NhuCauSanPham> InYear(DuLieuThongKe data)
	{
		List<NhuCauSanPham> demands = new ArrayList<NhuCauSanPham>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select s.tenSP, sum(c.soLuong) as nhuCau from ChiTietHoaDon c, SanPham s, HoaDon h  where c.maSP = s.maSP and h.maHD = c.maHD and year(h.ngayLap) = '"+ data.nam +"' group by s.tenSP");
	             while (rs.next()) 
	             {
	            	 NhuCauSanPham demand = new NhuCauSanPham(rs.getString(1), rs.getString(2));
	            	 demands.add(demand);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return demands;
	}
	
	
	public List<NhuCauSanPham> MonthInYear(DuLieuThongKe data)
	{
		List<NhuCauSanPham> demands = new ArrayList<NhuCauSanPham>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select s.tenSP, sum(c.soLuong) as nhuCau from [dbo].[ChiTietHoaDon] c, [dbo].[SanPham] s, [dbo].[HoaDon] h  where c.maSP = s.maSP and h.maHD = c.maHD and year(h.ngayLap) = '" + data.nam + "' and month(h.ngayLap) = '"+ data.thang +"' group by s.tenSP");
	             while (rs.next()) 
	             {
	            	 NhuCauSanPham demand = new NhuCauSanPham(rs.getString(1), rs.getString(2));
	            	 demands.add(demand);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return demands;
	}
}
