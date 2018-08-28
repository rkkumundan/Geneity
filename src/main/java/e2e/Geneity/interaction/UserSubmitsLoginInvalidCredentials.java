package e2e.Geneity.interaction;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

public class UserSubmitsLoginInvalidCredentials extends TargetObjects {
	WebDriver driver;

	public UserSubmitsLoginInvalidCredentials(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	public void UserCheckInvaildCredentials() {
		LoginButton.click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement ErrorResponse;
		ErrorResponse = wait.until(ExpectedConditions.visibilityOf(ErrorReseponse));
		String ActualErrorResponse = ErrorResponse.getText();
		String ExpectedErrorResponse = "Incorrect username or password entered.<br>Verify your account information and try again.\nx";
		assertThat(ActualErrorResponse, equalTo(ExpectedErrorResponse));
	}
}
