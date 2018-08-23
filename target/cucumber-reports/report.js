$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the Geneity frontend functionality",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify if unsigned in user able to login application",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-unsigned-in-user-able-to-login-application",
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
formatter.step({
  "line": 15,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-unsigned-in-user-able-to-login-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-unsigned-in-user-able-to-login-application;;1"
    },
    {
      "cells": [
        "rajqa",
        "g3n31ty123"
      ],
      "line": 19,
      "id": "to-test-the-geneity-frontend-functionality;verify-if-unsigned-in-user-able-to-login-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Verify if unsigned in user able to login application",
  "description": "",
  "id": "to-test-the-geneity-frontend-functionality;verify-if-unsigned-in-user-able-to-login-application;;2",
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
formatter.step({
  "line": 15,
  "name": "unsigned in user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_genity_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 7246731342,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 121034607,
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
  "duration": 718233875,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_submits_the_form()"
});
formatter.result({
  "duration": 9210305542,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.39.562737 (dba483cee6a5f15e2e2d73df16968ab10b38a2bf),platform\u003dLinux 4.4.0-133-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027gnl-l-w-015\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-133-generic\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562737 (dba483cee6a5f1..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 3985d7f8d283ab6bb8f6c5302affd4ec\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027My Account\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:344)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:423)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:305)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\tat e2e.Geneity.steps.StepMethods.unsigned_in_user_submits_from(StepMethods.java:58)\n\tat e2e.Geneity.steps.StepDefinations.unsigned_in_user_submits_the_form(StepDefinations.java:31)\n\tat ✽.And unsigned in user submits the form(Regression.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});