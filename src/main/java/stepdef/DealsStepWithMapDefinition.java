package stepdef;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


//Data table with maps 
public class DealsStepWithMapDefinition 
{

	WebDriver driver;
	

@Given("^user is already in login page$")
public void user_is_already_in_login_page() 
{
	driver = new ChromeDriver();
	driver.get("https://ui.freecrm.com/");
	driver.manage().window().maximize();
}

@When("^Title of the login page is free CRM$")
public void title_of_the_login_page_is_free_CRM() 
{
    String title = driver.getTitle();
    System.out.println(title);
    Assert.assertEquals("CRM", title);
    
}

//@Then("^user enter username and password$")
//public void user_enter_user_name_and_password1(String username, String password) 
//{
//	driver.findElement(By.name("email")).sendKeys(username);
//	driver.findElement(By.name("password")).sendKeys(password);
//
//
//}

@Then("^user click on login Button$")
public void user_click_on_login_Button() throws InterruptedException 
{
	driver.findElement(By.xpath("//div[text()='Login']")).click();
	Thread.sleep(5000);
}

@Then("^user is on home page$")
public void user_is_on_home_page()
{
	
	
	WebElement str = driver.findElement(By.xpath("//span[text()='Home']"));
	String txt = str.getText();
	System.out.println(txt);
	Assert.assertEquals("Home", txt);
}




@Then("^logout of application$")
public void logout_of_application() throws Throwable 
{
	driver.findElement(By.xpath("//div[@class='ui buttons']/div[1]")).click();
	Thread.sleep(5000);
	driver.findElement(By.xpath("//span[text()='Log Out']")).click();

	driver.close();
   
}

@Then("^user enter username and password$")
public void user_enter_username_and_password(DataTable credentials) 
{
	for (Map<String, String> data : credentials.asMaps(String.class, String.class)) 
	{    
		driver.findElement(By.name("email")).sendKeys(data.get("username"));
		driver.findElement(By.name("password")).sendKeys(data.get("password"));
	
	}
}

@Then("^user moves to new deal page$")
public void user_moves_to_new_deal_page() throws InterruptedException 
{
	driver.findElement(By.xpath("//span[text()='Deals']")).click();
	Thread.sleep(5000);
   driver.findElement(By.xpath("//div[@id='dashboard-toolbar']//a[@href='/deals/new']")).click();

}

@Then("^user enters deal details$")
public void user_enters_deal_details(DataTable dealdata) throws InterruptedException 

{
	for (Map<String, String> data : dealdata.asMaps(String.class, String.class)) 
	{
	driver.findElement(By.name("title")).sendKeys(data.get("title"));
	driver.findElement(By.name("amount")).sendKeys(data.get("amount"));
	driver.findElement(By.name("probability")).sendKeys(data.get("probability"));
	driver.findElement(By.name("commission")).sendKeys(data.get("commission"));
	
	driver.findElement(By.xpath("//div[@id='dashboard-toolbar']//button[contains(text(),'Save')]")).click();
	Thread.sleep(5000);
	driver.findElement(By.xpath("//span[text()='Deals']")).click();
	Thread.sleep(5000);
    driver.findElement(By.xpath("//div[@id='dashboard-toolbar']//a[@href='/deals/new']")).click();

	}
}



}



