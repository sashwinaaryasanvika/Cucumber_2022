$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Automation Application",
  "description": "",
  "id": "hotel-booking-in-automation-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 980600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is click on sigin button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is enter the \"nandhinivaradhan91@gmail.com\" in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is enter the \"A@rya123\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the Login Button and Its navigate to the Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginData.user_launch_in_the_application()"
});
formatter.result({
  "duration": 5627336200,
  "status": "passed"
});
formatter.match({
  "location": "LoginData.user_is_click_on_sigin_button()"
});
formatter.result({
  "duration": 1979983800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandhinivaradhan91@gmail.com",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 400752600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@rya123",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 105465500,
  "status": "passed"
});
formatter.match({
  "location": "LoginData.user_click_on_the_Login_Button_and_Its_navigate_to_the_Hotel_Page()"
});
formatter.result({
  "duration": 2201756700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Select Women dress",
  "description": "",
  "id": "hotel-booking-in-automation-application;select-women-dress",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@regression_run"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is select the Women Dress",
  "keyword": "Given "
});
formatter.match({
  "location": "WomenDress.user_is_select_the_Women_Dress()"
});
formatter.result({
  "duration": 3204110100,
  "status": "passed"
});
formatter.after({
  "duration": 196900,
  "status": "passed"
});
formatter.before({
  "duration": 57700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is click on sigin button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is enter the \"nandhinivaradhan91@gmail.com\" in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is enter the \"A@rya123\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the Login Button and Its navigate to the Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginData.user_launch_in_the_application()"
});
formatter.result({
  "duration": 1595156700,
  "status": "passed"
});
formatter.match({
  "location": "LoginData.user_is_click_on_sigin_button()"
});
formatter.result({
  "duration": 775221100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027login\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.66)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-7FRJBO5L\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\NANDHI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53423}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dddef89a948072f41610cdd653aa62ec\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027login\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.baseclass_cucumber.BaseClasss.click_Button(BaseClasss.java:36)\r\n\tat com.stepdefinition.LoginData.user_is_click_on_sigin_button(LoginData.java:54)\r\n\tat ✽.When User is click on sigin button(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandhinivaradhan91@gmail.com",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A@rya123",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginData.user_click_on_the_Login_Button_and_Its_navigate_to_the_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Payment Details",
  "description": "",
  "id": "hotel-booking-in-automation-application;payment-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression_run"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is select the payment type",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 68800,
  "status": "passed"
});
});