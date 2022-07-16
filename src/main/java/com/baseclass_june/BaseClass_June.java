package com.baseclass_june;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class BaseClass_June {
	
	public static WebDriver driver; // Null driver
	public static WebDriver getBrowser(String browsername) {
				
		if(browsername.equalsIgnoreCase("CHROME")) {
			
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")  +"\\Driver\\chromedriver_new.exe");			
			driver=new ChromeDriver();	
		}
		
		else if(browsername.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")  +"\\Driver\\geckodriver.exe");
		    driver=new FirefoxDriver();	
			
		}
		
		
		driver.manage().window().maximize();
		return driver;

	}


	public static void clickButton(WebElement element) {
		element.click();

	}
	
	
	public static void inputText(WebElement element, String value) {
		element.sendKeys(value);

	}
	
	public static void getUrl(String url) {
		driver.get(url);

	}
	
	public static void close() {
		driver.close();

	}
	
	//element, String, String
	public static void dropDown(WebElement element, String typ, String value1) {
		Select s=new Select(element);
		
		if(typ.equalsIgnoreCase("byvalue")) {
			s.selectByValue(value1);
		}
		
		
		else if(typ.equalsIgnoreCase("visibletext")) {
			
			s.selectByVisibleText(value1);
		}
		
		else if(typ.equalsIgnoreCase("byIndex")) {
			int index = Integer.parseInt(value1);  // String convert to Int
			s.selectByIndex(index);
			
		}
		
		
		

	}
	
	
	

}
