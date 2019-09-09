
Feature: Free CRM Contacts

 
  Scenario Outline: Free CRN create a new contact scenario
   Given user is already in login page
    Then user enter "<username>" and "<password>"
    Then user click on login Button
    Then user is on home page
    Then user moves to new contact page
    Then user enters new contact details "<firstname>" and "<Latname>" and "<position>"
    Then logout of application
    
 
 Examples: 
      | username | password| firstname	| Latname	| position|
			| Ranjankumar03@gmail.com| Abcdef@123| Naveen	| k	| tester1|
			| Ranjankumar03@gmail.com| Abcdef@123| Ramesh	| A	| tester1|
