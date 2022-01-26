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
public class LoaiSanPham {
	public String maLoaiSP;
	public String tenLoaiSP;
	public String maNhomSP;
	public String tenNhomSP;
	
	public LoaiSanPham()
	{
		this.maLoaiSP = "";
		this.tenLoaiSP = "";
		this.maNhomSP = "";
		this.tenNhomSP = "";
	}
	
	public LoaiSanPham(String MaLoaiSP, String TenLoaiSP, String MaNhomSP, String TenNhomSP)
	{
		this.maLoaiSP = MaLoaiSP;
		this.tenLoaiSP = TenLoaiSP;
		this.maNhomSP = MaNhomSP;
		this.tenNhomSP = TenNhomSP;
	}
	
	public List<LoaiSanPham> getAll()
	{
		List<LoaiSanPham> typeProducts = new ArrayList<LoaiSanPham>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM SanPham SP, LoaiSanPham LSP, NhomSanPham NSP, CuaHang CH WHERE SP.loaiSP = LSP.maLoaiSP and LSP.maNhomSP = NSP.maNhomSP and CH.AccountID = SP.Account_CH");
	             while (rs.next()) 
	             {
	            	 LoaiSanPham typeProduct = new LoaiSanPham(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(5));
	            	 typeProducts.add(typeProduct);
	             }
	             conn.close();
	             return typeProducts;
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
	
	public List<LoaiSanPham> getMany(String cateID)
	{
		List<LoaiSanPham> typeProducts = new ArrayList<LoaiSanPham>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM LoaiSanPham LSP, NhomSanPham NSP WHERE LSP.maNhomSP = NSP.maNhomSP and NSP.maNhomSP = '" + cateID + "'");
	             while (rs.next()) 
	             {
	            	 LoaiSanPham typeProduct = new LoaiSanPham(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(5));
	            	 typeProducts.add(typeProduct);
	             }
	             conn.close();
	             return typeProducts;
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}

}
