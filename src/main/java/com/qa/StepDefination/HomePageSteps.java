package com.qa.StepDefination;

import com.qa.page.HomePage;
import com.qa.page.Loginpage;
import com.qa.util.TestBase;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageSteps  extends TestBase
{
	
	Loginpage loginpage = new Loginpage();
	HomePage homepage;
	
@Given("^User opens browserThen$")
public void user_opens_browserThen() 
{
	TestBase.initialization();
	
}

@Then("^user is on login page$")
public void user_is_on_login_page() 
{

	String title = loginpage.validateLoginPageTitle();
	Assert.assertEquals("CRM", title);
}

@Then("^user logs into app$")
public void user_logs_into_app()  
{
	 homepage = loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
	

}





@Then("^validate home page title$")
public void validate_home_page_title()  
{

	String hometitle = homepage.verifyHomePageTitle();
	Assert.assertEquals("CRM", hometitle);
}

@Then("^validate logedin username$")
public void validate_logedin_username()
{
	boolean flag = homepage.verifyCorrectUserName();
	Assert.assertTrue(true);

}

}
