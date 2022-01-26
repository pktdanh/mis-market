package com.example.demo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "all" })
public class HoaDon {
	public String maHD;
	public String account_S;
}
