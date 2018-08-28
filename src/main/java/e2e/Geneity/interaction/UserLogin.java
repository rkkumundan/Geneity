package e2e.Geneity.interaction;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class UserLogin extends TargetObjects {
	WebDriver driver;

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
