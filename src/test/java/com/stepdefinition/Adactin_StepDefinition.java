package com.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.baseclass_june.BaseClass_June;
import com.helpherfile.FileReadManager;
import com.pojoclass.PageObjectManage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Adactin_StepDefinition extends BaseClass_June{
	
	public static WebDriver driver=getBrowser("chrome");
	
	public static PageObjectManage pom=new PageObjectManage(driver);
	
	@Given("^User is Launch the application$")
	public void user_is_Launch_the_application() throws Throwable {
		getUrl(FileReadManager.getInstance_FRM().getInstance_CR().get_Url());
	}

	@When("^User is enter the username in username field$")
	public void user_is_enter_the_username_in_username_field() throws Throwable {
		inputText(pom.getInstancelp().getUsername(), FileReadManager.getInstance_FRM().getInstance_CR().get_Uname());
	}

	@And("^User is enter the password in pasword field$")
	public void user_is_enter_the_password_in_pasword_field() throws Throwable {
		inputText(pom.getInstancelp().getPassword(), "12345678");
	}

	@Then("^User is enter the Submit Button$")
	public void user_is_enter_the_Submit_Button() throws Throwable {
		clickButton(pom.getInstancelp().getSubmit());
	}

	
	
	

}
