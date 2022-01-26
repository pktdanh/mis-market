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
	public String accountID;
    public String tenCH;
    public String cmnd;
    public String ngayThamGia;
    public String sdt;
    public String email;
    public String diaChi;
    public String maPhuongXa;
    public String maGPKD;
    public String maCNATTP;
    public List<SanPham> danhSachSanPham;
    public DiaChi diaChiCuaHang;
    public TaiKhoan taiKhoan;
    
    public CuaHang()
    {
    	this.accountID = "";
        this.tenCH = "";
        this.cmnd = "";
        this.ngayThamGia = "";
        this.sdt = "";
        this.email = "";
        this.diaChi = "";
        this.maPhuongXa = "";
        this.maGPKD = "";
        this.maCNATTP = "";
        this.danhSachSanPham = new ArrayList<SanPham>();
        this.diaChiCuaHang = null;
    }

    public CuaHang(String AccountID, String TenCH, String CMND, String NgayThamGia, String SDT, String Email, String DiaChi, String MaPhuongXa, String MaGPKD, String MaCNATTP, List<SanPham> DanhSachSanPham, DiaChi DiaChiCuaHang)
    {
    	this.accountID = AccountID;
        this.tenCH = TenCH;
        this.cmnd = CMND;
        this.ngayThamGia = NgayThamGia;
        this.sdt = SDT;
        this.email = Email;
        this.diaChi = DiaChi;
        this.maPhuongXa = MaPhuongXa;
        this.maGPKD = MaGPKD;
        this.maCNATTP = MaCNATTP;
        this.danhSachSanPham = DanhSachSanPham;
        this.diaChiCuaHang = DiaChiCuaHang;
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
	            	 DiaChi temp2 = new DiaChi(rs.getString(8), rs.getString(7));
	            	 CuaHang store = new CuaHang(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10), temp, temp2);
	            	 stores.add(store);
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
	            	 DiaChi temp2 = new DiaChi(rs.getString(8), rs.getString(7));
	            	 List<SanPham> temp = (new SanPham()).getMany(rs.getString(1));
	            	 CuaHang store = new CuaHang(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10), temp, temp2);
	            	 stores.add(store);
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
	             stmt.executeUpdate("DELETE FROM CuaHang WHERE accountID = '" + StoreID + "'");
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
    
    public String upProduct(SanPham product)
	{
    	product.maSP = "sp" + ((new SanPham()).getAll().size() + 1);
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null)
		     {
		         Statement stmt = conn.createStatement();
		         if (product.anhSP == "")
		         {
		        	 product.anhSP = "https://imgur.com/78A2zxD";
		         }
		         if (product.moTaSP == "")
		         {
		        	 product.moTaSP = "Không có mô tả.";
		         }
		         
	             stmt.executeUpdate("INSERT INTO SanPham VALUES('" + product.maSP + "', N'" + product.tenSP + "', '" + product.anhSP + "', N'" + product.moTaSP + "', '" + product.ngayDang + "', '" + product.giaSP + "', '" + product.soLuongTon + "', '" + product.soSPDaBan + "', '" + product.avgRating + "', '" + product.soRating + "', '" + product.loaiSP + "', '" + product.account_CH + "')");
	             
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
