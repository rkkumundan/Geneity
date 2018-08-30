package e2e.Geneity.user_interface.ui_model;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Target class for element locator
 *
 * @author RajKumar
 */
public class TargetObjects {
	WebDriver driver;	
	
	@FindBy(name="username")
	public WebElement UserName;

	@FindBy(name="password")
	public WebElement Password;
	
	@FindBy(xpath="//*[contains(text(),'Your bet has been placed')]")
	public WebElement CheckInplaySelection;
	
	@FindBy(linkText="Add funds to your account")
	public WebElement CheckFailedInplaySelection;
	
	@FindBy(css="#main-area > div.fragment.sports-title > div.heading > h2")
	public WebElement SportType;
	
	@FindBy(linkText="Bets List")
	public WebElement BetsList;

	@FindBy(linkText="Bonus")
	public WebElement Bonus;

	@FindBy(linkText="Cashier")
	public WebElement Cashier;
	
	@FindBy(linkText="My Account")
	public WebElement MyAccount;
		
	@FindBy(name="do-logout")
	public WebElement Logout;
	
	@FindBy(linkText="Forgot your password?")
	public WebElement Login;
	
	@FindBy(className="log-in")
	public WebElement LoginButton;
	
	@FindBy(xpath="//*[@id=\'header-area\']/div[1]/div[1]/div")
	public WebElement ErrorReseponse;
		
	@FindBy(xpath="//*[@name='add-to-slip'][1]")
	public WebElement SelectASelection;
	
	@FindBy(name="bet_spl")
	public WebElement SingleBetInput;
	
	@FindBy(name="place_slip")
	public WebElement PlaceBetButton;
}
