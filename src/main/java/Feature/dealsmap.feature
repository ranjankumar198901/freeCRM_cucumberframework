Feature: Deal data creation

  Scenario: Free CRM Create a new deal scenario
    Given user is already in login page
    When Title of the login page is free CRM
    Then user enter username and password
      | username                | password   |
      | Ranjankumar03@gmail.com | Abcdef@123 |
    Then user click on login Button
    Then user is on home page
    Then user moves to new deal page
    Then user enters deal details
      | title      | amount | probability | commission |
      | test deal1 |   1000 |          50 |         10 |
      | test deal2 |   2000 |          60 |         20 |
      | test deal3 |   3000 |          70 |         30 |
    Then logout of application
