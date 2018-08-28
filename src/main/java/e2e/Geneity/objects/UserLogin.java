package e2e.Geneity.objects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UserLogin {
	WebDriver driver;
	
	@FindBy(name="username")
	private WebElement UserName;

	@FindBy(name="password")
	private WebElement Password;
	
	public UserLogin(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}

	public void UserSendsData(String username, String password)
	{
	UserName.sendKeys(username);	
	Password.sendKeys(password);
	}
}
