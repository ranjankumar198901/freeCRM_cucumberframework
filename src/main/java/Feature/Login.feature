Feature: Login Action

#Without Example keyword
#Scenario: Successful login using valid credentials
#
#	Given user is already in login page
#	When Title of the login page is free CRM
#	Then user enter "Ranjankumar03@gmail.com" and "Abcdef@123"
#	Then user click on login Button
#	Then user is on home page
#	Then logout of application
	
# Example keyword
Scenario Outline: Successful login using valid credentials

	Given user is already in login page
	When Title of the login page is free CRM
	Then user enter "<username>" and "<password>"
	Then user click on login Button
	Then user is on home page
	Then logout of application
	
Examples:
		| username | password|
		| Ranjankumar03@gmail.com| Abcdef@123|
		| abc| xyz123|
