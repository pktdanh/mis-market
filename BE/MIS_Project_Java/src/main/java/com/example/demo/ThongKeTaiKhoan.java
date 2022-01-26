package com.example.demo;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ThongKeTaiKhoan {
	public String vung;
	public String soLuong;
	
	
	public ThongKeTaiKhoan()
	{
		vung = "";
		soLuong = "";
	}
	
	public ThongKeTaiKhoan(String Vung, String SoLuong)
	{
		this.vung = Vung;
		this.soLuong = SoLuong;
	}

	
	public List<ThongKeTaiKhoan> All()
	{
		List<ThongKeTaiKhoan> statistics = new ArrayList<ThongKeTaiKhoan>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("select N'Khách hàng vùng ' + p.vung as vung, count(*) as soLuong\r\n"
	             		+ "from [dbo].[KhachHang] k, [dbo].[DiaChiKhachHang] d, [dbo].[PhuongXa] p\r\n"
	             		+ "where k.accountID = d.accountID and d.isDefault = 1 and p.maPhuongXa = d.maPhuongXa\r\n"
	             		+ "group by p.vung\r\n"
	             		+ "union all\r\n"
	             		+ "select N'Shipper vùng ' + px.vung as vung, count(*) as soLuong\r\n"
	             		+ "from [dbo].[Shipper] p, [dbo].[PhuongXa] px\r\n"
	             		+ "where p.maPhuongXa = px.maPhuongXa\r\n"
	             		+ "group by px.vung\r\n"
	             		+ "union all\r\n"
	             		+ "select N'Cửa hàng vùng ' + p.vung as vung, count(*) as soLuong\r\n"
	             		+ "from [dbo].[CuaHang] c, [dbo].[PhuongXa] p\r\n"
	             		+ "where p.maPhuongXa = c.maPhuongXa\r\n"
	             		+ "group by p.vung");
	             while (rs.next()) 
	             {
	            	 ThongKeTaiKhoan statistic = new ThongKeTaiKhoan(rs.getString(1), rs.getString(2));
	            	 statistics.add(statistic);
	             }
	             conn.close();
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		return statistics;
	}
}
