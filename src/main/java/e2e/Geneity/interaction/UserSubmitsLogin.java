package e2e.Geneity.interaction;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class UserSubmitsLogin extends TargetObjects{
	WebDriver driver;

	public UserSubmitsLogin(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	public void UserSubmitsLoginCheckAssertion(){
		LoginButton.click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement ErrorResponse;
		ErrorResponse = wait.until(ExpectedConditions.visibilityOf(MyAccount));
		String ExpectedErrorResponse = "My Account";
		String ActualErrorResponse = ErrorResponse.getText();
		assertThat(ActualErrorResponse, equalTo(ExpectedErrorResponse));
	}
}