package com.example.demo;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(value = { "all" })
public class TrangThai {
	public String statusCode;
	public String trangThai;
	
	public TrangThai()
	{
		statusCode = "";
		trangThai = "";
	}
	
	public TrangThai(String StatusCode)
	{
		this.statusCode = StatusCode;
		try 
		 {
			 String dbURL = "jdbc:sqlserver://localhost;databaseName=MIS;user=sa;password=t";
		     Connection conn = DriverManager.getConnection(dbURL);
		     if (conn != null) 
		     {
		    	 DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
		         Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM TrangThai WHERE statusCode = '"+ StatusCode +"'");
	             while (rs.next()) 
	             {
	            	 this.trangThai = rs.getString(2);
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
