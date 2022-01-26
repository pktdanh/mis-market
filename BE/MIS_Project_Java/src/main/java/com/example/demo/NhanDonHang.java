package com.example.demo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class NhanDonHang {
	public String maHD;
	public String account_S;
	public String thoiGian;
	
	public NhanDonHang()
	{
		maHD = "";
		account_S = "";
		thoiGian = "";
	}
	
	public NhanDonHang(String MaHD, String Account_S, String ThoiGian)
	{
		this.maHD = MaHD;
		this.account_S = Account_S;
		this.thoiGian = ThoiGian;
	}

}
