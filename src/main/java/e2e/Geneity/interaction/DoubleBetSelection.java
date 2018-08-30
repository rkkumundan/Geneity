package e2e.Geneity.interaction;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class DoubleBetSelection extends TargetObjects {
	WebDriver driver;
	
	public DoubleBetSelection(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver=driver;   
	}
	public void UserMakesSelection() {
		SelectASelection.click();
	}

}
