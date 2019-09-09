#@tag
Feature: Free Feature Application test   I want to use this template for my feature file

 # @tag1
  Scenario: validate Free CRM home page Test
    Given User opens browserThen
    Then user is on login page
    Then user logs into app
    
   
    Then validate home page title
    Then validate logedin username

 # @tag2
 # Scenario Outline: Title of your scenario outline
 #   Given I want to write a step with <name>
 #   When I check for the <value> in step
 #   Then I verify the <status> in step

 #Examples:
  
 #     | name  | value | status  |
 #     | name1 |     5 | success |
 #     | name2 |     7 | Fail    |
