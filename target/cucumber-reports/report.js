$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the RightMove Web Application functionality for Sale",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify if unsigned user able to open the Genity Customer webpage",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-user-able-to-open-the-genity-customer-webpage",
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
  "name": "unsigned in user opens the genity url in chrome web browser",
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
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 7944390985,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 128098146,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 116172506,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify if uunsigned in user able to login application",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-uunsigned-in-user-able-to-login-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-uunsigned-in-user-able-to-login-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-uunsigned-in-user-able-to-login-application;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123"
      ],
      "line": 18,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-uunsigned-in-user-able-to-login-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Verify if uunsigned in user able to login application",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-uunsigned-in-user-able-to-login-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 2704213270,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 122036070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajqa",
      "offset": 42
    },
    {
      "val": "g3n31ty123",
      "offset": 54
    }
  ],
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_enter_and(String,String)"
});
formatter.result({
  "duration": 367800826,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 248143541,
  "status": "passed"
});
});