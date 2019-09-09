package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDef 
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

@Then("^user enter \"(.*)\" and \"(.*)\"$")
public void user_enter_user_name_and_password1(String username, String password) 
{
	driver.findElement(By.name("email")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);


}

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

@Then("^user moves to new contact page$")
public void user_moves_to_new_contact_page() throws InterruptedException 
{
   driver.findElement(By.xpath("//span[text()='Contacts']")).click();
  Thread.sleep(5000);
   driver.findElement(By.xpath("//div[@id='dashboard-toolbar']//a[@href='/contacts/new']")).click();
	
}

@Then("^user enters new contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_new_contact_details_and_and(String arg1, String arg2, String arg3) throws InterruptedException 
{
   driver.findElement(By.name("first_name")).sendKeys(arg1);
   driver.findElement(By.name("last_name")).sendKeys(arg2);
   driver.findElement(By.name("department")).sendKeys(arg3);
   Thread.sleep(5000);
   driver.findElement(By.xpath("//div[@id='dashboard-toolbar']//button[contains(text(),'Save')]")).click();
}



}



