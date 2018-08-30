Feature: To Test the Geneity frontend functionality 

#@SmokeTest
Scenario: Verify if unsigned user able to open the Geneity Customer webpage
Given unsigned in user opens the geneity url in web browser
Then unsigned in user should be able to see the page
And unsigned or signed in user closes the browser

#@SmokeTest
Scenario Outline: Verify if unsigned in user able to login application with Wrong credentials
Given unsigned in user opens the geneity url in web browser
When unsigned in user should be able to see the page
Then unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form with wrong credentials
And unsigned or signed in user closes the browser

Examples:
| username  | password   | 
| rajqa     | g3n31ty 	 | 
| dummyuser | g3n31ty123 | 
| g3n31ty123| g3n31ty123 | 

#@SmokeTest
Scenario Outline: Verify if unsigned in user able to login application
Given unsigned in user opens the geneity url in web browser
When unsigned in user should be able to see the page
Then unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form
And signed in user logsout from webapplication
And unsigned or signed in user closes the browser

Examples:
| username  | password  | 
| rajqa     | g3n31ty123| 

#@SmokeTest
Scenario Outline: Verify if singed user able to click on the account & is able to check the Betslist, Bonus and Cashier
Given unsigned in user opens the geneity url in web browser
When unsigned in user should be able to see the page
And unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form
Then signed in user clicks on My account to check the balance
And signed in user should able to see betlist, bonus and cashier in my account popup
And signed in user logsout from webapplication
And unsigned or signed in user closes the browser

Examples:
| username  | password  | 
| rajqa     | g3n31ty123| 


#@SmokeTest
Scenario Outline: Verify if a Vaild user with Balance is able to Place a bet for Inplay event
Given unsigned in user opens the geneity url in web browser
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
| username  | password  | sport     	| value |
| rajqa     | g3n31ty123| Football 		| 1.00  |
| rajqa     | g3n31ty123| Basketball	| 1.00  |
| rajqa     | g3n31ty123| Volleyball	| 1.00  |

#@SmokeTest
Scenario Outline: Verify if a Vaild user with zero ('0') balance shouldnot be able to Place a bet for Inplay event
Given unsigned in user opens the geneity url in web browser
When unsigned in user should be able to see the page
And unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form
And signed in user able to click on the "<sport>"
Then singed in user should able to open the "<sport>" page
And singed in user should able to select the selection and place the bet with "<value>"
And verify that Bet is not placed
And signed in user logsout from webapplication
And unsigned or signed in user closes the browser

Examples:
| username   	| password 		| sport			| value |
| zerouser01	| g3n31ty123	| Football	| 1.00  |

@SmokeTest
Scenario Outline: Verify if a Vaild user able is able to Place a double bets for Inplay event
Given unsigned in user opens the geneity url in web browser
And unsigned in user should be able to see the page
And unsigned in user should be able to enter "<username>" and "<password>"
And unsigned in user submits the form
When signed in user able to click on the "<sport1>"
Then singed in user should able to open the "<sport1>" page
And singed in user should able to select the selection for the "<sport2>"
And signed in user able to click on the "<sport2>"
Then singed in user should able to open the "<sport2>" page
And singed in user should able to select the selection for the "<sport2>"
And singed in user should be able to enter the value for double bet with "<value>"
And verify that Bet is not placed
And signed in user logsout from webapplication
And unsigned or signed in user closes the browser

Examples:
|	username	|	password  	| sport1		| sport2 | value |
|	rajqa     | g3n31ty123	| Football	| Tennis | 2.00  |

