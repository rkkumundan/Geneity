package e2e.Geneity.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import e2e.Geneity.objects.CheckIfBetPlaced;
import e2e.Geneity.objects.CloseBrowser;
import e2e.Geneity.objects.HomePageTitleAssertion;
import e2e.Geneity.objects.SportCheckAssertion;
import e2e.Geneity.objects.UserClicksSpecificSport;
import e2e.Geneity.objects.UserLogin;
import e2e.Geneity.objects.UserLogout;
import e2e.Geneity.objects.UserSubmitsLogin;
import e2e.Geneity.objects.UserSubmitsLoginInvalidCredentials;

public class StepDefinations {
	public WebDriver driver = new ChromeDriver();
	StepMethods SM = new StepMethods(driver);
	HomePageTitleAssertion homePageTitleAssertion;
	CloseBrowser closeBrowser;
	UserLogin userLogin;
	UserSubmitsLogin userSubmitsLogin;
	UserSubmitsLoginInvalidCredentials userSubmitsLoginInvalidCredentials;
	UserClicksSpecificSport userClicksSpecificSport;
	SportCheckAssertion sportCheckAssertion;
	UserLogout userLogout;
	CheckIfBetPlaced checkIfBetPlaced;

	@Given("^unsigned in user opens the geneity url in chrome web browser$")
	public void unsigned_in_user_opens_the_geneity_url_in_chrome_web_browser() throws Throwable {
		SM.user_opens_genbet_url();
	}
	@Then("^unsigned in user should be able to see the page$")
	public void unsigned_in_user_should_be_able_to_see_the_page() throws Throwable {
		homePageTitleAssertion  = new HomePageTitleAssertion(driver);
		homePageTitleAssertion.CheckTitleAssertion();
	}
	@Then("^unsigned or signed in user closes the browser$")
	public void unsigned_or_signed_in_user_closes_the_browser() throws Throwable {
		closeBrowser = new CloseBrowser(driver);
		closeBrowser.CloseCurrentBrowser();
	}
	@Then("^unsigned in user should be able to enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void unsigned_in_user_should_be_able_to_enter_and(String username, String password) throws Throwable {
		userLogin = new UserLogin(driver);
		userLogin.UserSendsData(username,password);
	}
	@Then("^unsigned in user submits the form$")
	public void unsigned_in_user_submits_the_form() throws Throwable {
		userSubmitsLogin = new UserSubmitsLogin(driver);
		userSubmitsLogin.UserSubmitsLoginCheckAssertion();
	}
	@Then("^signed in user logsout from webapplication$")
	public void signed_in_user_logsout_from_webapplication() throws Throwable {
		userLogout = new UserLogout(driver);
		userLogout.LogoutUser();
	}
	@Then("^unsigned in user submits the form with wrong credentials$")
	public void unsigned_in_user_submits_the_form_with_wrong_credentials() throws Throwable {
		userSubmitsLoginInvalidCredentials = new UserSubmitsLoginInvalidCredentials(driver);
		userSubmitsLoginInvalidCredentials.UserCheckInvaildCredentials();
	}
	@When("^signed in user able to click on the \"([^\"]*)\"$")
	public void unsigned_in_user_able_to_click_on_the(String sport) throws Throwable {
		userClicksSpecificSport = new UserClicksSpecificSport(driver);
		userClicksSpecificSport.UserClicksOnSport(sport);
	}
	@Then("^singed in user should able to open the \"([^\"]*)\" page$")
	public void singed_in_user_should_able_to_open_the_page(String sport) throws Throwable {
		sportCheckAssertion = new SportCheckAssertion(driver);
		sportCheckAssertion.SportsCheck(sport);
		}
	@Then("^singed in user should able to select the selection and place the bet with \"([^\"]*)\"$")
	public void singed_in_user_should_able_to_select_the_selection_and_place_the_bet_with(String value) throws Throwable {
		SM.signed_in_user_makes_selection_and_submits_the_bet_with_value(value);
	}
	@Then("^verify if Bet is placed$")
	public void verify_if_Bet_is_placed() throws Throwable {
		checkIfBetPlaced = new CheckIfBetPlaced(driver);
		checkIfBetPlaced.CheckBetStatus();
	}
}