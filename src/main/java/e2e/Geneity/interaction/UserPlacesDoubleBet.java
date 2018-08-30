package e2e.Geneity.interaction;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class UserPlacesDoubleBet extends TargetObjects {
	WebDriver driver;
	
	public UserPlacesDoubleBet(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	public void UserPlacestheDoubleBet(String value) {
		DoubleBetInput.sendKeys(value);
		PlaceBetButton.click();		
	}
}
