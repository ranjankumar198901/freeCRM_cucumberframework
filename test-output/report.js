$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/JavaSeleniumUdmey/workspace/FreeCRM/src/main/java/Feature/contacts.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Contacts",
  "description": "",
  "id": "free-crm-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Free CRN create a new contact scenario",
  "description": "",
  "id": "free-crm-contacts;free-crn-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters new contact details \"\u003cfirstname\u003e\" and \"\u003cLatname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "logout of application",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-contacts;free-crn-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "Latname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-contacts;free-crn-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "Ranjankumar03@gmail.com",
        "Abcdef@123",
        "Naveen",
        "k",
        "tester1"
      ],
      "line": 17,
      "id": "free-crm-contacts;free-crn-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "Ranjankumar03@gmail.com",
        "Abcdef@123",
        "Ramesh",
        "A",
        "tester1"
      ],
      "line": 18,
      "id": "free-crm-contacts;free-crn-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRN create a new contact scenario",
  "description": "",
  "id": "free-crm-contacts;free-crn-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"Ranjankumar03@gmail.com\" and \"Abcdef@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters new contact details \"Naveen\" and \"k\" and \"tester1\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "logout of application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 18019523700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ranjankumar03@gmail.com",
      "offset": 12
    },
    {
      "val": "Abcdef@123",
      "offset": 42
    }
  ],
  "location": "stepDef.user_enter_user_name_and_password1(String,String)"
});
formatter.result({
  "duration": 815063700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_click_on_login_Button()"
});
formatter.result({
  "duration": 5155622500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 113084000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 5825050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naveen",
      "offset": 33
    },
    {
      "val": "k",
      "offset": 46
    },
    {
      "val": "tester1",
      "offset": 54
    }
  ],
  "location": "stepDef.user_enters_new_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 6646574000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.logout_of_application()"
});
formatter.result({
  "duration": 5586487700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRN create a new contact scenario",
  "description": "",
  "id": "free-crm-contacts;free-crn-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"Ranjankumar03@gmail.com\" and \"Abcdef@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters new contact details \"Ramesh\" and \"A\" and \"tester1\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "logout of application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 16072576700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ranjankumar03@gmail.com",
      "offset": 12
    },
    {
      "val": "Abcdef@123",
      "offset": 42
    }
  ],
  "location": "stepDef.user_enter_user_name_and_password1(String,String)"
});
formatter.result({
  "duration": 686316300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_click_on_login_Button()"
});
formatter.result({
  "duration": 5159113600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 80298600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 5843584300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramesh",
      "offset": 33
    },
    {
      "val": "A",
      "offset": 46
    },
    {
      "val": "tester1",
      "offset": 54
    }
  ],
  "location": "stepDef.user_enters_new_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 6573125900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.logout_of_application()"
});
formatter.result({
  "duration": 5564227900,
  "status": "passed"
});
});