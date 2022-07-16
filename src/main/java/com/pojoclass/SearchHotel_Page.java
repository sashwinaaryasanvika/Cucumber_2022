package com.pojoclass;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel_Page {
	
	
	public static WebDriver driver; //Null Driver
	
	@FindBy(id="location")
	private WebElement loc;

	public SearchHotel_Page(WebDriver driver) {
		
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
		
	}

	public WebElement getLoc() {
		return loc;
	}
	
	
	
	

}
