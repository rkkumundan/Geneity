package e2e.Geneity.interaction;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class SportCheckAssertion extends TargetObjects {
	WebDriver driver;
		
	public SportCheckAssertion(WebDriver driver){
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	public void SportsCheck(String Sport){
		String Sporttype = SportType.getText();
		assertThat(Sport, equalTo(Sporttype));
	}
}