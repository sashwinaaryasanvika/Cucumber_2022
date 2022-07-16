package com.automationpractise;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.baseclass_june.BaseClass_June;
import com.helpherfile.FileReadManager;
import com.pojoclass.LoginPage;
import com.pojoclass.PageObjectManage;
import com.pojoclass.SearchHotel_Page;

public class AdactineProject extends BaseClass_June{
	
	public static void main(String[] args) throws IOException {
		
		
		driver=getBrowser("chrome");
		
		getUrl(FileReadManager.getInstance_FRM().getInstance_CR().get_Url());
		
		PageObjectManage pom=new PageObjectManage(driver);
		
		inputText(pom.getInstancelp().getUsername(), FileReadManager.getInstance_FRM().getInstance_CR().get_Uname());
		inputText(pom.getInstancelp().getPassword(), FileReadManager.getInstance_FRM().getInstance_CR().get_Pass());
		clickButton(pom.getInstancelp().getSubmit());

		dropDown(pom.getInstanceSearch().getLoc(), "byIndex", "1");

				
		
		
		//close();


		
		
	}



}
