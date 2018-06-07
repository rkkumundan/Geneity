package e2e.Genity.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinations {
	public WebDriver driver = new ChromeDriver();
	StepMethods SM = new StepMethods(driver);

@Given("^unsigned in user opens the genity url in chrome web browser$")
public void unsigned_in_user_opens_the_genity_url_in_chrome_web_browser() throws Throwable {
    SM.user_opens_genbet_url();
}

@Then("^unsigned in user should be able to see the page$")
public void unsigned_in_user_should_be_able_to_see_the_page() throws Throwable {
	SM.user_check_web_title_assertion();
}

@Then("^unsigned in user closes the browser$")
public void unsigned_in_user_closes_the_browser() throws Throwable {
	SM.unsigned_in_user_closes_the_browser();
}
@Then("^unsigned in user should be able to enter \"([^\"]*)\" and \"([^\"]*)\"$")
public void unsigned_in_user_should_be_able_to_enter_and(String username, String password) throws Throwable {
    SM.unsigned_in_user_sends_username_and_password(username, password);
}
@Then("^unsigned in user submits the form$")
public void unsigned_in_user_submits_the_form() throws Throwable {
	SM.unsigned_in_user_submits_from();
}
}