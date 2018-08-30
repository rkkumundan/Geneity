$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the Geneity frontend functionality",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Verify if a Vaild user with zero (\u00270\u0027) balance shouldnot be able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-with-zero-(\u00270\u0027)-balance-shouldnot-be-able-to-place-a-bet-for-inplay-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "unsigned in user opens the geneity url in web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "signed in user able to click on the \"\u003csport\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "singed in user should able to open the \"\u003csport\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "singed in user should able to select the selection and place the bet with \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "verify that Bet is not placed",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-with-zero-(\u00270\u0027)-balance-shouldnot-be-able-to-place-a-bet-for-inplay-event;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "sport",
        "value"
      ],
      "line": 85,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-with-zero-(\u00270\u0027)-balance-shouldnot-be-able-to-place-a-bet-for-inplay-event;;1"
    },
    {
      "cells": [
        "zerouser01",
        "g3n31ty123",
        "Football",
        "1.00"
      ],
      "line": 86,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-with-zero-(\u00270\u0027)-balance-shouldnot-be-able-to-place-a-bet-for-inplay-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "Verify if a Vaild user with zero (\u00270\u0027) balance shouldnot be able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-with-zero-(\u00270\u0027)-balance-shouldnot-be-able-to-place-a-bet-for-inplay-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "unsigned in user opens the geneity url in web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "unsigned in user should be able to enter \"zerouser01\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "signed in user able to click on the \"Football\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "singed in user should able to open the \"Football\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "singed in user should able to select the selection and place the bet with \"1.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "verify that Bet is not placed",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_web_browser()"
});
formatter.result({
  "duration": 14868825284,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 170156261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zerouser01",
      "offset": 42
    },
    {
      "val": "g3n31ty123",
      "offset": 59
    }
  ],
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_enter_and(String,String)"
});
formatter.result({
  "duration": 803885754,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 2106527108,
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
  "duration": 5559646889,
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
  "duration": 106453813,
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
  "duration": 662380581,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_that_Bet_is_not_placed()"
});
formatter.result({
  "duration": 669466899,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.signed_in_user_logsout_from_webapplication()"
});
formatter.result({
  "duration": 5417789201,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_or_signed_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 256790927,
  "status": "passed"
});
});