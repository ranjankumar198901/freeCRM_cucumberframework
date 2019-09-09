$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/cucumber/freeCRM_cucumberframework/src/main/java/com/qa/feature/freeCRM.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@tag"
    }
  ],
  "line": 2,
  "name": "Free Feature Application test   I want to use this template for my feature file",
  "description": "",
  "id": "free-feature-application-test---i-want-to-use-this-template-for-my-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# @tag1"
    }
  ],
  "line": 5,
  "name": "validate Free CRM home page Test",
  "description": "",
  "id": "free-feature-application-test---i-want-to-use-this-template-for-my-feature-file;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User opens browserThen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logs into app",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "validate logedin username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browserThen()"
});
formatter.result({
  "duration": 34975909762,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 169649016,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_logs_into_app()"
});
formatter.result({
  "duration": 899762,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat com.qa.page.Loginpage.login(Loginpage.java:44)\r\n\tat com.qa.StepDefination.HomePageSteps.user_logs_into_app(HomePageSteps.java:36)\r\n\tat ✽.Then user logs into app(D:/cucumber/freeCRM_cucumberframework/src/main/java/com/qa/feature/freeCRM.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.validate_logedin_username()"
});
formatter.result({
  "status": "skipped"
});
});