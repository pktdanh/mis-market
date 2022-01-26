package com.example.demo;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class LichSuGiaoHang {
	public String maHD;
	public String thoiGian;
	public TrangThai status;
	public String ghiChu;
	
	public LichSuGiaoHang()
	{
		maHD = "";
		thoiGian = "";
		status = null;
		ghiChu = "";
	}
	
	public LichSuGiaoHang(String MaHD, String ThoiGian, TrangThai Status, String GhiChu)
	{
		maHD = MaHD;
		thoiGian = ThoiGian;
		status = Status;
		ghiChu = GhiChu;
	}
	
	public LichSuGiaoHang InvoiceCancel(String MaHD, String Time)
	{
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
		         stmt.executeUpdate("INSERT INTO LichSuGiaoHang(maHD, thoiGian, statusCode) VALUES('"+ MaHD +"', '"+ Time +"', 's5')");
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 LichSuGiaoHang history = new LichSuGiaoHang(MaHD, Time, (new TrangThai("s5")), "");
		 return history;
	}
	
	public LichSuGiaoHang StatusChange(NhanDonHang data)
	{
		LichSuGiaoHang history = new LichSuGiaoHang();
		history.thoiGian = data.thoiGian;
		history.maHD = data.maHD;
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
		         Statement stmt2 = conn.createStatement();
		         Statement stmt3 = conn.createStatement();
		         Statement stmt4 = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM LichSuGiaoHang WHERE maHD = '"+ data.maHD +"' and thoiGian >= ALL(SELECT thoiGian FROM LichSuGiaoHang WHERE maHD = '"+ data.maHD +"')");
	             while (rs.next()) 
	             {
	            	 if (rs.getString(3).equals("s1"))
	            	 {
	            		 history.status = new TrangThai("s2");
	            		 stmt2.executeUpdate("INSERT INTO LichSuGiaoHang(maHD, thoiGian, statusCode) VALUES('"+ data.maHD +"', '"+ data.thoiGian +"', 's2')");
	            		 stmt3.executeUpdate("UPDATE Shipper SET status = 0 WHERE accountID = '"+ data.account_S +"'");
	            		 stmt4.executeUpdate("UPDATE HoaDon SET account_S = '"+ data.account_S +"' WHERE maHD = '"+ data.maHD +"'");
	            	 }
	            	 else if (rs.getString(3).equals("s2"))
	            	 {
	            		 history.status = new TrangThai("s3");
	            		 stmt2.executeUpdate("INSERT INTO LichSuGiaoHang(maHD, thoiGian, statusCode) VALUES('"+ data.maHD +"', '"+ data.thoiGian +"', 's3')");
	            	 }
	            	 else if (rs.getString(3).equals("s3"))
	            	 {
	            		 history.status = new TrangThai("s4");
	            		 stmt2.executeUpdate("INSERT INTO LichSuGiaoHang(maHD, thoiGian, statusCode) VALUES('"+ data.maHD +"', '"+ data.thoiGian +"', 's4')");
	            		 stmt3.executeUpdate("UPDATE Shipper SET status = 1 WHERE accountID = (SELECT account_S FROM HoaDon WHERE maHD = '"+ data.maHD +"')");
	            	 }
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		
		return history;
	}
	
}
