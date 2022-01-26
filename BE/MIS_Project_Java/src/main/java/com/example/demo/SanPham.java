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
	public String maSP;
	public String tenSP;
	public String anhSP;
	public String moTaSP;
	public String ngayDang;
	public String giaSP;
	public String soLuongTon;
	public String soSPDaBan;
	public String avgRating;
	public String soRating;
	public String loaiSP;
	public String account_CH;
	public String tenLoaiSP;
	public String maNhomSP;
	public String tenNhomSP;
	public String tenCH;
	
	public SanPham()
	{
		maSP = "";
		tenSP = "";
		anhSP = "";
		moTaSP = "";
		ngayDang = "";
		giaSP = "";
		soLuongTon = "";
		soSPDaBan = "";
		avgRating = "";
		soRating = "";
		loaiSP = "";
		account_CH = "";
		tenLoaiSP = "";
		maNhomSP = "";
		tenNhomSP = "";
		tenCH = "";
	}
	
	public SanPham(String MaSP, String TenSP, String AnhSP, String MoTaSP, String NgayDang, String GiaSP, String SoLuongTon, String SoSPDaBan, String AvgRating, String SoRating, String LoaiSP, String Account_CH, String TenLoaiSP, String MaNhomSP, String TenNhomSP, String TenCH)
	{
		this.maSP = MaSP;
		this.tenSP = TenSP;
		this.anhSP = AnhSP;
		this.moTaSP = MoTaSP;
		this.ngayDang = NgayDang;
		this.giaSP = GiaSP;
		this.soLuongTon = SoLuongTon;
		this.soSPDaBan = SoSPDaBan;
		this.avgRating = AvgRating;
		this.soRating = SoRating;
		this.loaiSP = LoaiSP;
		this.account_CH = Account_CH;
		this.tenLoaiSP = TenLoaiSP;
		this.maNhomSP = MaNhomSP;
		this.tenNhomSP = TenNhomSP;
		this.tenCH = TenCH;
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
