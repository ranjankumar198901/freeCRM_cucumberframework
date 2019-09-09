package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
			features = "E:\\JavaSeleniumUdmey\\workspace\\FreeCRM\\src\\main\\java\\Feature\\contacts.feature",
			glue= {"stepdef"},  //tells where the step defination is available
			format ={"pretty","html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.xml"},  //to generate reporting format
			dryRun= false,  //checking the mapping is correct or not 
			monochrome = true, //display the consol output in a readable format 
			strict = true//it will fail if there are any pending steps in step definition, check if any step is not defined
			)
public class TestRunner
{

}
