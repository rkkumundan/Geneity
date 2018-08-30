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
  "name": "singed in user should be able to enter the value for double bet with \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 102,
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
      "line": 103,
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
      "line": 104,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-is-able-to-place-a-double-bets-for-inplay-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 104,
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
  "name": "singed in user should be able to enter the value for double bet with \"2.00\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_web_browser()"
});
formatter.result({
  "duration": 14954516716,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 134764843,
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
  "duration": 873257521,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1853786023,
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
  "duration": 5053196032,
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
  "duration": 97857012,
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
  "duration": 109990825,
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
  "duration": 5539518082,
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
  "duration": 39775885,
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
  "duration": 107293697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.00",
      "offset": 70
    }
  ],
  "location": "StepDefinations.singed_in_user_should_be_able_to_enter_the_value_for_double_bet_with(String)"
});
formatter.result({
  "duration": 282260876,
  "status": "passed"
});
});