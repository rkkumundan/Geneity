$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the RightMove Web Application functionality for Sale",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify if unsigned in user able to login application",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123"
      ],
      "line": 20,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify if unsigned in user able to login application",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "unsigned in user submits the form",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 7027398205,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 140893428,
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
  "duration": 541178372,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 1665066039,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 92252222,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify if unsigned in user able to login application with Wrong credentials",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "unsigned in user should be able to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "unsigned in user submits the form with wrong credentials",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 31,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty"
      ],
      "line": 32,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;;2"
    },
    {
      "cells": [
        "123456",
        "g3n31ty123"
      ],
      "line": 33,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;;3"
    },
    {
      "cells": [
        "g3n31ty123",
        "g3n31ty123"
      ],
      "line": 34,
      "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Verify if unsigned in user able to login application with Wrong credentials",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "unsigned in user should be able to enter \"rajqa\" and \"g3n31ty\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "unsigned in user submits the form with wrong credentials",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 3077274916,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 122357726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajqa",
      "offset": 42
    },
    {
      "val": "g3n31ty",
      "offset": 54
    }
  ],
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_enter_and(String,String)"
});
formatter.result({
  "duration": 512038763,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form_with_wrong_credentials()"
});
formatter.result({
  "duration": 596587846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 89439632,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify if unsigned in user able to login application with Wrong credentials",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "unsigned in user should be able to enter \"123456\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "unsigned in user submits the form with wrong credentials",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 2645102225,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 75621387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    },
    {
      "val": "g3n31ty123",
      "offset": 55
    }
  ],
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_enter_and(String,String)"
});
formatter.result({
  "duration": 605368864,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form_with_wrong_credentials()"
});
formatter.result({
  "duration": 468016292,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 95410627,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify if unsigned in user able to login application with Wrong credentials",
  "description": "",
  "id": "to-test-the-rightmove-web-application-functionality-for-sale;verify-if-unsigned-in-user-able-to-login-application-with-wrong-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "unsigned in user opens the genity url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "unsigned in user should be able to see the page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "unsigned in user should be able to enter \"g3n31ty123\" and \"g3n31ty123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "unsigned in user submits the form with wrong credentials",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 2791408255,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 86306727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "g3n31ty123",
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
  "duration": 705845639,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form_with_wrong_credentials()"
});
formatter.result({
  "duration": 565969019,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "duration": 93865089,
  "status": "passed"
});
});