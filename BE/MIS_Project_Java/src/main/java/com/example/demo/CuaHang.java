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
public class CuaHang {
	public String AccountID;
    public String TenCH;
    public String CMND;
    public String NgayThamGia;
    public String SDT;
    public String Email;
    public String DiaChi;
    public String MaPhuongXa;
    public String MaGPKD;
    public String MaCNATTP;
    public List<SanPham> DanhSachSanPham;
    public CuaHang()
    {
    	this.AccountID = "";
        this.TenCH = "";
        this.CMND = "";
        this.NgayThamGia = "";
        this.SDT = "";
        this.Email = "";
        this.DiaChi = "";
        this.MaPhuongXa = "";
        this.MaGPKD = "";
        this.MaCNATTP = "";
        this.DanhSachSanPham = null;
    }

    public CuaHang(String AccountID, String TenCH, String CMND, String NgayThamGia, String SDT, String Email, String DiaChi, String MaPhuongXa, String MaGPKD, String MaCNATTP, List<SanPham> DanhSachSanPham)
    {
    	this.AccountID = AccountID;
        this.TenCH = TenCH;
        this.CMND = CMND;
        this.NgayThamGia = NgayThamGia;
        this.SDT = SDT;
        this.Email = Email;
        this.DiaChi = DiaChi;
        this.MaPhuongXa = MaPhuongXa;
        this.MaGPKD = MaGPKD;
        this.MaCNATTP = MaCNATTP;
        this.DanhSachSanPham = DanhSachSanPham;
    }
    
    public List<CuaHang> getAll()
	{
		List<CuaHang> stores = new ArrayList<CuaHang>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM CuaHang");
	             while (rs.next()) 
	             {
	            	 List<SanPham> temp = (new SanPham()).getMany(rs.getString(1));
	            	 CuaHang product = new CuaHang(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10), temp);
	            	 stores.add(product);
	             }
	             conn.close();
	             return stores;
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
    
    public CuaHang getOne(String StoreID)
	{
		List<CuaHang> stores = new ArrayList<CuaHang>();
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM CuaHang WHERE accountID = '" + StoreID + "'");
	             while (rs.next()) 
	             {
	            	 List<SanPham> temp = (new SanPham()).getMany(rs.getString(1));
	            	 CuaHang product = new CuaHang(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10), temp);
	            	 stores.add(product);
	             }
	             conn.close();
	             return stores.get(0);
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
		 }
		 	 return null;
	}
    
    public String delete(String StoreID)
	{
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("DELETE FROM STORE WHERE accountID = '" + StoreID + "'");
	             conn.close();
	             return "Successfully!";
		     }
		 } 
		 catch (SQLException ex) 
		 {
			 System.err.println("Cannot connect database, " + ex);
			 return ex.getMessage();
		 }
		return null;
	}
}
