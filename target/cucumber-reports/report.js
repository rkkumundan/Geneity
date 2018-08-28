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
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "unsigned in user opens the geneity url in web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "unsigned in user should be able to see the page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_web_browser()"
});
formatter.result({
  "duration": 3139550552,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 185670515,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_or_signed_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 181931113,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "unsigned in user opens the geneity url in web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "signed in user able to click on the \"\u003csport\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "singed in user should able to open the \"\u003csport\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "singed in user should able to select the selection and place the bet with \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 65,
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
      "line": 66,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123",
        "Football",
        "1.00"
      ],
      "line": 67,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 67,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "unsigned in user opens the geneity url in web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "signed in user able to click on the \"Football\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "singed in user should able to open the \"Football\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "singed in user should able to select the selection and place the bet with \"1.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_web_browser()"
});
formatter.result({
  "duration": 2834710406,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 149092202,
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
  "duration": 599911271,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1693791471,
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
  "duration": 4131360925,
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
  "duration": 63546053,
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
  "duration": 3576327797,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_if_Bet_is_placed()"
});
formatter.result({
  "duration": 12287212102,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.signed_in_user_logsout_from_webapplication()"
});
formatter.result({
  "duration": 6955261272,
  "error_message": "java.lang.NullPointerException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy14.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\tat e2e.Geneity.interaction.UserLogout.LogoutUser(UserLogout.java:26)\n\tat e2e.Geneity.feature.steps.StepDefinations.signed_in_user_logsout_from_webapplication(StepDefinations.java:66)\n\tat ✽.And signed in user logsout from webapplication(Regression.feature:62)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.unsigned_or_signed_in_user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});