$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the Geneity frontend functionality",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "unsigned in user opens the geneity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "signed in user able to click on the \"\u003csport\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "singed in user should able to open the \"\u003csport\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "singed in user should able to select the selection and place the bet with \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
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
      "line": 51,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123",
        "Football",
        "1.00"
      ],
      "line": 52,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;2"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123",
        "Basketball",
        "1.00"
      ],
      "line": 53,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;3"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123",
        "Volleyball",
        "1.00"
      ],
      "line": 54,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "unsigned in user opens the geneity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "signed in user able to click on the \"Football\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "singed in user should able to open the \"Football\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "singed in user should able to select the selection and place the bet with \"1.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 4533685275,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 134183114,
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
  "duration": 679862314,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1616711415,
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
  "duration": 4264460847,
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
  "duration": 69885299,
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
  "duration": 389851362,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_if_Bet_is_placed()"
});
formatter.result({
  "duration": 11188097798,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.signed_in_user_logsout_from_webapplication()"
});
formatter.result({
  "duration": 4146863240,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.39.562737 (dba483cee6a5f15e2e2d73df16968ab10b38a2bf),platform\u003dLinux 4.4.0-133-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027gnl-l-w-015\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-133-generic\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562737 (dba483cee6a5f1..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: eab80a23c845903109eac99afa5cfd20\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:317)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy14.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\tat e2e.Geneity.objects.UserLogout.LogoutUser(UserLogout.java:30)\n\tat e2e.Geneity.steps.StepDefinations.signed_in_user_logsout_from_webapplication(StepDefinations.java:58)\n\tat ✽.And signed in user logsout from webapplication(Regression.feature:47)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.unsigned_or_signed_in_user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 53,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "unsigned in user opens the geneity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "signed in user able to click on the \"Basketball\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "singed in user should able to open the \"Basketball\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "singed in user should able to select the selection and place the bet with \"1.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 2793336773,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 174353540,
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
  "duration": 586864089,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1512934579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Basketball",
      "offset": 37
    }
  ],
  "location": "StepDefinations.unsigned_in_user_able_to_click_on_the(String)"
});
formatter.result({
  "duration": 1154218880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Basketball",
      "offset": 40
    }
  ],
  "location": "StepDefinations.singed_in_user_should_able_to_open_the_page(String)"
});
formatter.result({
  "duration": 169621287,
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
  "duration": 16717195970,
  "error_message": "java.lang.NullPointerException\n\tat e2e.Geneity.steps.StepMethods.signed_in_user_makes_selection_and_submits_the_bet_with_value(StepMethods.java:38)\n\tat e2e.Geneity.steps.StepDefinations.singed_in_user_should_able_to_select_the_selection_and_place_the_bet_with(StepDefinations.java:77)\n\tat ✽.And singed in user should able to select the selection and place the bet with \"1.00\"(Regression.feature:45)\n",
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
formatter.scenario({
  "line": 54,
  "name": "Verify if a Vaild user able to Place a bet for Inplay event",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-a-vaild-user-able-to-place-a-bet-for-inplay-event;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "unsigned in user opens the geneity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "signed in user able to click on the \"Volleyball\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "singed in user should able to open the \"Volleyball\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "singed in user should able to select the selection and place the bet with \"1.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify if Bet is placed",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "signed in user logsout from webapplication",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "unsigned or signed in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_geneity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 4829037501,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 146561794,
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
  "duration": 432638945,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1698431449,
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
  "duration": 881091204,
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
  "duration": 149650737,
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
  "duration": 468778805,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_if_Bet_is_placed()"
});
formatter.result({
  "duration": 11131150923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.signed_in_user_logsout_from_webapplication()"
});
formatter.result({
  "duration": 2311425778,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_or_signed_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 72816375,
  "status": "passed"
});
});