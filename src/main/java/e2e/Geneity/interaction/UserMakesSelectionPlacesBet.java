package e2e.Geneity.interaction;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class UserMakesSelectionPlacesBet extends TargetObjects{
	WebDriver driver;

	public UserMakesSelectionPlacesBet(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}

	public void SelectionWithValue(String value){
		SelectASelection.click();
		SingleBetInput.sendKeys(value);
		PlaceBetButton.click();
	}
}
