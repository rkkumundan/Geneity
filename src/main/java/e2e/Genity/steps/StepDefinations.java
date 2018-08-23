package e2e.Genity.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

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
@Then("^unsigned in user submits the form with wrong credentials$")
public void unsigned_in_user_submits_the_form_with_wrong_credentials() throws Throwable {
    SM.unsigned_in_user_submits_from_with_wrong_credentials();
}
@When("^signed in user able to click on the \"([^\"]*)\"$")
public void unsigned_in_user_able_to_click_on_the(String sport) throws Throwable {
    SM.signed_in_user_clicks_on_sport(sport);
}
@Then("^singed in user should able to open the \"([^\"]*)\" page$")
public void singed_in_user_should_able_to_open_the_page(String sport) throws Throwable {
	SM.signed_in_user_clicks_on_sport_check_the_page_displayed(sport);
}
@Then("^singed in user should able to select the selection and place the bet with \"([^\"]*)\"$")
public void singed_in_user_should_able_to_select_the_selection_and_place_the_bet_with(String value) throws Throwable {
	SM.signed_in_user_makes_selection_and_submits_the_bet_with_value(value);
}
@Then("^verify if Bet is placed$")
public void verify_if_Bet_is_placed() throws Throwable {
  
}
}