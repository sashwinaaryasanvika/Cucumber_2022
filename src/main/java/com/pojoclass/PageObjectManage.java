package com.pojoclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class PageObjectManage {
	

	public static WebDriver driver; //Null driver
	
	private LoginPage lp;
	private SearchHotel_Page search;
	
	
	public PageObjectManage(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver2, this);
		
	}


	public LoginPage getInstancelp() {
		LoginPage lp=new LoginPage(driver);
		return lp;

	}
	
	
	public SearchHotel_Page getInstanceSearch() {
		SearchHotel_Page search=new SearchHotel_Page(driver);
		return search;

	}
	
	

}
