$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the Geneity frontend functionality",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify if unsigned user able to open the Geneity Customer webpage",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-unsigned-user-able-to-open-the-geneity-customer-webpage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "unsigned in user opens the geneity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "unsigned in user should be able to see the page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 7201163409,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 185221278,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 73323357,
  "status": "passed"
});
});