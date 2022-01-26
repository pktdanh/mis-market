package com.example.demo;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class DiaChi {
	public String maPhuongXa;
	public String diaChiChiTiet;
	
	public DiaChi()
	{
		this.maPhuongXa = "";
		this.diaChiChiTiet = "";
	}
	
	public DiaChi(String MaPhuongXa, String DiaChiThem) 
	{
		this.maPhuongXa = MaPhuongXa;
		String DiaChiChiTiet = DiaChiThem;
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM PhuongXa P, QuanHuyen Q, TinhThanhPho T WHERE P.maQuanHuyen = Q.maQuanHuyen and Q.maTinhTP = T.maTinhTP");
	             while (rs.next()) 
	             {
	            	 if (rs.getString(1).equals(MaPhuongXa))
	            	 {
	            		 DiaChiChiTiet = DiaChiChiTiet + ", Phường " + rs.getString(2) + ", " + rs.getString(5) + ", " + rs.getString(8);
	            		 this.diaChiChiTiet = DiaChiChiTiet;
	            	 }
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
	}
}
