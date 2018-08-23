$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the Geneity frontend functionality",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "signed in user able to click on the \"\u003csport\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "singed in user should able to open the \"\u003csport\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "singed in user should able to select the selection and place the bet with \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "sport",
        "value"
      ],
      "line": 48,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123",
        "Football",
        "1.00"
      ],
      "line": 49,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;2"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123",
        "Volleyball",
        "1.00"
      ],
      "line": 50,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "signed in user able to click on the \"Football\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "singed in user should able to open the \"Football\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "singed in user should able to select the selection and place the bet with \"1.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 6335637102,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 111390257,
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
  "duration": 614514697,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1579050561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 37
    }
  ],
  "location": "StepDefinations.unsigned_in_user_able_to_click_on_the(String)"
});
formatter.result({
  "duration": 3324793877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 40
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_open_the_page(String)"
});
formatter.result({
  "duration": 86794651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.00",
      "offset": 75
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_select_the_selection_and_place_the_bet_with(String)"
});
formatter.result({
  "duration": 428707408,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 79430187,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "signed in user able to click on the \"Volleyball\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "singed in user should able to open the \"Volleyball\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "singed in user should able to select the selection and place the bet with \"1.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 2732335179,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 137439406,
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
  "duration": 623683565,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1760220001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volleyball",
      "offset": 37
    }
  ],
  "location": "StepDefinations.unsigned_in_user_able_to_click_on_the(String)"
});
formatter.result({
  "duration": 978228113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volleyball",
      "offset": 40
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_open_the_page(String)"
});
formatter.result({
  "duration": 144725747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.00",
      "offset": 75
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_select_the_selection_and_place_the_bet_with(String)"
});
formatter.result({
  "duration": 409699844,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 74077793,
  "status": "passed"
});
});