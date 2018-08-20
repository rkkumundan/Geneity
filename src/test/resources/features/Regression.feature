Feature: To Test the RightMove Web Application functionality for Sale


#@RegressionTest
Scenario: Verify if unsigned user able to open the Genity Customer webpage
Given unsigned in user opens the genity url in chrome web browser
Then unsigned in user should be able to see the page
And unsigned in user closes the browser

@RegressionTest
Scenario Outline: Verify if unsigned in user able to login application
Given unsigned in user opens the genity url in chrome web browser
When unsigned in user should be able to see the page
Then unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form
And unsigned in user closes the browser

Examples:
| username  | password  | 
| rajqa     | g3n31ty123| 

@RegressionTest
Scenario Outline: Verify if unsigned in user able to login application with Wrong credentials
Given unsigned in user opens the genity url in chrome web browser
When unsigned in user should be able to see the page
Then unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form with wrong credentials
And unsigned in user closes the browser

Examples:
| username  | password   | 
| rajqa     | g3n31ty	 | 
| 123456    | g3n31ty123 | 
| g3n31ty123| g3n31ty123 | 
