package e2e.Geneity.interaction;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class UserClicksOnMyAccount extends TargetObjects{
	WebDriver driver;
	
	public UserClicksOnMyAccount(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}	
	public void UserClicksMyAccount() {
		MyAccount.click();
		
	}

}
