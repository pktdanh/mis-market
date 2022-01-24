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
public class SanPham {
	public String MaSP;
	public String TenSP;
	public String AnhSP;
	public String MoTaSP;
	public String NgayDang;
	public String GiaSP;
	public String SoLuongTon;
	public String SoSPDaBan;
	public String AvgRating;
	public String SoRating;
	public String LoaiSP;
	public String Account_CH;
	public String TenLoaiSP;
	public String MaNhomSP;
	public String TenNhomSP;
	public String TenCH;
	
	public SanPham()
	{
		MaSP = "";
		TenSP = "";
		AnhSP = "";
		MoTaSP = "";
		NgayDang = "";
		GiaSP = "";
		SoLuongTon = "";
		SoSPDaBan = "";
		AvgRating = "";
		SoRating = "";
		LoaiSP = "";
		Account_CH = "";
		TenLoaiSP = "";
		MaNhomSP = "";
		TenNhomSP = "";
		TenCH = "";
	}
	
	public SanPham(String MaSP, String TenSP, String AnhSP, String MoTaSP, String NgayDang, String GiaSP, String SoLuongTon, String SoSPDaBan, String AvgRating, String SoRating, String LoaiSP, String Account_CH, String TenLoaiSP, String MaNhomSP, String TenNhomSP, String TenCH)
	{
		this.MaSP = MaSP;
		this.TenSP = TenSP;
		this.AnhSP = AnhSP;
		this.MoTaSP = MoTaSP;
		this.NgayDang = NgayDang;
		this.GiaSP = GiaSP;
		this.SoLuongTon = SoLuongTon;
		this.SoSPDaBan = SoSPDaBan;
		this.AvgRating = AvgRating;
		this.SoRating = SoRating;
		this.LoaiSP = LoaiSP;
		this.Account_CH = Account_CH;
		this.TenLoaiSP = TenLoaiSP;
		this.MaNhomSP = MaNhomSP;
		this.TenNhomSP = TenNhomSP;
		this.TenCH = TenCH;
	}
	
	public List<SanPham> getAll()
	{
		List<SanPham> products = new ArrayList<SanPham>();
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
	            	 SanPham product = new SanPham(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),rs.getString(11), rs.getString(12), rs.getString(14), rs.getString(15), rs.getString(17), rs.getString(19));
	            	 products.add(product);
	             }
	             conn.close();
	             return products;
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
	
	public List<SanPham> getMany(String storeID)
	{
		List<SanPham> products = new ArrayList<SanPham>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM SanPham SP, LoaiSanPham LSP, NhomSanPham NSP, CuaHang CH WHERE SP.loaiSP = LSP.maLoaiSP and LSP.maNhomSP = NSP.maNhomSP and CH.AccountID = SP.Account_CH and CH.accountID = '" + storeID + "'");
	             while (rs.next()) 
	             {
	            	 SanPham product = new SanPham(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),rs.getString(11), rs.getString(12), rs.getString(14), rs.getString(15), rs.getString(17), rs.getString(19));
	            	 products.add(product);
	             }
	             conn.close();
	             return products;
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
}
