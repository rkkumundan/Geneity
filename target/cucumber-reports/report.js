$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the Geneity frontend functionality",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Verify if a Vaild user able is able to Place a double bets for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-is-able-to-place-a-double-bets-for-inplay-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "unsigned in user opens the geneity url in web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "unsigned in user should be able to see the page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "signed in user able to click on the \"\u003csport1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "singed in user should able to open the \"\u003csport1\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "singed in user should able to select the selection for the \"\u003csport2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "signed in user able to click on the \"\u003csport2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "singed in user should able to open the \"\u003csport2\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "singed in user should able to select the selection for the \"\u003csport2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "singed in user should be able to enter the value for double bet with \"\u003cvalue\u003e\" and places the bet",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 105,
  "name": "",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-is-able-to-place-a-double-bets-for-inplay-event;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "sport1",
        "sport2",
        "value"
      ],
      "line": 106,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-is-able-to-place-a-double-bets-for-inplay-event;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123",
        "Football",
        "Tennis",
        "2.00"
      ],
      "line": 107,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-is-able-to-place-a-double-bets-for-inplay-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 107,
  "name": "Verify if a Vaild user able is able to Place a double bets for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-is-able-to-place-a-double-bets-for-inplay-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "unsigned in user opens the geneity url in web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "unsigned in user should be able to see the page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "signed in user able to click on the \"Football\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "singed in user should able to open the \"Football\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "singed in user should able to select the selection for the \"Tennis\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "signed in user able to click on the \"Tennis\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "singed in user should able to open the \"Tennis\" page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "singed in user should able to select the selection for the \"Tennis\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "singed in user should be able to enter the value for double bet with \"2.00\" and places the bet",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_web_browser()"
});
formatter.result({
  "duration": 14195717095,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 204050187,
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
  "duration": 819575109,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1781909512,
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
  "duration": 6880672201,
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
  "duration": 45917836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tennis",
      "offset": 60
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_select_the_selection_for_the(String)"
});
formatter.result({
  "duration": 5095131678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tennis",
      "offset": 37
    }
  ],
  "location": "StepDefinations.unsigned_in_user_able_to_click_on_the(String)"
});
formatter.result({
  "duration": 11453742811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tennis",
      "offset": 40
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_open_the_page(String)"
});
formatter.result({
  "duration": 39889462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tennis",
      "offset": 60
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_select_the_selection_for_the(String)"
});
formatter.result({
  "duration": 2007256830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.00",
      "offset": 70
    }
  ],
  "location": "StepDefinations.singed_in_user_should_be_able_to_enter_the_value_for_double_bet_with_and_places_the_bet(String)"
});
formatter.result({
  "duration": 284473128,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_if_Bet_is_placed()"
});
formatter.result({
  "duration": 39511216468,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.signed_in_user_logsout_from_webapplication()"
});
formatter.result({
  "duration": 14252280480,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_or_signed_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 244328463,
  "status": "passed"
});
});t e2e.Geneity.interaction.UserPlacesDoubleBet.UserPlacestheDoubleBet(UserPlacesDoubleBet.java:17)\n\tat e2e.Geneity.feature.steps.StepDefinations.singed_in_user_should_be_able_to_enter_the_value_for_double_bet_with_and_places_the_bet(StepDefinations.java:122)\n\tat ✽.And singed in user should be able to enter the value for double bet with \"2.00\" and places the bet(Regression.feature:100)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.verify_if_Bet_is_placed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.signed_in_user_logsout_from_webapplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.unsigned_or_signed_in_user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});