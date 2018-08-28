package e2e.Geneity.objects;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UserSubmitsLoginInvalidCredentials {
	WebDriver driver;

	@FindBy(xpath="//*[@id=\'header-area\']/div[1]/div[1]/form/button")
	private WebElement LoginButton;
	@FindBy(xpath="//*[@id=\'header-area\']/div[1]/div[1]/div")
	private WebElement ErrorReseponse;
		
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
