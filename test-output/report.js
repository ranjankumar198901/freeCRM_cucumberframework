$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/cucumber/freeCRM_cucumberframework/src/main/java/Feature/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "Ranjankumar03@gmail.com",
        "Abcdef@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "logout of application",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 20699875727,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.title_of_the_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 15393241,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1779103409,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_click_on_login_Button()"
});
formatter.result({
  "duration": 5153636336,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 58920923,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 5720844621,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 34442647098,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.logout_of_application()"
});
formatter.result({
  "duration": 7478205712,
  "status": "passed"
});
});