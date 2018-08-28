Feature: To Test the Geneity frontend functionality 

#@SmokeTest
Scenario: Verify if unsigned user able to open the Geneity Customer webpage
Given unsigned in user opens the geneity url in chrome web browser
Then unsigned in user should be able to see the page
And unsigned or signed in user closes the browser

#@SmokeTest
Scenario Outline: Verify if unsigned in user able to login application
Given unsigned in user opens the geneity url in chrome web browser
When unsigned in user should be able to see the page
Then unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form
And signed in user logsout from webapplication
And unsigned or signed in user closes the browser

Examples:
| username  | password  | 
| rajqa     | g3n31ty123| 

#@SmokeTest
Scenario Outline: Verify if unsigned in user able to login application with Wrong credentials
Given unsigned in user opens the geneity url in chrome web browser
When unsigned in user should be able to see the page
Then unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form with wrong credentials
And unsigned or signed in user closes the browser

Examples:
| username  | password   | 
| rajqa     | g3n31ty 	 | 
| dummyuser | g3n31ty123 | 
| g3n31ty123| g3n31ty123 | 


@SmokeTest
Scenario Outline: Verify if a Vaild user able to Place a bet for Inplay event
Given unsigned in user opens the geneity url in chrome web browser
When unsigned in user should be able to see the page
And unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form
And signed in user able to click on the "<sport>"
Then singed in user should able to open the "<sport>" page
And singed in user should able to select the selection and place the bet with "<value>"
And verify if Bet is placed
And signed in user logsout from webapplication
And unsigned or signed in user closes the browser

Examples:
| username  | password  | sport     		 | value |
| rajqa     | g3n31ty123| Football   		 | 1.00  |
| rajqa     | g3n31ty123| Basketball  	 | 1.00  |
| rajqa     | g3n31ty123| Volleyball 	   | 1.00  |


