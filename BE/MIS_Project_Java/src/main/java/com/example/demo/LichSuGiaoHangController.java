package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@Controller
public class LichSuGiaoHangController {
	@RequestMapping(value = "/api/history/change", method = RequestMethod.POST)
	public ResponseEntity<LichSuGiaoHang> HistoryChange(@RequestBody NhanDonHang data) 
	{
		LichSuGiaoHang history = new LichSuGiaoHang();
		history = history.StatusChange(data);
		return new ResponseEntity<>(history, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/history/cancel", method = RequestMethod.POST)
	public ResponseEntity<LichSuGiaoHang> Cancel(@RequestBody NhanDonHang data) 
	{
		LichSuGiaoHang history = new LichSuGiaoHang();
		history = history.InvoiceCancel(data.maHD, data.thoiGian);
		return new ResponseEntity<>(history, HttpStatus.OK);
	}
}
