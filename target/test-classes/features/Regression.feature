Feature: To Test the RightMove Web Application functionality for Sale


@RegressionTest
Scenario: Verify if uunsigned in user able to login application
Given unsigned in user opens the genity url in firefox web browser
Then unsigned in user opens the genity url in firefox web browser2


@RegressionTest
Scenario: Verify if unsigned user able to open the Genity Customer webpage
Given unsigned in user opens the genity url in chrome web browser
Then unsigned in user should be able to see the page
And unsigned in user closes the browser

@RegressionTest
Scenario Outline: Verify if uunsigned in user able to login application
Given unsigned in user opens the genity url in chrome web browser
When unsigned in user should be able to see the page
Then unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form

Examples:
| username  | password  | 
| rturk     | g3n31ty123| 


