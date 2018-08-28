package e2e.Geneity.feature.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import e2e.Geneity.interaction.CheckIfBetPlaced;
import e2e.Geneity.interaction.CloseBrowser;
import e2e.Geneity.interaction.HomePageTitleAssertion;
import e2e.Geneity.interaction.SportCheckAssertion;
import e2e.Geneity.interaction.UserChecksForMyaccountContent;
import e2e.Geneity.interaction.UserClicksOnMyAccount;
import e2e.Geneity.interaction.UserClicksSpecificSport;
import e2e.Geneity.interaction.UserLogin;
import e2e.Geneity.interaction.UserLogout;
import e2e.Geneity.interaction.UserMakesSelectionPlacesBet;
import e2e.Geneity.interaction.UserSubmitsLogin;
import e2e.Geneity.interaction.UserSubmitsLoginInvalidCredentials;

public class StepDefinations {
	public WebDriver driver = new ChromeDriver();
	
	HomePageTitleAssertion homePageTitleAssertion;
	CloseBrowser closeBrowser;
	OpenBrowserURL openBrowserURL;
	UserLogin userLogin;
	UserSubmitsLogin userSubmitsLogin;
	UserSubmitsLoginInvalidCredentials userSubmitsLoginInvalidCredentials;
	UserClicksSpecificSport userClicksSpecificSport;
	SportCheckAssertion sportCheckAssertion;
	UserLogout userLogout;
	CheckIfBetPlaced checkIfBetPlaced;
	UserClicksOnMyAccount userClicksOnMyAccount;
	UserChecksForMyaccountContent userChecksForMyaccountContent;
	UserMakesSelectionPlacesBet userMakesSelectionPlacesBet;

	@Given("^unsigned in user opens the geneity url in web browser$")
	public void unsigned_in_user_opens_the_geneity_url_in_web_browser() throws Throwable {
		openBrowserURL = new OpenBrowserURL(driver);
		openBrowserURL.OpenGenBetURL();
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
		userMakesSelectionPlacesBet = new UserMakesSelectionPlacesBet(driver);
		userMakesSelectionPlacesBet.SelectionWithValue(value);
	}
	@Then("^verify if Bet is placed$")
	public void verify_if_Bet_is_placed() throws Throwable {
		checkIfBetPlaced = new CheckIfBetPlaced(driver);
		checkIfBetPlaced.CheckBetStatus();
	}
	@Then("^signed in user clicks on My account to check the balance$")
	public void signed_in_user_clicks_on_My_account_to_check_the_balance() throws Throwable {
		userClicksOnMyAccount = new UserClicksOnMyAccount(driver);
		userClicksOnMyAccount.UserClicksMyAccount();
	}
	@Then("^signed in user should able to see betlist, bonus and cashier in my account popup$")
	public void signed_in_user_should_able_to_see_betlist_bonus_and_cashier_in_my_account_popup() throws Throwable {
		userChecksForMyaccountContent = new UserChecksForMyaccountContent(driver);
		userChecksForMyaccountContent.UserAccountAssertion();
	}
}